# Reply to a PR review comment via GitHub CLI and resolve the thread
# Usage: .\scripts\reply-copilot-comment.ps1 -CommentId 2863756125 -Reply "Opgelost in abc1234: korte uitleg."
#        .\scripts\reply-copilot-comment.ps1 -CommentId 2863860509 -PrNumber 26 -Reply "Klaar."
#        .\scripts\reply-copilot-comment.ps1 -CommentId 2863860509 -ResolveOnly
# Requires: gh auth login. Pass -PrNumber voor andere PR’s.
# Default repository: Agile-Halewyn/honeybadger-website (override met -Owner / -Repo).

param(
    [Parameter(Mandatory)] [long]$CommentId,
    [string]$Reply,
    [int]$PrNumber = 15,
    [string]$Owner = "Agile-Halewyn",
    [string]$Repo = "honeybadger-website",
    [switch]$NoResolve,
    [switch]$ResolveOnly
)

if (-not $ResolveOnly -and -not $Reply) {
    Write-Host "Error: -Reply is required unless -ResolveOnly."
    exit 1
}

if (-not $ResolveOnly) {
    $json = @{ body = $Reply; in_reply_to = $CommentId } | ConvertTo-Json
    $json | gh api "repos/$Owner/$Repo/pulls/$PrNumber/comments" -X POST --input - | Out-Null
    Write-Host "Reply posted to comment $CommentId"
}

if ($NoResolve -and -not $ResolveOnly) { exit 0 }

function Get-CommentIdsForThread {
    param(
        [Parameter(Mandatory)] $ThreadNode
    )
    $ids = [System.Collections.Generic.List[long]]::new()
    foreach ($c in $ThreadNode.comments.nodes) {
        $ids.Add([long]$c.databaseId) | Out-Null
    }
    $more = $ThreadNode.comments.pageInfo.hasNextPage
    $cursor = $ThreadNode.comments.pageInfo.endCursor
    while ($more) {
        $cq = @"
query {
  node(id: "$($ThreadNode.id)") {
    ... on PullRequestReviewThread {
      comments(first: 100, after: `"$cursor`") {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          databaseId
        }
      }
    }
  }
}
"@
        $cr = gh api graphql -f query="$cq" | ConvertFrom-Json
        $page = $cr.data.node.comments
        foreach ($c in $page.nodes) {
            $ids.Add([long]$c.databaseId) | Out-Null
        }
        $more = $page.pageInfo.hasNextPage
        $cursor = $page.pageInfo.endCursor
    }
    return $ids
}

$threadsCursor = $null
$hasMoreThreads = $true
$found = $false

while ($hasMoreThreads -and -not $found) {
    $threadsAfter = if ($threadsCursor) { ", after: `"$threadsCursor`"" } else { "" }
    $threadsQuery = @"
query {
  repository(owner: "$Owner", name: "$Repo") {
    pullRequest(number: $PrNumber) {
      reviewThreads(first: 100$threadsAfter) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          isResolved
          comments(first: 100) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              databaseId
            }
          }
        }
      }
    }
  }
}
"@
    try {
        $result = gh api graphql -f query="$threadsQuery" 2>$null | ConvertFrom-Json
    } catch {
        Write-Host "Could not fetch review threads (GraphQL parse error). Skipping resolve."
        exit 0
    }
    if (-not $result.data) {
        Write-Host "Could not fetch review threads (GraphQL). Skipping resolve."
        exit 0
    }
    $reviewThreads = $result.data.repository.pullRequest.reviewThreads

    foreach ($thread in $reviewThreads.nodes) {
        $commentIds = Get-CommentIdsForThread -ThreadNode $thread
        if ($commentIds -notcontains [long]$CommentId) { continue }
        $found = $true
        if ($thread.isResolved) {
            Write-Host "Thread already resolved."
            break
        }
        $threadId = $thread.id
        $resolveMutation = 'mutation { resolveReviewThread(input: { threadId: "' + $threadId + '" }) { thread { isResolved } } }'
        gh api graphql -f query=$resolveMutation 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Thread resolved."
        } else {
            Write-Host "Resolve failed (exit code $LASTEXITCODE)."
        }
        break
    }

    $hasMoreThreads = $reviewThreads.pageInfo.hasNextPage
    $threadsCursor = $reviewThreads.pageInfo.endCursor
}

if (-not $found) {
    Write-Host "No matching thread found for comment $CommentId."
}
