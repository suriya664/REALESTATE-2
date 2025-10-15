#!/bin/bash

# GitHub Pages Fix Script for REALSTATE Template
# This script moves files from /pages/ to root and updates all links

echo "🔧 Fixing GitHub Pages 404 Error..."
echo "=================================="

# Check if pages directory exists
if [ ! -d "pages" ]; then
    echo "❌ Error: 'pages' directory not found!"
    echo "Make sure you're running this script from the template root directory."
    exit 1
fi

echo "📁 Moving files from /pages/ to root directory..."

# Move all files from pages to root
mv pages/* . 2>/dev/null
mv pages/.* . 2>/dev/null || true

# Remove empty pages directory
rmdir pages 2>/dev/null || true

echo "✅ Files moved successfully!"

echo "🔗 Updating internal links in HTML files..."

# Update links in all HTML files
find . -name "*.html" -type f -exec sed -i 's/href="pages\//href="/g' {} \;
find . -name "*.html" -type f -exec sed -i 's/src="pages\//src="/g' {} \;

echo "✅ Links updated successfully!"

echo "📝 Updating .gitignore..."
echo "pages/" >> .gitignore

echo "🎉 GitHub Pages fix completed!"
echo ""
echo "Next steps:"
echo "1. Commit your changes:"
echo "   git add ."
echo "   git commit -m 'Fix GitHub Pages: Move files to root'"
echo "   git push origin main"
echo ""
echo "2. Go to your GitHub repository → Settings → Pages"
echo "3. Set Source to: Deploy from a branch → main → / (root)"
echo "4. Wait 5-10 minutes for deployment"
echo "5. Visit: https://yourusername.github.io/your-repository-name"
echo ""
echo "🚀 Your REALSTATE template should now work on GitHub Pages!"
