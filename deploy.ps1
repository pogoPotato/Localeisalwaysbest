<#
    deploy.ps1 - one-shot build + ship for rijankoirala.com.np

    Usage:  ./deploy.ps1   (or just  ./deploy  via the deploy.cmd wrapper)

    What it does, in order:
      1. Builds the site (web/) and fails fast if the build is broken -
         nothing gets committed or pushed on a bad build.
      2. Stages everything (git add -A) and shows you what changed.
      3. Prompts for a commit message (Enter for a timestamped default).
      4. Commits and pushes to the current branch.
      5. Watches the GitHub Actions deploy run and tells you pass/fail,
         instead of you having to go check the Actions tab yourself.
#>

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "==> Building site (web/)..." -ForegroundColor Cyan
Push-Location (Join-Path $PSScriptRoot "web")
try {
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "npm run build failed (exit $LASTEXITCODE)" }
}
finally {
    Pop-Location
}
Write-Host "==> Build OK.`n" -ForegroundColor Green

git add -A

$changes = git status --porcelain
if (-not $changes) {
    Write-Host "Nothing to commit - working tree is clean." -ForegroundColor Yellow
    exit 0
}

Write-Host "==> Changes to be committed:" -ForegroundColor Cyan
git status --short
Write-Host ""

$commitMessage = Read-Host "Commit message (Enter for a timestamped default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update site $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

git commit -m $commitMessage
if ($LASTEXITCODE -ne 0) { throw "git commit failed" }

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
Write-Host "`n==> Pushing to origin/$branch..." -ForegroundColor Cyan
git push origin $branch
if ($LASTEXITCODE -ne 0) { throw "git push failed" }

# --- Watch the GitHub Actions deploy so you know it actually went live ---
Write-Host "`n==> Watching GitHub Actions..." -ForegroundColor Cyan

$sha = (git rev-parse HEAD).Trim()
$repo = "pogoPotato/Localeisalwaysbest"
$headers = @{ "User-Agent" = "deploy-script" }
$run = $null

for ($i = 0; $i -lt 15 -and -not $run; $i++) {
    Start-Sleep -Seconds 3
    try {
        $runs = Invoke-RestMethod -Headers $headers -Uri "https://api.github.com/repos/$repo/actions/runs?per_page=5"
        $run = $runs.workflow_runs | Where-Object { $_.head_sha -eq $sha } | Select-Object -First 1
    }
    catch {
        # transient API hiccup - keep polling
    }
}

if (-not $run) {
    Write-Host "Pushed OK, but couldn't find the workflow run yet." -ForegroundColor Yellow
    Write-Host "Check manually: https://github.com/$repo/actions"
    exit 0
}

Write-Host "Run: $($run.html_url)"
while ($run.status -ne "completed") {
    Start-Sleep -Seconds 5
    $run = Invoke-RestMethod -Headers $headers -Uri $run.url
    Write-Host "  status: $($run.status)"
}

if ($run.conclusion -eq "success") {
    Write-Host "`n==> Deployed! https://rijankoirala.com.np" -ForegroundColor Green
}
else {
    Write-Host "`n==> Deploy finished with conclusion: $($run.conclusion)" -ForegroundColor Red
    Write-Host "    $($run.html_url)"
    exit 1
}
