# Web Components Guide

This guide explains the custom Web Components used in the Budget Blinds Motorized Window Shades site.

## Overview

The site has been refactored to use reusable Web Components that follow modern web standards. All components maintain styling through CSS variables from `variables.css` and utility classes from `style.css`.

## Available Components

### 1. `<bb-text-section>`

A reusable centered text component for headings and body content.

#### Usage

**Using Attributes:**

```html
<bb-text-section 
  title="Modern Convenience, Timeless Design"
  content="Looking for a simple upgrade that makes a big impact? Here are some of the top benefits of choosing motorized window shades.">
</bb-text-section>
```

**Using Slots:**

```html
<bb-text-section>
  <h2 slot="title">Modern Convenience, Timeless Design</h2>
  <div slot="content">
    <p>Looking for a simple upgrade that makes a big impact?</p>
    <p>Here are some of the top benefits of choosing motorized window shades.</p>
  </div>
</bb-text-section>
```

#### Attributes

- `title` (string) - The heading text
- `content` (string) - The body text

#### Slots

- `slot="title"` - Custom heading content
- `slot="content"` - Custom body content (supports full HTML)

#### Features

- Centered layout with max-width container
- Large serif heading in muted blue-grey
- Readable body text with relaxed line-height
- Responsive spacing
- Uses all CSS variables from `variables.css`

#### Styling

- **Title:** DM Serif Text, #5F8297 color
- **Body:** Nunito Sans, grey color
- **Alignment:** Center
- **Max Width:** 900px container, 800px paragraph

---

### 2. `<bb-header>`

A fully-featured header component with responsive navigation, mobile menu, and CTA button.

#### Usage

```html
<bb-header logo="Budget Blinds" cta-text="Request a Free Consultation" cta-href="#consultation">
  <nav-items>
    <a href="#products">Products</a>
    <a href="#inspiration">Inspiration</a>
    <a href="#smart-home">Smart Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav-items>
</bb-header>
```

#### Attributes

- `logo` (string) - Logo text (default: "Budget Blinds")
- `cta-text` (string) - CTA button text (default: "Request a Free Consultation")
- `cta-href` (string) - CTA button link (default: "#consultation")

#### Child Elements

- `<nav-items>` - Container for navigation links. Each `<a>` tag becomes a nav item.

#### Features

- Responsive design with mobile hamburger menu
- Smooth transitions and animations
- Accessible with proper ARIA attributes
- Auto-closes mobile menu when links are clicked
- Sticky positioning

---

### 3. `<bb-card>`

A flexible card component for displaying content with images, titles, descriptions, and optional buttons.

#### Usage

**Using Attributes:**

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

**Using Slots (Custom Content):**

```html
<bb-card>
  <div class="card__image">
    <img src="assets/images/custom.jpg" alt="Custom content">
  </div>
  <h3>Custom Title</h3>
  <p>Custom content goes here.</p>
  <a href="#" class="btn">Custom Button</a>
</bb-card>
```

#### Attributes

- `image` (string) - Image source URL
- `image-alt` (string) - Alt text for image
- `title` (string) - Card title
- `description` (string) - Card description
- `href` (string) - Link URL (default: "#")
- `button-text` (string) - Button text (default: "View Details")
- `show-button` (boolean) - Show/hide button (default: true, use `show-button="false"` to hide)
- `product` (boolean) - Adds `product-card` class for product-specific styling

#### Features

- Hover effects (translateY and shadow)
- Responsive images
- Optional button display
- Supports custom content via slots
- Uses all CSS utility classes from `style.css`

---

### 4. `<bb-accordion>`

An accessible accordion component for FAQ sections with smooth expand/collapse animations.

#### Usage

**Using Attributes:**

```html
<bb-accordion 
  question="What is the delivery time?"
  answer="<p>Delivery typically takes 3-5 business days.</p>">
</bb-accordion>
```

**Using Slots:**

