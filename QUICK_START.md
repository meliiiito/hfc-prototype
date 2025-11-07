# Quick Start Guide - Web Components Edition

Get started with the refactored Budget Blinds site in 5 minutes.

## 🚀 Instant Setup

1. **Open the site:**
   ```bash
   open index.html
   ```
   That's it! No build process, no dependencies to install.

2. **View in browser:**
   - Double-click `index.html`
   - Or use a local server: `python3 -m http.server 8000`

## 📦 What You Get

The site now uses 4 custom Web Components:

- `<bb-header>` - Responsive navigation
- `<bb-card>` - Product/content cards  
- `<bb-accordion>` - FAQ sections
- `<bb-testimonials>` - Customer reviews

## 🎯 Quick Examples

### Add a New Product Card

```html
<bb-card 
  product
  image="assets/images/new-product.jpg" 
  image-alt="Description"
  title="New Product"
  description="Product details here."
  href="#new-product"
  button-text="Learn More">
</bb-card>
```

### Add a FAQ Item

```html
<bb-accordion question="Your question here?">
  <div slot="answer">
    <p>Your answer here.</p>
  </div>
</bb-accordion>
```

### Create a New Page Header

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <bb-header logo="Budget Blinds" cta-text="Contact Us" cta-href="#contact">
    <nav-items>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
    </nav-items>
  </bb-header>
  
  <!-- Your content -->
  
  <script src="assets/js/web-components.js"></script>
</body>
</html>
```

## 🎨 Customizing Styles

All styling uses CSS variables. Edit `assets/css/variables.css`:

```css
:root {
  --primary-budget-blinds-blue: #003B73;  /* Change brand color */
  --space-6: 1.5rem;                       /* Adjust spacing */
  --h1-size: clamp(2rem, 5vw, 3rem);      /* Scale typography */
}
```

Changes apply to all components automatically!

## ✅ Testing Checklist

Before going live:

- [ ] Replace placeholder images in `assets/images/`
- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768-1023px)
- [ ] Test on desktop (≥ 1024px)
- [ ] Verify all links work
- [ ] Check accessibility with screen reader
- [ ] Test keyboard navigation (Tab key)

## 📖 Documentation

- **Component API:** `WEB_COMPONENTS_GUIDE.md`
- **Before/After Comparison:** `BEFORE_AFTER_COMPARISON.md`
- **Full Project Info:** `README.md`

## 🐛 Troubleshooting

### Component not showing?
✓ Check browser console for errors  
✓ Verify `web-components.js` is loaded  
✓ Ensure CSS files load before JS  

### Styles not applying?
✓ Check `variables.css` and `style.css` are linked  
✓ Verify class names match existing styles  
✓ Components don't use Shadow DOM - global styles apply  

### Mobile menu not working?
✓ Test on actual mobile device or Chrome DevTools  
✓ Check browser console for JavaScript errors  
✓ Verify viewport meta tag is present  

## 🎓 Learn More

### Component Attributes

**bb-card:**
- `image`, `image-alt`, `title`, `description`, `href`, `button-text`, `show-button`, `product`

**bb-accordion:**
- `question`, `answer` (or use `slot="answer"`)

**bb-testimonials:**
- `data-src` (URL to JSON file)

**bb-header:**
- `logo`, `cta-text`, `cta-href`

## 💡 Pro Tips

1. **Use JSON for testimonials:**
   ```html
   <bb-testimonials data-src="assets/data/testimonials.json"></bb-testimonials>
   ```
   Easier to manage and update.

2. **Cards with custom content:**
   ```html
   <bb-card>
     <!-- Custom HTML here -->
   </bb-card>
   ```
   Use slots for complete control.

3. **Group accordions:**
   Wrap in `.faq-list` div for auto-close behavior.

## 🚢 Deploy

The site is static - deploy anywhere:

- **GitHub Pages:** Push to repo, enable Pages
- **Netlify:** Drag & drop the folder
- **Vercel:** Import from Git
- **Traditional hosting:** Upload via FTP

No build step required!

## 📊 Performance

Optimizations already in place:

✓ Minimal JavaScript (~13 KB)  
✓ CSS custom properties (fast)  
✓ No external dependencies  
✓ Hardware-accelerated animations  

To improve further:

- Compress images (TinyPNG, Squoosh)
- Use WebP format where supported
- Add lazy loading: `<img loading="lazy">`
- Enable gzip compression on server

## 🎉 You're Ready!

The site is production-ready. Just add your images and deploy!

---

**Questions?** See the comprehensive guides:
- `WEB_COMPONENTS_GUIDE.md` - Complete component documentation
- `README.md` - Full project overview
- `BEFORE_AFTER_COMPARISON.md` - See what changed

**Happy building!** 🛠️

