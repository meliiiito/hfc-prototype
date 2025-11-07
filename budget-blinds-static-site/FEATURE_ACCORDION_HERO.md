# Feature Accordion Hero Section

A smooth, responsive hero section with an interactive accordion that changes background images with elegant transitions.

## 🎯 Overview

The Feature Accordion Hero is a full-width, viewport-height section (max 800px) that combines:
- **5 accordion items** with numbered features
- **Dynamic background images** that crossfade with blur and scale effects
- **Smooth animations** using CSS custom properties from `variables.css`
- **Full accessibility** with ARIA attributes and keyboard navigation
- **Motion sensitivity** with `prefers-reduced-motion` support

## 📐 Design Specifications

### Layout
- **Width:** 100% viewport width (breaks out of container)
- **Height:** 90vh (max 800px on desktop)
- **Mobile:** Auto height, min 600px
- **Accordion:** Max-width 500px, positioned left side

### Features

1. **01 Effortless Control** - Motorization and convenience
2. **02 Personalized Settings** - Scheduling and automation
3. **03 Safety Considerations** - Cordless and child-safe
4. **04 Smart Home Security** - Away mode and security
5. **05 Energy Efficiency** - Temperature regulation

## 🎨 Styling

All styling uses tokens from `variables.css`:

- **Colors:** `--utility-grey-800`, `--primary-budget-blinds-blue`
- **Spacing:** `--space-4`, `--space-5`, `--space-12`
- **Typography:** `--body-md`, `--body-lg`, `--h4-size`
- **Transitions:** `--dur-slow`, `--dur-base`, `--ease-standard`
- **Shadows:** `--shadow-lg`
- **Borders:** `--radius-lg`

## ⚙️ Features

### Interactive Accordion
- Click to expand/collapse panels
- Only one panel open at a time
- Re-click to close active panel
- Smooth height animation
- Icon rotates 45° when open (plus → X)

### Background Transitions
When an accordion item is clicked:
1. Previous background fades out
2. New background fades in
3. Active background scales to 105%
4. Active background gets 2px blur
5. Transitions take 350ms (--dur-slow)

### Image Preloading
All 5 background images are preloaded on page load for instant transitions.

## ♿ Accessibility

### ARIA Attributes
- `aria-expanded` on accordion buttons (true/false)
- `aria-hidden="true"` on decorative icons
- Proper heading hierarchy

### Keyboard Navigation
- Full keyboard support (Tab, Enter, Space)
- Focus visible with blue outline
- Logical tab order

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  /* Removes scale and blur effects */
  /* Reduces animation duration */
  /* Simplifies transitions */
}
```

## 📱 Responsive Behavior

### Desktop (≥ 768px)
- Accordion on left side
- Background covers full viewport
- 90vh height (max 800px)
- Large text and icons

### Mobile (< 768px)
- Accordion full width
- Auto height (min 600px)
- Smaller text and icons
- Reduced padding
- Background still visible

## 🖼️ Required Images

Place these images in `assets/images/`:

| File | Feature | Dimensions |
|------|---------|------------|
| `feature-1.jpg` | Effortless Control | 1920×800px |
| `feature-2.jpg` | Personalized Settings | 1920×800px |
| `feature-3.jpg` | Safety Considerations | 1920×800px |
| `feature-4.jpg` | Smart Home Security | 1920×800px |
| `feature-5.jpg` | Energy Efficiency | 1920×800px |

## 💻 Code Structure

### HTML
```html
<section class="feature-hero">
  <div class="feature-hero__backgrounds">
    <!-- 5 background divs with data-image attributes -->
  </div>
  <div class="container feature-hero__container">
    <div class="feature-hero__accordion">
      <!-- 5 accordion items with data-feature attributes -->
    </div>
  </div>
</section>
```

### CSS
- `.feature-hero` - Main container
- `.feature-hero__bg` - Background images with transitions
- `.feature-accordion-item` - Individual accordion panels
- `.feature-accordion-item__header` - Clickable button
- `.feature-accordion-item__content` - Expandable content

### JavaScript
- `FeatureAccordionHero` class handles all interactions
- Preloads images on init
- Manages accordion state
- Switches background images
- Handles open/close animations

## 🎬 Animation Details

### Accordion Expansion
```
Duration: 350ms (--dur-slow)
Easing: cubic-bezier(0.4, 0, 0.2, 1) (--ease-standard)
Properties: max-height, padding
```

### Background Transition
```
Duration: 350ms (--dur-slow)
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Properties: opacity, transform, filter
Scale: 1 → 1.05
Blur: 0px → 2px
```

### Icon Rotation
```
Duration: 250ms (--dur-base)
Rotation: 0° → 45° (plus becomes X)
Border color change to brand blue
```

## 🔧 Customization

### Change Animation Speed
Update in `variables.css`:
```css
--dur-slow: 350ms; /* Slower/faster transitions */
--dur-base: 250ms; /* Icon rotation speed */
```

### Change Blur Amount
Update in `style.css`:
```css
.feature-hero__bg.active {
  filter: blur(3px); /* More/less blur */
}
```

### Change Scale Effect
Update in `style.css`:
```css
.feature-hero__bg.active {
  transform: scale(1.08); /* More/less zoom */
}
```

### Add New Features
1. Add new accordion item in HTML with next number
2. Add new background div with matching `data-image`
3. Add corresponding image file
4. JavaScript automatically handles it!

## 🐛 Troubleshooting

### Images not loading?
- Check image paths in HTML
- Verify images exist in `assets/images/`
- Check browser console for 404 errors

### Transitions not smooth?
- Verify `variables.css` is loaded first
- Check browser supports CSS custom properties
- Test without `prefers-reduced-motion` enabled

### Accordion not working?
- Check `web-components.js` is loaded
- Verify no JavaScript errors in console
- Ensure `data-feature` attributes match `data-image`

### Background not full width?
- Section uses `calc(50% - 50vw)` margins to break container
- Works with nested containers
- Check no parent has `overflow: hidden`

## 🚀 Performance

### Optimizations Implemented
- ✅ Image preloading prevents flash on first click
- ✅ CSS transforms use GPU acceleration
- ✅ Backdrop-filter for glass effect on accordion
- ✅ Transition only necessary properties
- ✅ Respects system motion preferences

### Recommendations
- Optimize images (compress, use WebP)
- Lazy load images below the fold
- Consider using `loading="lazy"` for non-critical images
- Monitor Lighthouse performance score

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE11: Not supported (uses CSS Grid, custom properties)

---

**Built with:** HTML5 • CSS3 • Vanilla JavaScript • CSS Custom Properties  
**Status:** ✅ Production Ready  
**Last Updated:** 2025-11-07