```html
<bb-accordion question="How much do motorized shades cost?">
  <div slot="answer">
    <p>The cost varies based on size, fabric, and automation features.</p>
    <p>Most homeowners invest between $300-$800 per window.</p>
  </div>
</bb-accordion>
```

#### Attributes

- `question` (string) - The question text
- `answer` (string) - The answer HTML (if not using slots)

#### Slots

- `slot="answer"` - Answer content (supports full HTML)

#### Features

- Only one accordion open at a time (in same container)
- Smooth height transitions
- Icon animation (+ to active state)
- Accessible with proper ARIA attributes
- `aria-expanded` toggles with state
- Focus management

#### Accessibility

- ✅ `role="button"` on accordion button
- ✅ `aria-expanded` attribute
- ✅ Keyboard accessible
- ✅ Focus states

---

### 5. `<bb-testimonials>`

An auto-rotating testimonial slider with manual controls and responsive layout.

#### Usage

**Using Inline Items:**

```html
<bb-testimonials>
  <li stars="5" author="— Sarah M., Portland">
    <span class="text">"Amazing product! Highly recommend."</span>
  </li>
  <li stars="5" author="— John D., Austin">
    <span class="text">"Best investment we've made!"</span>
  </li>
  <li stars="4" author="— Jane S., Seattle">
    <span class="text">"Great quality and service."</span>
  </li>
</bb-testimonials>
```

**Using JSON Data Source:**

```html
<bb-testimonials data-src="assets/data/testimonials.json"></bb-testimonials>
```

JSON format:
```json
[
  {
    "stars": "5",
    "text": "Amazing product! Highly recommend.",
    "author": "— Sarah M., Portland"
  },
  {
    "stars": "5",
    "text": "Best investment we've made!",
    "author": "— John D., Austin"
  }
]
```

#### Attributes

- `data-src` (string) - URL to JSON file with testimonials data

#### Child Elements (Inline Mode)

- `<li>` - Testimonial item
  - `stars` attribute - Number of stars (1-5)
  - `author` attribute - Author name
  - `<span class="text">` - Testimonial text

#### Features

- Auto-rotation every 5 seconds
- Manual prev/next controls
- Pauses on hover
- Pauses on user interaction (resumes after 10 seconds)
- Responsive: Shows 1, 2, or 3 testimonials based on screen size
  - Mobile (< 768px): 1 testimonial
  - Tablet (768-1023px): 2 testimonials
  - Desktop (≥ 1024px): 3 testimonials
- Smooth transform transitions
- Disabled state for controls at boundaries
- Updates on window resize

#### Accessibility

- ✅ `aria-label` on control buttons
- ✅ Star ratings with aria-label
- ✅ Keyboard accessible controls
- ✅ Focus states

---

## Styling

All components use the existing CSS architecture:

### CSS Variables (from `variables.css`)

All components reference CSS custom properties for:
- Colors: `--primary-budget-blinds-blue`, `--secondary-blue-100`, etc.
- Spacing: `--space-1` through `--space-24`
- Typography: `--font-body`, `--h1-size`, etc.
- Transitions: `--dur-fast`, `--ease-standard`, etc.
- Shadows: `--shadow-sm`, `--shadow-md`, etc.

### Utility Classes (from `style.css`)

Components use existing utility classes:
- `.container` - Content width constraint
- `.grid` - Grid layout
- `.card` - Card styling
- `.btn` - Button styling
- `.section` - Section spacing
- And more...

### Customization

To customize component styles, edit `variables.css` and `style.css`. Changes will automatically apply to all components since they don't use Shadow DOM (to maintain compatibility with global styles).

---

## Browser Support

Web Components are supported in all modern browsers:
- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

