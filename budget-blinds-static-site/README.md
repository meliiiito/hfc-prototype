# Motorized Window Shades - Budget Blinds Static Site

A fully responsive static website for Budget Blinds' Motorized Window Shades product line, built with HTML, CSS, and vanilla JavaScript.

## Features

- **Fully Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Web Components Architecture**: Reusable custom elements for modular development
- **Accessible**: Semantic HTML5, ARIA labels, keyboard navigation support
- **Interactive Components**:
  - `<bb-header>` - Responsive header with mobile menu
  - `<bb-card>` - Flexible card component
  - `<bb-accordion>` - Accessible FAQ accordion
  - `<bb-testimonials>` - Auto-rotating slider with controls
- **Design System**: Complete CSS custom properties for consistent theming

## File Structure

```
budget-blinds-static-site/
├── index.html                  # Main HTML page (uses Web Components)
├── assets/
│   ├── css/
│   │   ├── variables.css       # CSS custom properties (design tokens)
│   │   └── style.css           # Component and layout styles
│   ├── js/
│   │   ├── web-components.js   # Custom Web Components
│   │   └── main.js             # Original interactive functionality (legacy)
│   └── images/                 # Image assets (see below)
├── README.md
├── WEB_COMPONENTS_GUIDE.md     # Web Components documentation
└── VERIFICATION_CHECKLIST.md   # Build verification
```

## Image Placeholders

The following images need to be added to the `assets/images/` directory:

### Hero & Features
- `hero.jpg` (1200x800px) - Hero section: Modern living room with motorized shades
- `feature-banner.jpg` (1920x600px) - Full-width banner background

### Smart Home Section
- `smart-home-1.jpg` (800x600px) - Voice control demonstration
- `smart-home-2.jpg` (800x600px) - Mobile app interface
- `smart-home-3.jpg` (800x600px) - Automated shades with morning light

### What Sets Us Apart
- `apart-1.jpg` (600x400px) - Expert consultation with samples
- `apart-2.jpg` (600x400px) - Professional installation
- `apart-3.jpg` (600x400px) - Warranty documentation

### Product Cards
- `product-roller-shades.jpg` (400x300px) - Roller shades
- `product-cellular-shades.jpg` (400x300px) - Cellular/honeycomb shades
- `product-wood-blinds.jpg` (400x300px) - Wood blinds
- `product-shutters.jpg` (400x300px) - Plantation shutters

## Web Components

This site uses custom Web Components for reusable, modular UI elements. See `WEB_COMPONENTS_GUIDE.md` for detailed documentation.

### Available Components

- **`<bb-header>`** - Responsive header with navigation and mobile menu
- **`<bb-text-section>`** - Centered text section with title and content
- **`<bb-card>`** - Flexible card component with image, title, description, and optional button
- **`<bb-accordion>`** - Accessible accordion for FAQ sections
- **`<bb-testimonials>`** - Auto-rotating testimonial slider with manual controls

### Quick Example

```html
<bb-card 
  image="assets/images/product.jpg" 
  image-alt="Product description"
  title="Product Name"
  description="Product description text."
  href="#details"
  button-text="View Details">
</bb-card>
```

All components work seamlessly with the existing CSS variables and utility classes.

## CSS Custom Properties

All colors, spacing, typography, and other design tokens are defined in `variables.css`:

### Color Palette
- **Primary**: Budget Blinds Blue (#003B73), White (#FFFFFF)
- **Secondary**: Light Blue backgrounds, Navy, Charcoal
- **Utility**: Grey scale for text and borders

### Typography
- **Display Font**: Georgia (serif) - Used for headings
- **Body Font**: Helvetica Neue (sans-serif) - Used for body text
- **Responsive Sizes**: Using clamp() for fluid typography

### Spacing Scale
- Uses a consistent spacing scale from `--space-1` (0.25rem) to `--space-24` (6rem)
- Sections use `--space-12` to `--space-16` for vertical rhythm

## JavaScript Functionality

All interactive functionality is now encapsulated in Web Components (`web-components.js`):

### `<bb-header>` Component
- Hamburger icon animates to X when open
- Menu slides down with smooth transition
- Auto-closes when navigation link is clicked
- Accessible with proper ARIA attributes

### `<bb-accordion>` Component
- Only one panel open at a time (per container)
- Smooth height transitions
- Plus icon rotates when active
- `aria-expanded` attribute toggles with state
- Full keyboard navigation support

### `<bb-testimonials>` Component
- Auto-rotates every 5 seconds
- Manual controls with prev/next buttons
- Pauses on hover or manual interaction
- Responsive: Shows 1, 2, or 3 testimonials based on screen size
- Smooth transform transitions
- Supports inline data or JSON data source

### `<bb-card>` Component
- Hover effects (elevation and shadow)
- Flexible content via attributes or slots
- Optional button display
- Product card variant

### Global Features
- Smooth scroll for anchor links (accounts for sticky header)
- Newsletter form submission handler (client-side validation)

## Browser Support

- Modern browsers with Web Components support:
  - Chrome 54+
  - Firefox 63+
  - Safari 10.1+
  - Edge 79+
- CSS Grid and Flexbox for layouts
- CSS Custom Properties (CSS Variables)
- ES6 JavaScript features (classes, async/await, etc.)

For older browsers, consider using the [@webcomponents/webcomponentsjs](https://www.npmjs.com/package/@webcomponents/webcomponentsjs) polyfill.

## Accessibility Features

- Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ARIA labels for interactive elements
- Alt text for all images
- Keyboard navigation support
- Focus states on interactive elements
- Proper heading hierarchy (h1-h5)
- Form labels and required field indicators

## Responsive Breakpoints

- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1023px (two column grids)
- **Desktop**: ≥ 1024px (three column grids, full navigation)

## Color Contrast

All text and background combinations meet WCAG AA standards:
- Body text: Grey 600 on White
- Headings: Grey 800 on White
- Buttons: White text on Blue (4.5:1 ratio)

## Performance Considerations

- No external dependencies or frameworks
- Minimal JavaScript (< 5KB)
- Optimized CSS with no unused rules
- Images should be optimized (WebP recommended)

## Getting Started

1. Clone or download this repository
2. Add your images to `assets/images/` (see list above)
3. Open `index.html` in a web browser
4. No build process required!

## Customization

### Updating Colors
Edit `assets/css/variables.css` to change the color palette. All components use these CSS custom properties.

### Modifying Spacing
Adjust spacing scale in `variables.css` - changes will cascade throughout the design.

### Adding Sections
Follow the existing pattern:
```html
<section class="section">
  <div class="container">
    <!-- Your content -->
  </div>
</section>
```

## License

© 2025 Budget Blinds. All rights reserved.

