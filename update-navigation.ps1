# PowerShell script to update navigation links in HTML files
$screenDir = "C:\Users\Msi\Documents\potential\Bside-design\generated-screens"

# Function to update back buttons in a file
function Update-BackButton {
    param(
        [string]$filePath,
        [string]$targetPage
    )

    $content = Get-Content $filePath -Raw

    # Pattern 1: Button with onclick="alert('Go back')"
    $content = $content -replace 'onclick="alert\(''Go back''\)"', "onclick=`"window.location.href='$targetPage'`""

    # Pattern 2: Button with history.back()
    $content = $content -replace 'onclick="history\.back\(\)"', "onclick=`"window.location.href='$targetPage'`""

    # Pattern 3: Convert button to anchor tag for back navigation
    $content = $content -replace '<button\s+([^>]*?)onclick="window\.location\.href=''([^'']+)''"([^>]*?)>', '<a href="$2"$1$3>'
    $content = $content -replace '<button\s+([^>]*?)(class="[^"]*back[^"]*")([^>]*?)>', '<a $1$2$3 href="' + $targetPage + '">'

    Set-Content $filePath -Value $content -NoNewline
    Write-Host "Updated: $filePath -> Back to $targetPage"
}

# Update specific pages with their back navigation targets
Write-Host "`n=== Updating Back Buttons ===" -ForegroundColor Green

# Detail pages -> back to feed
Update-BackButton "$screenDir\08-collection-detail.html" "./06-feed.html"
Update-BackButton "$screenDir\09-artwork-detail.html" "./06-feed.html"
Update-BackButton "$screenDir\10-artist-profile.html" "./06-feed.html"

# Camera flow -> back to feed or previous
Update-BackButton "$screenDir\12-camera-view.html" "./06-feed.html"
Update-BackButton "$screenDir\13-camera-view-2.html" "./06-feed.html"
Update-BackButton "$screenDir\14-recognition-success.html" "./06-feed.html"
Update-BackButton "$screenDir\15-recognition-failure.html" "./12-camera-view.html"
Update-BackButton "$screenDir\16-manual-artwork-input.html" "./06-feed.html"

# Search flow -> back to previous
Update-BackButton "$screenDir\17-search-main.html" "./06-feed.html"
Update-BackButton "$screenDir\18-search-results.html" "./17-search-main.html"

# Profile/Settings flow -> back to profile
Update-BackButton "$screenDir\20-settings.html" "./19-my-page-profile.html"
Update-BackButton "$screenDir\21-edit-profile.html" "./19-my-page-profile.html"
Update-BackButton "$screenDir\22-follower-list.html" "./19-my-page-profile.html"
Update-BackButton "$screenDir\23-following-list.html" "./19-my-page-profile.html"
Update-BackButton "$screenDir\24-notification-list.html" "./06-feed.html"

Write-Host "`nNavigation update complete!" -ForegroundColor Green
