$dir = "D:\dxn-landing\public\img"
$files = Get-ChildItem -Path $dir -Filter "*_no_bg.png"
foreach ($file in $files) {
    $originalBase = $file.BaseName.Replace("_no_bg", "")
    $targetPng = [System.IO.Path]::Combine($dir, ($originalBase + ".png"))
    $targetJpg = [System.IO.Path]::Combine($dir, ($originalBase + ".jpg"))
    
    # Remove old versions if they exist
    if (Test-Path $targetJpg) { 
        Remove-Item $targetJpg -Force 
        Write-Host "Removed $targetJpg"
    }
    
    # Replace/Rename the new version
    Move-Item $file.FullName $targetPng -Force
    Write-Host "Replaced image with $targetPng"
}
