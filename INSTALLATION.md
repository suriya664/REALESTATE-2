# SmartProperty India - Installation Guide

## Quick Start

### Option 1: Direct Browser Access
1. Extract the template files
2. Navigate to `/pages/` folder
3. Open `index.html` in your web browser

### Option 2: Using Live Server (Recommended)

#### Visual Studio Code
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Python
```bash
cd realestate-template/pages
python -m http.server 8000
```
Then visit: `http://localhost:8000`

#### PHP
```bash
cd realestate-template/pages
php -S localhost:8000
```
Then visit: `http://localhost:8000`

#### Node.js (http-server)
```bash
npm install -g http-server
cd realestate-template/pages
http-server
```

## Customization Steps

### 1. Update Colors
Edit `assets/css/style.css`:
```css
:root {
    --primary-color: #0078D7;      /* Your primary color */
    --secondary-color: #F4A100;    /* Your secondary color */
}
```

### 2. Change Logo
Edit `partials/header.html`:
```html
<a href="index.html" class="logo">
    YourCompany<span>Name</span>
</a>
```

### 3. Update Contact Information
Edit `partials/footer.html` and `pages/contact.html` with your:
- Company name
- Address
- Phone numbers
- Email addresses

### 4. Connect to Backend API

Edit `assets/js/ajax.js`:
```javascript
const API_BASE_URL = 'https://your-api.com/api';
```

Update form endpoints as needed.

### 5. Replace Images
- Add your images to `assets/img/` folders
- Update image paths in HTML files
- Recommended image sizes:
  - Property cards: 800x600px
  - Property details: 1200x800px
  - Agent profiles: 300x300px
  - Banners: 1920x800px

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```
3. Go to Settings > Pages
4. Select `main` branch and `/pages` folder
5. Your site will be live at `https://yourusername.github.io/your-repo/`

### Netlify
1. Drag and drop the `realestate-template` folder to Netlify
2. Set publish directory to `/pages`
3. Deploy!

### Traditional Hosting
1. Upload all files via FTP/SFTP
2. Ensure file permissions are correct
3. Point domain to the hosting directory

## Adding Backend

This template includes frontend-only demo functionality. To add backend:

### Node.js/Express Example
```javascript
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Process form data
    res.json({ success: true });
});
```

### PHP Example
```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // Process form data
    echo json_encode(['success' => true]);
}
?>
```

## Troubleshooting

### Images not loading
- Check image paths are correct (use relative paths)
- Ensure images exist in `assets/img/` folder

### Forms not working
- Forms are in AJAX demo mode
- Connect to your backend API
- Update endpoints in `assets/js/ajax.js`

### Responsive issues
- Clear browser cache
- Check viewport meta tag is present
- Test in different browsers

## Support

For questions or support:
- Email: support@smartfusion.dev
- Check README.txt for detailed documentation

## What's Included

✅ 20+ HTML Pages
✅ Responsive Design
✅ Dark Mode Support
✅ RTL Support
✅ Indian Localization
✅ Property Search & Filters
✅ Agent Directory
✅ User Dashboard
✅ AJAX Forms
✅ Map Integration
✅ Image Gallery
✅ Social Sharing
✅ SEO Optimized

---

Built with ❤️ by SmartFusion | © 2025

