# Fetch Copilot PR review comments via GitHub CLI
# Usage: .\scripts\fetch-copilot-comments.ps1 -PrNumber [N]  [-Owner org] [-Repo name]
# Default repository: Agile-Halewyn/honeybadger-website
# Output: Markdown file with comments for Cursor to process

param(
    [int]$PrNumber = 15,
    [string]$Owner = "Agile-Halewyn",
    [string]$Repo = "honeybadger-website"
)

if (-not (Test-Path "docs")) { New-Item -ItemType Directory -Path "docs" | Out-Null }

# Use GraphQL cursor pagination to fetch all review threads and all comments per thread.

function Add-CopilotComment {
    param(
        [Parameter(Mandatory = $true)] $CommentNode,
        [Parameter(Mandatory = $true)] [ref]$OutputComments
    )

    $copilotLogins = @("copilot", "copilot-pull-request-reviewer")
    if ($CommentNode.author.login -in $copilotLogins) {
        $lineNum = if ($CommentNode.line) { $CommentNode.line } elseif ($CommentNode.originalLine) { $CommentNode.originalLine } else { $null }

        $OutputComments.Value += [PSCustomObject]@{
            id = $CommentNode.databaseId
            path = $CommentNode.path
            line = $lineNum
            body = $CommentNode.body
            diffHunk = $CommentNode.diffHunk
            created = $CommentNode.createdAt
        }
    }
}

$comments = @()
$threadsCursor = $null
$hasMoreThreads = $true

while ($hasMoreThreads) {
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
              id
              databaseId
              author {
                login
              }
              body
              path
              line
              originalLine
              diffHunk
              createdAt
            }
          }
        }
      }
    }
  }
}
"@

    $threadsResponse = gh api graphql -f query="$threadsQuery" | ConvertFrom-Json
    $reviewThreads = $threadsResponse.data.repository.pullRequest.reviewThreads

    foreach ($thread in $reviewThreads.nodes) {
        if (-not $thread.isResolved) {
            foreach ($comment in $thread.comments.nodes) {
                Add-CopilotComment -CommentNode $comment -OutputComments ([ref]$comments)
            }

            $commentsCursor = $thread.comments.pageInfo.endCursor
            $hasMoreComments = $thread.comments.pageInfo.hasNextPage

            while ($hasMoreComments) {
                $commentsQuery = @"
query {
  node(id: "$($thread.id)") {
    ... on PullRequestReviewThread {
      comments(first: 100, after: `"$commentsCursor`") {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          databaseId
          author {
            login
          }
          body
          path
          line
          originalLine
          diffHunk
          createdAt
        }
      }
    }
  }
}
"@

                $commentsResponse = gh api graphql -f query="$commentsQuery" | ConvertFrom-Json
                $commentsPage = $commentsResponse.data.node.comments

                foreach ($comment in $commentsPage.nodes) {
                    Add-CopilotComment -CommentNode $comment -OutputComments ([ref]$comments)
                }

                $hasMoreComments = $commentsPage.pageInfo.hasNextPage
                $commentsCursor = $commentsPage.pageInfo.endCursor
            }
        }
    }

    $hasMoreThreads = $reviewThreads.pageInfo.hasNextPage
    $threadsCursor = $reviewThreads.pageInfo.endCursor
}

$output = @"
# Copilot PR #$PrNumber Review Comments (UNRESOLVED only)
Generated: $(Get-Date -Format "yyyy-MM-dd HH:mm")

"@

foreach ($c in $comments) {
  $lineInfo = if ($c.line) { " (line $($c.line))" } else { "" }
  $output += @"

## $($c.path)$lineInfo
**Comment ID:** $($c.id)

$($c.body)

---
"@
}

$outPath = "docs/copilot-comments-pr$PrNumber.md"
$output | Out-File -FilePath $outPath -Encoding utf8
Write-Host "Written to $outPath"
Write-Host "Total UNRESOLVED Copilot comments: $($comments.Count)"
