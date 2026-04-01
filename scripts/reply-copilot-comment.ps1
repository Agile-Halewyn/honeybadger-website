# Reply to a PR review comment via GitHub CLI and resolve the thread
# Usage: .\scripts\reply-copilot-comment.ps1 -CommentId 2863756125 -Reply "Fixed in commit xyz."
#        .\scripts\reply-copilot-comment.ps1 -CommentId 2863860509 -PrNumber 26 -Reply "Done"
#        .\scripts\reply-copilot-comment.ps1 -CommentId 2863860509 -ResolveOnly  # resolve without replying
# Requires: gh auth login. Pass -PrNumber for PRs other than 15.

param(
    [Parameter(Mandatory)] [long]$CommentId,
    [string]$Reply,
    [int]$PrNumber = 15,
    [string]$Owner = "Agile-Halewyn",
    [string]$Repo = "HoneyBadgerTrader",
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

# 2. Find thread containing this comment and resolve it (GraphQL)
$query = 'query { repository(owner: "' + $Owner + '", name: "' + $Repo + '") { pullRequest(number: ' + $PrNumber + ') { reviewThreads(first: 100) { nodes { id isResolved comments(first: 10) { nodes { databaseId } } } } } } }'
try {
    $result = gh api graphql -f query=$query 2>$null | ConvertFrom-Json
} catch {
    Write-Host "Could not fetch review threads (GraphQL parse error). Skipping resolve."
    exit 0
}
if (-not $result.data) {
    Write-Host "Could not fetch review threads (GraphQL). Skipping resolve."
    exit 0
}
$threads = $result.data.repository.pullRequest.reviewThreads.nodes

$found = $false
foreach ($thread in $threads) {
    $commentIds = $thread.comments.nodes | ForEach-Object { [long]$_.databaseId }
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
if (-not $found) {
    Write-Host "No matching thread found for comment $CommentId."
}
