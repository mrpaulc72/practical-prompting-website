# Quick Start Guide: Practical Prompting Homepage

**Purpose:** Get your homepage live in **under 60 minutes**  
**Audience:** Non-technical users who need immediate deployment  
**Last Updated:** November 3, 2025

---

## ⏱ 60-Minute Launch Checklist

### ☑️ Step 1: Prepare Content (20 minutes)

#### Replace Placeholder Images
You need **6 images total**. See `content_guide.md` for detailed specifications.

**Quick Action:**
1. Open the `/images` folder (create it if it doesn't exist)
2. Add these images with these exact names:

| Image | Filename | Size | Content |
|-------|----------|------|---------|
| Hero | `hero-frustration.jpg` | 1200x800px | Person frustrated with computer |
| Video | `video-thumbnail.jpg` | 1280x720px | Video preview/play button |
| Testimonial 1 | `testimonial-1.jpg` | 150x150px | Client headshot (circular crop) |
| Testimonial 2 | `testimonial-2.jpg` | 150x150px | Client headshot (circular crop) |
| Testimonial 3 | `testimonial-3.jpg` | 150x150px | Client headshot (circular crop) |
| Paul's Photo | `paul-chambers.jpg` | 150x150px | Your headshot (circular crop) |

**Update HTML:**
Open `index.html` and replace these lines:

```html
<!-- Line ~30: Hero Image -->
<img src="images/hero-frustration.jpg" alt="Frustrated with AI Results">

<!-- Line ~90: Video -->
<img src="images/video-thumbnail.jpg" alt="Video: The AI Realist Methodology">

<!-- Line ~110: Testimonial 1 -->
<img src="images/testimonial-1.jpg" alt="Client testimonial">

<!-- Line ~125: Testimonial 2 -->
<img src="images/testimonial-2.jpg" alt="Client testimonial">

<!-- Line ~140: Testimonial 3 -->
<img src="images/testimonial-3.jpg" alt="Client testimonial">

<!-- Line ~265: Paul's Headshot -->
<img src="images/paul-chambers.jpg" alt="Paul Chambers - AI Realist">
```

#### Update Testimonials
Open `index.html` and search for `[Name]`. Replace with real client names:

```html
<!-- Find and replace (3 instances) -->
<p class="testimonial-attribution">— [Name], Business Consultant</p>
<!-- Replace [Name] with actual name, e.g., "Sarah Johnson" -->
```

---

### ☑️ Step 2: Configure Links (5 minutes)

#### Verify CTA Button Links
Open `index.html` and search for `https://practicalprompting.co/sales/`

**Confirm this link appears in 2 places:**
1. Hero Section (line ~25)
2. Final CTA Section (line ~260)

**If your sales page URL is different, update both instances.**

#### Update Footer Links
Open `index.html` and scroll to the footer (around line 275).

**Update these placeholder links:**
```html
<!-- LinkedIn -->
<li><a href="#" target="_blank">LinkedIn</a></li>
<!-- Replace # with your LinkedIn URL -->

<!-- YouTube -->
<li><a href="#" target="_blank">YouTube</a></li>
<!-- Replace # with your YouTube URL -->

<!-- Privacy Policy -->
<li><a href="#">Privacy Policy</a></li>
<!-- Replace # with your privacy policy URL -->

<!-- Terms of Service -->
<li><a href="#">Terms of Service</a></li>
<!-- Replace # with your terms URL -->
```

---

### ☑️ Step 3: Test Locally (5 minutes)

#### Open in Browser
1. Navigate to the project folder in Finder/Explorer
2. Double-click `index.html` to open in your default browser

#### Test These 5 Things:
- [ ] Hero image appears correctly
- [ ] Click "FIX MY PROMPTS" button → goes to sales page
- [ ] Click any FAQ question → it expands/collapses
- [ ] Scroll to bottom → all sections visible
- [ ] Resize browser window → layout adjusts (responsive)

**If everything works:** ✅ Proceed to Step 4  
**If something breaks:** See [Troubleshooting](#troubleshooting) below

---

### ☑️ Step 4: Deploy to Web (25 minutes)

#### Option A: Netlify (Recommended - Easiest)

**Why Netlify?**
- Free tier available
- Automatic SSL (https://)
- Drag-and-drop deployment
- Custom domain support

**Steps:**

1. **Create Account:**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up (free account)

2. **Deploy Site:**
   - Click "Add new site" → "Deploy manually"
   - Drag your entire project folder into the upload area
   - Wait 30-60 seconds for deployment

3. **Get Your URL:**
   - Netlify provides a URL like: `random-name-123.netlify.app`
   - Test the live site

4. **Add Custom Domain (Optional but Recommended):**
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter: `practicalprompting.co`
   - Follow DNS configuration instructions

5. **Configure DNS:**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add CNAME record:
     ```
     Type: CNAME
     Host: @
     Points to: random-name-123.netlify.app
     ```
   - Wait 1-24 hours for DNS propagation

**✅ Done! Your site is live with free SSL.**

---

#### Option B: Vercel (Alternative)

**Steps:**

1. Go to [vercel.com](https://vercel.com/)
2. Sign up (free account)
3. Click "Add New" → "Project"
4. Drag your project folder
5. Click "Deploy"
6. Follow custom domain setup (similar to Netlify)

---

#### Option C: GitHub Pages (Free, More Technical)

**Prerequisites:** GitHub account

**Steps:**

1. **Create Repository:**
   ```bash
   # In terminal, navigate to your project folder
   cd /Users/paul/dev/practical-prompting-website
   
   # Initialize Git
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial homepage launch"
   ```

2. **Push to GitHub:**
   ```bash
   # Create repo on GitHub first (github.com/new)
   # Then connect and push:
   git remote add origin https://github.com/YOUR-USERNAME/practical-prompting.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Click Save

4. **Access Site:**
   - URL: `https://YOUR-USERNAME.github.io/practical-prompting/`

5. **Custom Domain:**
   - Add `CNAME` file to root with your domain
   - Configure DNS at registrar

---

### ☑️ Step 5: Set Up Analytics (5 minutes)

#### Google Analytics (Recommended)

1. **Get Tracking ID:**
   - Go to [analytics.google.com](https://analytics.google.com/)
   - Create account/property
   - Get Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to Website:**
   Open `index.html` and add this **before `</head>`**:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. **Re-deploy:**
   - If using Netlify: Drag updated folder again
   - If using GitHub: Commit and push changes

4. **Verify Tracking:**
   - Visit your live site
   - Check Google Analytics Real-Time report
   - You should see 1 active user (you!)

---

## 🚀 Post-Launch Checklist

Within **24 hours** of launch:

- [ ] Test site on mobile phone (iPhone/Android)
- [ ] Test site on tablet (iPad)
- [ ] Test all CTA buttons click through correctly
- [ ] Verify Google Analytics is tracking visits
- [ ] Check site loads in <3 seconds ([GTmetrix](https://gtmetrix.com/))
- [ ] Share link with 3-5 friends for feedback

Within **1 week** of launch:

- [ ] Announce to email list
- [ ] Post on social media (LinkedIn, Twitter, etc.)
- [ ] Monitor analytics daily
- [ ] Respond to any bug reports
- [ ] Update FAQ if new questions arise

Within **1 month** of launch:

- [ ] Review conversion data (CTR on CTA)
- [ ] Consider A/B testing hero headline
- [ ] Gather testimonials from new customers
- [ ] Optimize underperforming sections

---

## 🐛 Troubleshooting

### Problem: "Images don't appear on live site"

**Solution:**
1. Check image filenames match exactly (case-sensitive)
2. Ensure images are in `/images` folder
3. Verify file paths in HTML:
   ```html
   <!-- Correct -->
   <img src="images/hero-frustration.jpg">
   
   <!-- Incorrect -->
   <img src="/images/hero-frustration.jpg">  <!-- Remove leading / -->
   <img src="hero-frustration.jpg">          <!-- Missing images/ folder -->
   ```

---

### Problem: "FAQ accordion doesn't work"

**Solution:**
1. Ensure `main.js` is in the same folder as `index.html`
2. Check this line exists before `</body>`:
   ```html
   <script src="main.js"></script>
   ```
3. Open browser console (F12) and check for errors

---

### Problem: "Site looks broken on mobile"

**Solution:**
1. Ensure this line exists in `<head>`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
3. Test in incognito/private mode

---

### Problem: "Custom domain not working"

**Solution:**
1. **Wait:** DNS propagation takes 1-24 hours
2. **Check DNS:** Use [whatsmydns.net](https://www.whatsmydns.net/) to verify
3. **Verify Records:**
   - Type: CNAME
   - Host: @ (or blank)
   - Points to: your-netlify-url.netlify.app
4. **SSL Issues:** Netlify auto-provisions SSL; wait 15-30 minutes after DNS

---

### Problem: "Google Analytics shows no data"

**Solution:**
1. **Wait 24 hours:** Data can take time to process
2. **Check Real-Time:** Visit site while viewing Real-Time report
3. **Verify Code:** Ensure Measurement ID is correct (G-XXXXXXXXXX)
4. **Disable Ad Blockers:** Test without browser extensions

---

## 📞 Need More Help?

### Quick Reference Documents

- **Full Documentation:** `README.md`
- **Content Details:** `content_guide.md`
- **Stakeholder Overview:** `Executive_Summary.md`

### Testing Tools

- **Page Speed:** [GTmetrix](https://gtmetrix.com/)
- **Mobile Friendly:** [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- **HTML Validator:** [W3C Validator](https://validator.w3.org/)
- **Broken Links:** [Dead Link Checker](https://www.deadlinkchecker.com/)

### Additional Resources

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com/)
- **Google Analytics Help:** [support.google.com/analytics](https://support.google.com/analytics)
- **DNS Propagation Check:** [whatsmydns.net](https://www.whatsmydns.net/)

---

## ✅ Success!

**Congratulations!** Your Practical Prompting homepage is now live.

### Your Next Steps:

1. **Monitor Analytics** (daily for first week)
2. **Gather Feedback** (friends, customers, beta users)
3. **Iterate** (A/B test, optimize, improve)
4. **Scale** (drive traffic, increase conversions)

### Share Your Success

Tweet your launch with: `#PracticalPrompting #AIRealist`

---

**Document Version:** 1.0  
**Last Updated:** November 3, 2025  
**Estimated Time to Complete:** 60 minutes

