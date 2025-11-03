# Practical Prompting Homepage

**Version:** 1.0  
**Launch Date:** November 2025  
**Brand Positioning:** "The AI Realist"  
**Target Audience:** Solo Creator Sam (Service Providers earning $100k-$250k)

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Brand Specifications](#brand-specifications)
3. [File Structure](#file-structure)
4. [Technical Stack](#technical-stack)
5. [Design System](#design-system)
6. [Page Sections](#page-sections)
7. [Installation & Setup](#installation--setup)
8. [Customization Guide](#customization-guide)
9. [Performance Optimization](#performance-optimization)
10. [Browser Support](#browser-support)
11. [Deployment](#deployment)
12. [Maintenance](#maintenance)
13. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

### Purpose
This homepage acts as a focused "magnifying glass" for the Practical Prompting brand. Its **sole purpose** is to:
- Validate the core frustration of the target audience (inconsistent AI results)
- Funnel visitors to the primary product sales page at `/sales`
- Repair the "strategic fracture" of an unfocused previous homepage

### Primary Goal
Drive clicks to the **"FIX MY PROMPTS"** CTA button linking to `https://practicalprompting.co/sales/`

### Success Metrics
**Qualitative:**
- Visitors feel their AI frustration is immediately understood
- Brand feels trustworthy, expert, and "anti-hype"
- Clear path to sales page

**Quantitative:**
- High CTR on CTA buttons
- Low bounce rate
- Strong engagement (time on page, scroll depth)

---

## 🎨 Brand Specifications

### Color Palette

| Color Name | Hex Code | Usage | Percentage |
|------------|----------|-------|------------|
| **Charcoal Gray** (Primary Dark) | `#333333` | Dark sections, headlines, body text | ~45% |
| **Deep Navy** (Primary Dark Alt) | `#001F3F` | Alternate dark backgrounds (footer) | ~20% |
| **Orange** (Accent) | `#F95700` | CTA buttons, links, highlights | 5-10% |
| **Tan** (Background Light) | `#ECE9DE` | Primary warm neutral background | ~25% |
| **Pure White** (Background Light Alt) | `#FFFFFF` | Alternate light sections | ~10% |

### Typography

**Headlines (H1, H2, H3):** Poppins
- Source: Google Fonts
- Weights: 
  - H1: Bold (700)
  - H2/H3: Semibold (600)
- Usage: All section headlines

**Body Text:** DM Sans
- Source: Google Fonts
- Weight: Regular (400)
- Usage: All paragraphs, lists, FAQs

### Font Loading
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=DM+Sans:wght@400&display=swap" rel="stylesheet">
```

### Brand Voice: "The AI Realist"
- **Tone:** Honest, grounded, quietly confident, anti-hype
- **Style:** Conversational but precise, like an expert "fellow traveler"
- **Humor:** Dry, observational (not "ha-ha" jokes)
- **Philosophy:** "Proof, not hype"

### Writing Guidelines
1. **Problem First:** Always lead with user frustration before solution
2. **No Hype:** Avoid "unlock," "supercharge," "revolutionary"
3. **Use Instead:** "systematic," "reliable," "proven," "methodology"
4. **Smart & Clear:** Professional language without jargon
5. **Varied Pacing:** Mix short punchy sentences with longer conversational ones

---

## 📁 File Structure

```
practical-prompting-website/
│
├── index.html                  # Main homepage file
├── style.css                   # Complete stylesheet
├── main.js                     # JavaScript (FAQ accordion, smooth scroll)
│
├── images/                     # Image assets folder
│   ├── hero-frustration.jpg    # Hero section image (1200x800)
│   ├── video-thumbnail.jpg     # Video placeholder (1280x720)
│   ├── testimonial-1.jpg       # Client headshot (150x150)
│   ├── testimonial-2.jpg       # Client headshot (150x150)
│   ├── testimonial-3.jpg       # Client headshot (150x150)
│   └── paul-chambers.jpg       # Author headshot (150x150)
│
├── README.md                   # Comprehensive documentation (this file)
├── Executive_Summary.md        # Stakeholder overview
├── Quick_Start.md              # Immediate next steps guide
└── content_guide.md            # Content placeholder details
```

---

## 🛠 Technical Stack

### Core Technologies
- **HTML5:** Semantic markup, accessibility-focused
- **CSS3:** Modern layout (Grid, Flexbox), responsive design
- **JavaScript (ES6+):** Minimal, progressive enhancement
- **Google Fonts:** Poppins, DM Sans

### No Dependencies
- ✅ No frameworks (React, Vue, etc.)
- ✅ No CSS preprocessors required
- ✅ No build tools needed
- ✅ Pure, vanilla implementation

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

## 🎨 Design System

### Spacing Scale
```css
/* Base spacing unit: 1rem = 16px */
--space-xs: 0.5rem;    /* 8px */
--space-sm: 1rem;      /* 16px */
--space-md: 2rem;      /* 32px */
--space-lg: 3rem;      /* 48px */
--space-xl: 5rem;      /* 80px */
```

### Responsive Breakpoints
```css
/* Mobile First Approach */
Mobile:  up to 767px
Tablet:  768px - 1024px
Desktop: 1025px - 1439px
Large:   1440px+
```

### Container Widths
```css
.container {
    max-width: 1200px;  /* Standard */
    max-width: 1400px;  /* Large desktops (1440px+) */
}
```

### Button Styles
```css
.cta-button {
    background: #F95700;
    color: #FFFFFF;
    padding: 1.25rem 3rem;
    font-size: 1.25rem;
    border-radius: 6px;
    text-transform: uppercase;
}
```

---

## 📄 Page Sections

### Section 1: Hero
- **Background:** Tan (#ECE9DE)
- **Layout:** 2-column grid (text left, image right)
- **Key Elements:**
  - Eyebrow copy (Orange, uppercase)
  - H1 headline (3.5rem)
  - Subheadline
  - Primary CTA button
  - Social proof with stars
- **Image:** Placeholder 1200x800 (frustration/crumpled paper concept)

### Section 2: Three Quick Outcomes
- **Background:** White (#FFFFFF)
- **Layout:** 3-column grid
- **Key Elements:**
  - Orange checkmark icons (SVG)
  - 3 benefit cards
  - Center-aligned content

### Section 3: Problem Identification
- **Background:** Charcoal Gray (#333333)
- **Text Color:** White (#FFFFFF)
- **Layout:** Single column, max-width 900px
- **Key Elements:**
  - Bold headline
  - 5 paragraphs addressing pain points
  - Highlighted closing statement

### Section 4: Solution Presentation
- **Background:** Tan (#ECE9DE)
- **Layout:** Single column, max-width 900px
- **Key Elements:**
  - Introduction to Paul Chambers
  - CLO Framework explanation
  - Video placeholder (16:9 aspect ratio)

### Section 5: Social Proof (Testimonials)
- **Background:** White (#FFFFFF)
- **Layout:** 3-column grid
- **Key Elements:**
  - 3 testimonial cards
  - Circular client photos (100px)
  - 5-star ratings
  - Quoted testimonials

### Section 6: Three-Step Process
- **Background:** Tan (#ECE9DE)
- **Layout:** 3-column grid
- **Key Elements:**
  - Large stylized numbers (1, 2, 3)
  - Step headlines and descriptions
  - Center-aligned

### Section 7: The "Flex" (Advantages)
- **Background:** White (#FFFFFF)
- **Layout:** 3x2 grid (6 items)
- **Key Elements:**
  - Custom SVG icons (Orange)
  - 6 advantage points
  - Sub-headline

### Section 8: (Merged into Section 7)
- **Note:** Deliberately combined per strategy

### Section 9: FAQ
- **Background:** Tan (#ECE9DE)
- **Layout:** Single column accordion, max-width 900px
- **Key Elements:**
  - 5 collapsible FAQ items
  - Click-to-reveal functionality
  - Orange toggle indicators (+)

### Section 10: Final CTA
- **Background:** Charcoal Gray (#333333)
- **Text Color:** White (#FFFFFF)
- **Layout:** Flexbox (text left, image right)
- **Key Elements:**
  - Headline and subheadline
  - Identical CTA button to hero
  - Circular headshot of Paul (150px)

### Footer
- **Background:** Charcoal Gray (#333333)
- **Layout:** 3-column grid
- **Key Elements:**
  - Navigation links
  - Social media links
  - Legal links
  - Copyright notice

---

## 🚀 Installation & Setup

### Option 1: Local Development (Immediate)

1. **Download/Clone Files:**
   ```bash
   cd /Users/paul/dev/practical-prompting-website
   ```

2. **Open in Browser:**
   - Simply double-click `index.html`
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with npx)
     npx serve
     ```

3. **View in Browser:**
   - Navigate to `http://localhost:8000`

### Option 2: Production Deployment

See the [Deployment](#deployment) section below.

---

## 🎛 Customization Guide

### Updating Colors

**In `style.css`, find and replace:**
```css
/* Primary Dark */
#333333 → Your new color

/* Accent Orange */
#F95700 → Your new color

/* Background Tan */
#ECE9DE → Your new color
```

### Updating Fonts

**Replace Google Fonts link in `index.html`:**
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

**Update CSS:**
```css
h1, h2, h3 {
    font-family: 'YourHeadlineFont', sans-serif;
}

body {
    font-family: 'YourBodyFont', sans-serif;
}
```

### Replacing Placeholder Images

1. Add your images to the `/images` folder
2. Update `src` attributes in `index.html`:
   ```html
   <!-- Example: Hero Image -->
   <img src="images/hero-frustration.jpg" alt="Description">
   ```

### Updating CTA Links

**Find all instances of the CTA button:**
```html
<a href="https://practicalprompting.co/sales/" class="cta-button">FIX MY PROMPTS</a>
```

**Replace with your URL:**
```html
<a href="YOUR_SALES_PAGE_URL" class="cta-button">FIX MY PROMPTS</a>
```

### Adding/Removing FAQ Items

**In `index.html`, duplicate this structure:**
```html
<div class="faq-item">
    <button class="faq-question">
        <span>Your question here?</span>
        <span class="faq-toggle">+</span>
    </button>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

No JavaScript changes needed—the accordion works automatically.

---

## ⚡ Performance Optimization

### Current Optimizations

1. **Minimal JavaScript:**
   - Only ~100 lines for FAQ accordion
   - No heavy frameworks

2. **Optimized CSS:**
   - Single stylesheet
   - No unused styles
   - Efficient selectors

3. **Google Fonts:**
   - Preconnect for faster loading
   - Display=swap prevents invisible text

4. **Image Placeholders:**
   - Replace with optimized WebP/JPEG
   - Recommended: 70-80% quality

### Recommended Enhancements

1. **Image Optimization:**
   ```bash
   # Use ImageOptim, TinyPNG, or:
   npm install -g sharp-cli
   sharp -i input.jpg -o output.jpg --quality 80
   ```

2. **Lazy Loading:**
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

3. **Minification (Production):**
   - Minify CSS: [cssnano](https://cssnano.co/)
   - Minify JS: [Terser](https://terser.org/)
   - Minify HTML: [HTMLMinifier](https://kangax.github.io/html-minifier/)

4. **CDN Delivery:**
   - Use Cloudflare, CloudFront, or similar
   - Enable gzip/brotli compression

---

## 🌐 Browser Support

### Tested & Supported

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 120+    | ✅ Full Support |
| Firefox | 120+    | ✅ Full Support |
| Safari  | 17+     | ✅ Full Support |
| Edge    | 120+    | ✅ Full Support |

### Features Used
- CSS Grid (full support since 2017)
- CSS Flexbox (full support since 2015)
- IntersectionObserver (polyfill available if needed)
- ES6 JavaScript (transpile with Babel if IE11 support required)

### Fallbacks
All features degrade gracefully. No JavaScript = static page still works.

---

## 🚢 Deployment

### Static Hosting Options

#### 1. **Netlify (Recommended)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Features:**
- Free SSL
- Automatic CDN
- Form handling
- Continuous deployment from Git

#### 2. **Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### 3. **GitHub Pages**
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable in Settings > Pages
```

#### 4. **AWS S3 + CloudFront**
```bash
# Upload to S3
aws s3 sync . s3://your-bucket-name --exclude ".git/*"

# Configure CloudFront distribution
```

### DNS Configuration

**Add CNAME record:**
```
Host: practicalprompting.co
Points to: your-deployment-url.netlify.app
```

### SSL Certificate
All recommended platforms provide free SSL via Let's Encrypt.

---

## 🔧 Maintenance

### Regular Updates

**Monthly:**
- Review analytics (CTR, bounce rate, conversions)
- Update testimonials if new ones available
- Check for broken links

**Quarterly:**
- Update social proof numbers ("Join 200+ providers...")
- Refresh FAQ based on customer questions
- Review and optimize images

**Annually:**
- Update copyright year in footer
- Review brand colors/fonts for consistency
- Conduct full accessibility audit

### Analytics Integration

**Add to `<head>` before `</head>`:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### A/B Testing Opportunities

1. **Hero Headline Variations:**
   - Test different pain point phrasings
   - Test question vs. statement format

2. **CTA Button Text:**
   - "FIX MY PROMPTS" vs. "GET THE BLUEPRINT"
   - "START NOW" vs. "LEARN MORE"

3. **Social Proof Placement:**
   - Test moving testimonials higher
   - Test adding more specific results

---

## 🐛 Troubleshooting

### Common Issues

#### Issue: FAQ Accordion Not Working
**Solution:**
1. Ensure `main.js` is loaded after HTML content
2. Check browser console for JavaScript errors
3. Verify `<script src="main.js"></script>` is before `</body>`

#### Issue: Google Fonts Not Loading
**Solution:**
1. Check internet connection
2. Verify `<link>` tag in `<head>`
3. Test with font-display: swap

#### Issue: Images Not Displaying
**Solution:**
1. Verify file paths are correct
2. Check image file names match HTML references
3. Ensure images are in `/images` folder

#### Issue: Mobile Layout Broken
**Solution:**
1. Verify viewport meta tag exists:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. Test responsive CSS breakpoints
3. Check for overflow issues

#### Issue: CTA Button Links Broken
**Solution:**
1. Verify URL: `https://practicalprompting.co/sales/`
2. Ensure no extra spaces or typos
3. Check if sales page exists

### Testing Checklist

- [ ] Test on mobile device (iPhone, Android)
- [ ] Test on tablet (iPad, Android tablet)
- [ ] Test on desktop (Mac, Windows)
- [ ] Test all CTA buttons work
- [ ] Test FAQ accordion opens/closes
- [ ] Test footer links work
- [ ] Test page load speed (<3 seconds)
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Validate CSS (https://jigsaw.w3.org/css-validator/)
- [ ] Check accessibility (https://wave.webaim.org/)

---

## 📞 Support & Contact

### Need Help?

**For technical issues with the website code:**
- Review this README thoroughly
- Check [Quick_Start.md](Quick_Start.md) for immediate steps
- Consult [content_guide.md](content_guide.md) for content updates

**For content/branding questions:**
- Review [Executive_Summary.md](Executive_Summary.md)
- Refer to Brand Specifications section above

**For deployment assistance:**
- See Deployment section above
- Check hosting platform documentation

---

## 📝 Change Log

### Version 1.0 (November 2025)
- Initial homepage launch
- 10 sections (Hero, Outcomes, Problem, Solution, Testimonials, Process, Advantages, FAQ, Final CTA, Footer)
- Fully responsive design
- FAQ accordion functionality
- Optimized for performance
- Complete documentation package

---

## 📄 License

© 2025 Practical Prompting. All Rights Reserved.

This website and all associated content are proprietary to Practical Prompting. Unauthorized copying, modification, distribution, or use of this material is strictly prohibited.

---

## 🎉 Credits

**Design & Development:** Custom build for Practical Prompting  
**Typography:** Google Fonts (Poppins, DM Sans)  
**Icons:** Custom SVG illustrations  
**Placeholder Images:** via.placeholder.com (replace with final assets)

---

**Last Updated:** November 3, 2025  
**Documentation Version:** 1.0
