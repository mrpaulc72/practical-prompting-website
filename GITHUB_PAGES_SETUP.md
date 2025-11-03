# 🚀 GitHub Pages Setup Guide

**Goal:** Get your Practical Prompting homepage live on GitHub Pages with a free preview URL.

**Time Required:** 10 minutes

**Result:** A live URL like: `https://YOUR-USERNAME.github.io/practical-prompting-website/`

---

## ✅ What's Already Done

I've prepared your repository:
- ✅ Git repository initialized
- ✅ All files committed
- ✅ Ready to push to GitHub

---

## 📋 Step-by-Step Instructions

### Step 1: Create GitHub Repository (2 minutes)

1. **Go to GitHub:**
   - Open: https://github.com/new

2. **Fill in repository details:**
   ```
   Repository name: practical-prompting-website
   Description: Practical Prompting homepage - "The AI Realist"
   Visibility: ☑️ Public (required for free GitHub Pages)
   
   ⚠️ DO NOT check these boxes:
   ☐ Add a README file
   ☐ Add .gitignore
   ☐ Choose a license
   ```

3. **Click "Create repository"**

---

### Step 2: Push Your Code to GitHub (2 minutes)

GitHub will show you a page with instructions. **Use the second set** (push an existing repository):

```bash
cd /Users/paul/dev/practical-prompting-website

# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/practical-prompting-website.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push your code
git push -u origin main
```

**Example:** If your GitHub username is `paulchambers`, the command would be:
```bash
git remote add origin https://github.com/paulchambers/practical-prompting-website.git
```

---

### Step 3: Enable GitHub Pages (3 minutes)

1. **Go to your repository on GitHub:**
   - URL: `https://github.com/YOUR-USERNAME/practical-prompting-website`

2. **Click "Settings"** (top menu, far right)

3. **Click "Pages"** (left sidebar, under "Code and automation")

4. **Configure GitHub Pages:**
   ```
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
   ```

5. **Click "Save"**

6. **Wait 1-2 minutes** for GitHub to build your site

7. **Your live URL will appear at the top:**
   ```
   ✅ Your site is live at https://YOUR-USERNAME.github.io/practical-prompting-website/
   ```

---

### Step 4: Fix Link Paths (3 minutes)

GitHub Pages serves your site from a subdirectory, so some links need updating.

**Open `index.html` and update these footer links:**

```html
<!-- BEFORE (won't work on GitHub Pages): -->
<a href="/">Home</a>
<a href="/sales/">The Blueprint</a>
<a href="/about/">My Story</a>

<!-- AFTER (works on GitHub Pages): -->
<a href="./">Home</a>
<a href="https://practicalprompting.co/sales/">The Blueprint</a>
<a href="https://practicalprompting.co/about/">My Story</a>
```

**Then commit and push the changes:**

```bash
cd /Users/paul/dev/practical-prompting-website
git add index.html
git commit -m "Fix: Update links for GitHub Pages"
git push
```

Wait 1-2 minutes for GitHub to rebuild, then refresh your live URL!

---

## 🎉 You're Live!

Your site is now live at:
**`https://YOUR-USERNAME.github.io/practical-prompting-website/`**

Share this URL with anyone to get feedback before deploying to your custom domain!

---

## 🔄 Making Updates

Whenever you want to update your live site:

```bash
cd /Users/paul/dev/practical-prompting-website

# Make your changes to files
# Then commit and push:

git add -A
git commit -m "Update: Description of your changes"
git push

# Wait 1-2 minutes for GitHub to rebuild
```

---

## 🌐 Using a Custom Domain (Optional)

Once you're ready to use `practicalprompting.co`:

### Option A: Keep GitHub Pages with Custom Domain

1. **In GitHub Pages settings:**
   - Add custom domain: `practicalprompting.co`
   - Enable "Enforce HTTPS" (free SSL)

2. **At your domain registrar:**
   - Add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

**Full instructions:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

### Option B: Move to Netlify

GitHub Pages is great for preview, but Netlify offers:
- Faster builds
- Better analytics
- Easier custom domain setup
- Form handling
- Continuous deployment

**To move to Netlify:**
1. Go to netlify.com
2. "New site from Git"
3. Connect your GitHub repo
4. Deploy automatically!

---

## 🐛 Troubleshooting

### Issue: "404 - Page Not Found"
**Solution:** 
- Make sure you selected `main` branch and `/` (root) folder
- Wait 2-3 minutes for initial build
- Clear browser cache (Cmd+Shift+R)

### Issue: "Links are broken"
**Solution:**
- Update footer links as shown in Step 4
- Use relative links (`./ `) for same-site pages
- Use absolute URLs for external pages

### Issue: "Images not showing"
**Solution:**
- Make sure images are in the `/images/` folder
- Check image filenames match exactly (case-sensitive)
- Commit and push images: `git add images/ && git commit -m "Add images" && git push`

### Issue: "CSS not loading"
**Solution:**
- Verify `style.css` is in the root directory
- Check browser console (F12) for errors
- Clear browser cache

---

## 📊 GitHub Pages vs. Netlify

| Feature | GitHub Pages | Netlify |
|---------|--------------|---------|
| **Setup Time** | 10 minutes | 5 minutes |
| **Custom Domain** | ✅ Yes (takes 24 hours) | ✅ Yes (instant) |
| **SSL Certificate** | ✅ Free | ✅ Free |
| **Build Speed** | ~2 minutes | ~30 seconds |
| **Analytics** | ❌ No (use Google) | ✅ Built-in |
| **Form Handling** | ❌ No | ✅ Yes |
| **Deployment** | Git push | Git push or drag & drop |
| **Best For** | Preview/testing | Production sites |

**Recommendation:**
- Use **GitHub Pages** now for quick preview
- Move to **Netlify** for production launch

---

## ✅ Quick Command Reference

```bash
# Push updates to GitHub
git add -A
git commit -m "Your update message"
git push

# Check status
git status

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View remote URL
git remote -v
```

---

## 📞 Need Help?

**GitHub Pages Documentation:**
https://docs.github.com/en/pages

**GitHub Pages Status:**
https://www.githubstatus.com/

**Common Issues:**
https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites

---

## 🎯 Success Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages in settings
- [ ] Got live preview URL
- [ ] Updated footer links
- [ ] Tested site on mobile
- [ ] Shared URL with 3 people for feedback
- [ ] Ready to move to production (Netlify/custom domain)

---

**Created:** November 3, 2025  
**Status:** ✅ Ready to Execute  
**Time Required:** 10 minutes  
**Result:** Live preview URL on GitHub Pages

---

**Next:** Once you get feedback and are ready for production, see `Quick_Start.md` for Netlify deployment!

