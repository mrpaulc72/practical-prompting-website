# Content Guide: Practical Prompting Homepage

**Purpose:** Detailed specifications for all placeholder content that needs to be replaced before launch  
**Audience:** Content creators, designers, photographers  
**Status:** 🚧 Action Required Before Launch

---

## 📸 Image Requirements

### Overview
The homepage currently uses placeholder images from `via.placeholder.com`. You must replace these with **real, high-quality images** before launch.

---

### Image 1: Hero Section - Frustration Concept

**Location:** Section 1 (Hero)  
**Current Placeholder:**
```html
<img src="https://via.placeholder.com/1200x800/ECE9DE/333333?text=Frustrated+with+AI+Results">
```

**Specifications:**
- **Dimensions:** 1200px × 800px (or 1920×1280 for retina)
- **Aspect Ratio:** 3:2 (landscape)
- **File Format:** JPEG or WebP
- **File Size:** <300KB (optimized)
- **Color Palette:** Should complement Tan (#ECE9DE) and Charcoal (#333333)

**Content Concept:**
Represent the frustration of AI inconsistency. Good options:
1. **Crumpled Paper Concept:** A laptop with crumpled-up papers next to it (classic "frustration" visual)
2. **Person at Computer:** Someone looking frustrated/confused while using AI
3. **Abstract Representation:** Tangled lines, messy workspace, "chaos vs. order" theme

**Mood:** Relatable frustration, not despair. Should feel like "I've been there" not "this is hopeless."

**Licensing:** Ensure you have rights to use. Recommended sources:
- [Unsplash](https://unsplash.com/) (free, commercial use)
- [Pexels](https://www.pexels.com/) (free, commercial use)
- Custom photography (best option)

**Filename:** `hero-frustration.jpg`  
**Path:** `/images/hero-frustration.jpg`

---

### Image 2: Video Thumbnail

**Location:** Section 4 (Solution Presentation)  
**Current Placeholder:**
```html
<img src="https://via.placeholder.com/1280x720/333333/FFFFFF?text=▶+Watch+The+AI+Realist+Video">
```

**Specifications:**
- **Dimensions:** 1280px × 720px (16:9 aspect ratio)
- **File Format:** JPEG or WebP
- **File Size:** <200KB
- **Must Include:** Large "play" button overlay (white triangle or circle)

**Content Options:**

**Option A: Custom Video Thumbnail**
- Screenshot from your actual video (best option)
- Add overlay: Semi-transparent black gradient + white play button
- Tools: Canva, Photoshop, or video editor

**Option B: Placeholder Until Video Ready**
- Professional headshot of Paul Chambers
- Text overlay: "The AI Realist: Why Your Prompts Fail"
- Large play button icon

**Option C: Abstract Concept**
- Professional workspace with laptop
- "Systematic Methodology" theme
- Clear play button

**Design Notes:**
- Background should be dark (Charcoal #333333) or image with dark overlay
- Play button should be highly visible (white or orange #F95700)
- Optional text: "Watch the 2-Minute Explanation"

**Filename:** `video-thumbnail.jpg`  
**Path:** `/images/video-thumbnail.jpg`

**Future:** When real video is ready, replace this `<img>` with actual video embed:
```html
<!-- Replace image with video embed -->
<iframe width="1280" height="720" 
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
    frameborder="0" allowfullscreen>
</iframe>
```

---

### Images 3-5: Client Testimonial Photos

**Location:** Section 5 (Testimonials)  
**Current Placeholders:**
```html
<img src="https://via.placeholder.com/150/ECE9DE/333333?text=Client+1">
<img src="https://via.placeholder.com/150/ECE9DE/333333?text=Client+2">
<img src="https://via.placeholder.com/150/ECE9DE/333333?text=Client+3">
```

**Specifications (for each):**
- **Dimensions:** 150px × 150px (minimum 300×300 for retina)
- **Aspect Ratio:** 1:1 (square/circular)
- **File Format:** JPEG or WebP
- **File Size:** <50KB each
- **Crop:** Center-crop to circular (CSS handles this automatically)

**Content Requirements:**
- Professional headshots of real clients
- Well-lit, high-quality photos
- Neutral background preferred (blurred or solid color)
- Client facing camera, friendly/confident expression

**Privacy & Permissions:**
- ⚠️ **CRITICAL:** Get written permission from each client to use their photo and testimonial
- Save permission emails/forms for legal compliance

**Filenames:**
- `testimonial-1.jpg` (Business Consultant)
- `testimonial-2.jpg` (Executive Coach)
- `testimonial-3.jpg` (Agency Owner)

**Path:** `/images/`

**If Client Photos Unavailable:**
Use professional stock photos or:
- Abstract avatars (initials on colored backgrounds)
- Anonymous testimonials with "Service Provider, USA" attribution
- Illustration/icon-based avatars

---

### Image 6: Paul Chambers Headshot

**Location:** Section 10 (Final CTA)  
**Current Placeholder:**
```html
<img src="https://via.placeholder.com/150/ECE9DE/333333?text=Paul+Chambers">
```

**Specifications:**
- **Dimensions:** 150px × 150px (minimum 300×300 for retina)
- **Aspect Ratio:** 1:1 (square/circular)
- **File Format:** JPEG or WebP
- **File Size:** <50KB
- **Crop:** Center-crop to circular (CSS handles this automatically)

**Content Requirements:**
- Professional headshot of Paul Chambers
- High-quality, well-lit photo
- Neutral or professional background
- Expression: Confident, grounded, approachable (not "salesy")
- Should embody "The AI Realist" brand

**Mood:**
- Expert but relatable
- Trustworthy, not flashy
- "Fellow traveler" vibe

**Photography Tips:**
- Natural lighting or soft studio lighting
- Eye-level camera angle
- Neutral or subtly professional background
- Business casual attire (matches "AI Realist" tone)

**Filename:** `paul-chambers.jpg`  
**Path:** `/images/paul-chambers.jpg`

---

## 📊 Image Optimization Checklist

Before adding images to the site:

### Step 1: Resize
- [ ] Resize to exact dimensions (or 2x for retina)
- [ ] Tools: Photoshop, Canva, or [Squoosh.app](https://squoosh.app/)

### Step 2: Optimize
- [ ] Reduce file size without losing quality
- [ ] Target: <300KB for large images, <50KB for small
- [ ] Tools: [TinyPNG](https://tinypng.com/), [ImageOptim](https://imageoptim.com/)

### Step 3: Convert Format (Optional)
- [ ] Convert to WebP for better compression
- [ ] Provide JPEG fallback for older browsers
- [ ] Tools: [Squoosh.app](https://squoosh.app/), [Cloudinary](https://cloudinary.com/)

### Step 4: Rename Files
- [ ] Use descriptive, lowercase filenames
- [ ] Use hyphens, not spaces or underscores
- [ ] Examples: `hero-frustration.jpg`, `paul-chambers.jpg`

### Step 5: Upload
- [ ] Place all images in `/images` folder
- [ ] Keep folder organized (don't nest subfolders for this project)

---

## 📝 Text Content That Needs Updating

### Testimonials: Replace [Name] Placeholders

**Location:** Section 5 (Testimonials)

**Current HTML (3 instances):**
```html
<p class="testimonial-attribution">— [Name], Business Consultant</p>
<p class="testimonial-attribution">— [Name], Executive Coach</p>
<p class="testimonial-attribution">— [Name], Agency Owner</p>
```

**Action Required:**
Replace `[Name]` with real client names:
- Option 1: Full name (e.g., "Sarah Johnson")
- Option 2: First name + last initial (e.g., "Sarah J.")
- Option 3: Role only (if client prefers anonymity): "Business Consultant, USA"

**Privacy Compliance:**
- Get written permission to use names and quotes
- Offer anonymity option if client requests

---

### Social Proof Number

**Location:** Section 1 (Hero, below CTA)

**Current Text:**
```html
Join 200+ service providers who've stopped guessing and started systematizing.
```

**Action Required:**
- Update `200+` to reflect actual number of customers/students
- Update regularly (monthly recommended)
- Round to nearest 10 for credibility (e.g., 230 → "230+", not "232+")

**Guidelines:**
- Never exaggerate or lie about numbers
- If starting with zero customers, consider:
  - "Join the growing community of service providers..."
  - "Used by service providers who've stopped guessing..."
  - Omit number until you reach 50+

---

## 🔗 Links That Need Updating

### Primary CTA Links (2 instances)

**Current Link:**
```html
<a href="https://practicalprompting.co/sales/" class="cta-button">FIX MY PROMPTS</a>
```

**Locations:**
1. Section 1 (Hero)
2. Section 10 (Final CTA)

**Action Required:**
- Verify `https://practicalprompting.co/sales/` is correct
- If your sales page URL is different, update both instances
- Ensure HTTPS (not HTTP)
- Test link after deployment

---

### Footer Links (6 links)

**Current Placeholders:**

```html
<!-- Navigation -->
<li><a href="/">Home</a></li>                    <!-- ✅ Already correct -->
<li><a href="/sales/">The Blueprint</a></li>     <!-- Verify this URL -->
<li><a href="/about/">My Story</a></li>          <!-- Verify this URL -->

<!-- Social Media -->
<li><a href="#" target="_blank">LinkedIn</a></li>   <!-- UPDATE -->
<li><a href="#" target="_blank">YouTube</a></li>    <!-- UPDATE -->

<!-- Legal -->
<li><a href="#">Privacy Policy</a></li>          <!-- UPDATE -->
<li><a href="#">Terms of Service</a></li>        <!-- UPDATE -->
```

**Action Required:**

1. **Verify Sales Page URL:**
   - Ensure `/sales/` exists
   - Or update to correct path (e.g., `/blueprint/`, `/course/`)

2. **Verify About Page URL:**
   - Ensure `/about/` exists
   - Or update to correct path (e.g., `/story/`, `/about-paul/`)

3. **Add Social Media Links:**
   ```html
   <li><a href="https://www.linkedin.com/in/YOUR-PROFILE" target="_blank">LinkedIn</a></li>
   <li><a href="https://www.youtube.com/@YOUR-CHANNEL" target="_blank">YouTube</a></li>
   ```

4. **Add Legal Page Links:**
   ```html
   <li><a href="/privacy/">Privacy Policy</a></li>
   <li><a href="/terms/">Terms of Service</a></li>
   ```
   
   **Note:** If legal pages don't exist yet, either:
   - Create them (recommended before launch)
   - Remove links temporarily
   - Link to placeholder: `<a href="#">Privacy Policy (Coming Soon)</a>`

---

## 🎬 Video Embed (Future Update)

**Location:** Section 4 (Solution Presentation)

**Current State:** Static image placeholder

**When Video Is Ready:**

1. **Remove placeholder image:**
   ```html
   <!-- DELETE THIS: -->
   <div class="video-container">
       <img src="https://via.placeholder.com/1280x720/...">
   </div>
   ```

2. **Replace with video embed:**

   **Option A: YouTube**
   ```html
   <div class="video-container">
       <iframe 
           width="1280" 
           height="720" 
           src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
           title="The AI Realist: Why Your Prompts Fail"
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen>
       </iframe>
   </div>
   ```

   **Option B: Vimeo**
   ```html
   <div class="video-container">
       <iframe 
           src="https://player.vimeo.com/video/YOUR_VIDEO_ID" 
           width="1280" 
           height="720" 
           frameborder="0" 
           allow="autoplay; fullscreen; picture-in-picture" 
           allowfullscreen>
       </iframe>
   </div>
   ```

3. **CSS is already set up** — no changes needed. The `.video-container` class handles responsive sizing.

**Video Content Recommendations:**
- **Length:** 2-3 minutes (as mentioned in copy)
- **Topic:** "Why Your Prompts Fail" + intro to CLO Framework
- **Tone:** "AI Realist" — honest, grounded, anti-hype
- **Format:** Talking head + screen share/examples
- **Call to Action:** End with directing to sales page

---

## 📋 Pre-Launch Content Checklist

### Images (Required)
- [ ] Hero image: `images/hero-frustration.jpg` (1200×800px)
- [ ] Video thumbnail: `images/video-thumbnail.jpg` (1280×720px)
- [ ] Testimonial 1: `images/testimonial-1.jpg` (150×150px)
- [ ] Testimonial 2: `images/testimonial-2.jpg` (150×150px)
- [ ] Testimonial 3: `images/testimonial-3.jpg` (150×150px)
- [ ] Paul's headshot: `images/paul-chambers.jpg` (150×150px)

### Text Content (Required)
- [ ] Update 3 testimonial names (replace `[Name]`)
- [ ] Verify/update social proof number ("Join 200+ providers...")
- [ ] Review all copy for accuracy and tone

### Links (Required)
- [ ] Verify primary CTA link (2 instances): `/sales/`
- [ ] Update LinkedIn URL in footer
- [ ] Update YouTube URL in footer
- [ ] Add Privacy Policy link
- [ ] Add Terms of Service link
- [ ] Verify all internal navigation links work

### Permissions (Legal)
- [ ] Get written permission from 3 testimonial clients
- [ ] Verify testimonial quotes are accurate
- [ ] Confirm permission to use client photos
- [ ] Save all permission emails/forms

### Testing (Before Launch)
- [ ] All images appear correctly
- [ ] All links work (no 404 errors)
- [ ] Mobile: Images load and scale properly
- [ ] Mobile: Text is readable
- [ ] Desktop: Layout looks professional

---

## 🎨 Optional Enhancements (Post-Launch)

### Icons (Currently SVG)
The homepage uses inline SVG icons (checkmarks, custom shapes). You can:
- Keep as-is (recommended)
- Replace with icon font (Font Awesome, etc.)
- Use custom-designed icons that match brand

### Favicon
Add a favicon (small icon in browser tab):

1. Create 32×32px PNG or ICO file
2. Name it `favicon.ico`
3. Place in root folder
4. Add to `<head>`:
   ```html
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   ```

### Open Graph Images (Social Sharing)
When someone shares your site on social media, you can control the preview image:

1. Create 1200×630px image (Facebook/LinkedIn format)
2. Add to `<head>`:
   ```html
   <meta property="og:image" content="https://practicalprompting.co/images/og-image.jpg">
   <meta property="og:title" content="Practical Prompting | Stop Guessing. Start Systematizing AI.">
   <meta property="og:description" content="Learn the 3-layer framework that stops inconsistent AI results.">
   ```

---

## 📞 Questions?

If you need clarification on any content specifications:

- **Technical questions:** See `README.md`
- **Quick deployment:** See `Quick_Start.md`
- **Business context:** See `Executive_Summary.md`

---

**Document Version:** 1.0  
**Last Updated:** November 3, 2025  
**Status:** 🚧 Action Required Before Launch