For older browsers, consider using polyfills:
- [@webcomponents/webcomponentsjs](https://www.npmjs.com/package/@webcomponents/webcomponentsjs)

---

## Accessibility Features

All components follow WCAG 2.1 AA guidelines:

### Semantic HTML
- ✅ Proper use of semantic elements (`<header>`, `<nav>`, `<button>`)
- ✅ Correct heading hierarchy
- ✅ Meaningful link text

### ARIA Support
- ✅ `aria-label` on interactive elements
- ✅ `aria-expanded` on accordion and mobile menu
- ✅ `role` attributes where appropriate

### Keyboard Navigation
- ✅ All interactive elements keyboard accessible
- ✅ Logical tab order
- ✅ Focus states visible

### Screen Reader Support
- ✅ Alt text on images
- ✅ Descriptive labels
- ✅ State changes announced

---

## Performance

### Optimizations
- No Shadow DOM (for better style inheritance)
- Minimal JavaScript
- Event delegation where possible
- Debounced resize handlers
- Hardware-accelerated transforms

### Best Practices
- Use `data-src` for lazy-loading testimonials
- Compress images referenced in cards
- Consider lazy-loading images below the fold

---

## Examples

### FAQ Section with Accordions

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>Frequently Asked Questions</h2>
    </div>
    
    <div class="faq-list">
      <bb-accordion question="Question 1?">
        <div slot="answer">
          <p>Answer to question 1.</p>
        </div>
      </bb-accordion>
      
      <bb-accordion question="Question 2?">
        <div slot="answer">
          <p>Answer to question 2.</p>
        </div>
      </bb-accordion>
    </div>
  </div>
</section>
```

### Product Grid with Cards

```html
<section class="section">
  <div class="container">
    <div class="grid" style="--grid-columns: 1; --grid-columns-md: 2; --grid-columns-lg: 4;">
      <bb-card 
        product
        image="assets/images/product1.jpg" 
        image-alt="Product 1"
        title="Product Name"
        description="Product description."
        href="#product1"
        button-text="View Details">
      </bb-card>
      
      <!-- More cards... -->
    </div>
  </div>
</section>
```

---

## Troubleshooting

### Component not rendering?

1. Make sure `web-components.js` is loaded:
   ```html
   <script src="assets/js/web-components.js"></script>
   ```

2. Check the browser console for errors

3. Ensure custom element names use lowercase with a hyphen

### Styles not applying?

1. Verify `variables.css` and `style.css` are loaded before the component
2. Check that you're using the correct class names
3. Components don't use Shadow DOM, so all global styles should apply

### Accordion not closing others?

Make sure accordions are inside a container with class `faq-list` or share a parent element.

### Testimonial slider not working?

1. Check that testimonials have the correct structure
2. Verify there are at least 2-3 testimonials
3. Check browser console for errors

---

## Migration from Static HTML

To migrate existing static HTML to Web Components:

1. **Headers:** Replace `<header class="header">...</header>` with `<bb-header>`
2. **Cards:** Replace `<div class="card">...</div>` with `<bb-card>`
3. **Accordions:** Replace accordion HTML with `<bb-accordion>`
4. **Testimonials:** Replace testimonial section with `<bb-testimonials>`
5. Update script tag to load `web-components.js`

All styling will continue to work through CSS variables and utility classes.

---

## Future Enhancements

Potential improvements:

- [ ] Add `<bb-hero>` component for hero sections
- [ ] Add `<bb-footer>` component for footer
- [ ] Add `<bb-modal>` for consultation forms
- [ ] Add `<bb-image-gallery>` for product showcases
- [ ] Add more customization options via attributes
- [ ] Add events (e.g., `testimonial-changed`, `accordion-opened`)

---

## Contributing

When creating new components:

1. Follow the existing naming convention (`bb-*`)
2. Use CSS variables from `variables.css`
3. Maintain accessibility (ARIA, keyboard nav, focus)
4. Avoid Shadow DOM to maintain style compatibility
5. Document all attributes and usage
6. Test across browsers

---

## License

© 2025 Budget Blinds. All rights reserved.

