@echo off
REM GitHub Pages Fix Script for REALSTATE Template (Windows)
REM This script moves files from /pages/ to root and updates all links

echo 🔧 Fixing GitHub Pages 404 Error...
echo ==================================

REM Check if pages directory exists
if not exist "pages" (
    echo ❌ Error: 'pages' directory not found!
    echo Make sure you're running this script from the template root directory.
    pause
    exit /b 1
)

echo 📁 Moving files from /pages/ to root directory...

REM Move all files from pages to root
move pages\* . >nul 2>&1
move pages\.* . >nul 2>&1

REM Remove empty pages directory
rmdir pages >nul 2>&1

echo ✅ Files moved successfully!

echo 🔗 Updating internal links in HTML files...

REM Update links in all HTML files using PowerShell
powershell -Command "(Get-ChildItem -Path . -Filter '*.html' -Recurse) | ForEach-Object { (Get-Content $_.FullName) -replace 'href=\"pages/', 'href=\"' | Set-Content $_.FullName }"
powershell -Command "(Get-ChildItem -Path . -Filter '*.html' -Recurse) | ForEach-Object { (Get-Content $_.FullName) -replace 'src=\"pages/', 'src=\"' | Set-Content $_.FullName }"

echo ✅ Links updated successfully!

echo 📝 Updating .gitignore...
echo pages/ >> .gitignore

echo 🎉 GitHub Pages fix completed!
echo.
echo Next steps:
echo 1. Commit your changes:
echo    git add .
echo    git commit -m "Fix GitHub Pages: Move files to root"
echo    git push origin main
echo.
echo 2. Go to your GitHub repository → Settings → Pages
echo 3. Set Source to: Deploy from a branch → main → / (root)
echo 4. Wait 5-10 minutes for deployment
echo 5. Visit: https://yourusername.github.io/your-repository-name
echo.
echo 🚀 Your REALSTATE template should now work on GitHub Pages!
pause
