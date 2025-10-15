# 🏢 REALSTATE India - Real Estate Template

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/smartproperty-india)
[![License](https://img.shields.io/badge/license-Regular-green.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

> A modern, fully responsive real estate HTML template designed specifically for Indian property markets. Perfect for property listing websites, real estate agencies, builders, and property rental platforms.

![REALSTATE India Preview](https://via.placeholder.com/1200x600/0078D7/FFFFFF?text=REALSTATE+India+Template)

## ✨ Features

### 🎨 Design & UI
- ✅ **Modern & Clean Design** - Professional interface with smooth animations
- ✅ **Fully Responsive** - Works perfectly on all devices (Mobile, Tablet, Desktop)
- ✅ **Dark Mode** - Built-in dark theme toggle
- ✅ **RTL Support** - Right-to-left language support for Arabic
- ✅ **Custom Icons** - Font Awesome icon library included

### 🇮🇳 Indian Localization
- ✅ **INR Currency** - Indian Rupee formatting (₹)
- ✅ **Indian Cities** - Pre-configured with major Indian cities
- ✅ **Local Measurements** - Square feet, BHK configurations
- ✅ **Indian Phone Format** - +91 country code

### 📄 Pages (20+)
- 🏠 **Homepage** - Hero section with advanced search
- 🔍 **Property Listing** - Grid/List view with filters
- 📋 **Property Details** - Complete property information
- 👥 **Agents Directory** - Real estate agent profiles
- 💼 **About Us** - Company information
- 📞 **Contact** - Contact form with map integration
- 👤 **Login/Register** - User authentication pages
- 📊 **Dashboard** - User and admin dashboards
- ➕ **Add Property** - Property submission form
- 📝 **Blog** - Blog listing and detail pages
- ❓ **FAQ** - Frequently asked questions
- ⭐ **Testimonials** - Client reviews
- 💰 **Pricing** - Pricing plans
- 📂 **Categories** - Property type categories
- 📜 **Terms & Privacy** - Legal pages

### 🚀 Functionality
- ✅ Advanced Property Search
- ✅ Property Filtering (Price, Location, Type, BHK)
- ✅ Map Integration (Mapbox/OpenStreetMap)
- ✅ Image Gallery with Lightbox
- ✅ Favorite/Wishlist System
- ✅ AJAX Contact Forms
- ✅ Property Inquiry Forms
- ✅ Social Media Sharing
- ✅ Newsletter Subscription
- ✅ Property Comparison
- ✅ Schedule Visit

## 📁 File Structure

```
realestate-template/
├── assets/
│   ├── css/
│   │   ├── style.css              # Core styling
│   │   ├── layout.css             # Grid & layout utilities
│   │   ├── responsive.css         # Mobile responsiveness
│   │   ├── dark.css               # Dark theme
│   │   └── rtl.css                # RTL support
│   ├── js/
│   │   ├── main.js                # Core JavaScript
│   │   ├── ajax.js                # AJAX forms
│   │   └── plugins.js             # Plugin initialization
│   └── img/                       # Images folder
├── pages/
│   ├── index.html                 # Homepage
│   ├── properties.html            # Property listings
│   ├── property-details.html      # Property details
│   ├── agents.html                # Agents directory
│   ├── contact.html               # Contact page
│   ├── login.html                 # Login page
│   ├── register.html              # Registration
│   ├── dashboard.html             # User dashboard
│   └── [...other pages]
├── partials/
│   ├── header.html                # Reusable header
│   ├── footer.html                # Reusable footer
│   ├── sidebar.html               # Dashboard sidebar
│   └── modals.html                # Modal components
├── docs/
│   ├── documentation.html         # Full documentation
│   └── changelog.txt              # Version history
├── .gitignore
├── README.md                      # This file
├── README.txt                     # Text documentation
└── INSTALLATION.md                # Setup guide
```

## 🚀 Quick Start

### 1. Download & Extract
```bash
# Clone or download the repository
git clone https://github.com/yourusername/smartproperty-india.git
cd smartproperty-india
```

### 2. Open in Browser
Simply open `/pages/index.html` in your web browser.

### 3. Use Live Server (Recommended)

**VS Code:**
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Python:**
```bash
cd pages
python -m http.server 8000
# Visit http://localhost:8000
```

**Node.js:**
```bash
npm install -g http-server
cd pages
http-server
```

## 🎨 Customization

### Change Colors
Edit `assets/css/style.css`:
```css
:root {
    --primary-color: #0078D7;      /* Your primary color */
    --secondary-color: #F4A100;    /* Your secondary color */
    --dark: #1A1A1A;               /* Dark color */
}
```

### Update Logo
Edit `partials/header.html`:
```html
<a href="index.html" class="logo">
    YourCompany<span>Name</span>
</a>
```

### Connect to Backend
Edit `assets/js/ajax.js`:
```javascript
const API_BASE_URL = 'https://your-api.com/api';
```

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Latest ✅ |
| Firefox | Latest ✅ |
| Safari  | Latest ✅ |
| Edge    | Latest ✅ |
| Opera   | Latest ✅ |

## 🌐 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

### Netlify
Drag and drop the `realestate-template` folder to [Netlify](https://netlify.com).

### Traditional Hosting
Upload all files via FTP/SFTP to your web server.

## 🛠️ Built With

- **[Bootstrap 5](https://getbootstrap.com/)** - Frontend framework
- **[jQuery](https://jquery.com/)** - JavaScript library
- **[Font Awesome](https://fontawesome.com/)** - Icon library
- **[AOS](https://michalsnik.github.io/aos/)** - Animation on scroll
- **[Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)** - Carousel plugin
- **[Chart.js](https://www.chartjs.org/)** - Charts for dashboard

## 📚 Documentation

- 📖 [Full Documentation](docs/documentation.html)
- 📋 [Installation Guide](INSTALLATION.md)
- 📝 [Changelog](docs/changelog.txt)
- 📄 [README Text Version](README.txt)

## 🤝 Support

Need help? Get in touch:
- 📧 Email: support@smartfusion.dev
- 📖 Documentation: Check `docs/documentation.html`
- 🐛 Issues: Open an issue on GitHub

## 📄 License

Regular License - See LICENSE file for details

## 🎯 Use Cases

Perfect for:
- 🏘️ Property Listing Websites
- 🏢 Real Estate Agency Portals
- 👷 Builders & Developers
- 🏠 Rental & Leasing Platforms
- 🛏️ PG / Hostel Listing Sites
- 🌳 Land Investment Sites

## ⚠️ Important Notes

- This is a **frontend template only** (no backend included)
- AJAX forms are in **demo mode**
- Connect to your own backend/API for production
- All property data is static/placeholder

## 🔄 Updates

Version 1.0.0 - October 14, 2025
- ✨ Initial Release
- 📦 20+ HTML Pages
- 🎨 Modern Design System
- 🇮🇳 Indian Localization
- 📱 Full Responsiveness

## 👏 Credits

### Images
- [Unsplash](https://unsplash.com/) - Property images
- [Pexels](https://www.pexels.com/) - Stock photos
- [Pravatar](https://pravatar.cc/) - Avatar placeholders

### Fonts
- [Google Fonts](https://fonts.google.com/) - Poppins & Inter

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">

**Built with ❤️ by [SmartFusion](https://github.com/yourusername)**

**© 2025 REALSTATE India. All Rights Reserved.**

[Demo](#) • [Documentation](docs/documentation.html) • [Support](mailto:support@smartfusion.dev)

</div>

