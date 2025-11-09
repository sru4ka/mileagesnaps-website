# MileageSnaps Website - Image Guide

This guide shows you what images you need and where to add them to complete your website.

## 📸 Images You Need

### 1. **Hero Section - Main App Screenshot**
**Location:** Hero section (top of page, right side)
**What to show:** iPhone displaying the MileageSnaps app with:
- Trip list showing multiple drives
- Map view of routes
- Mileage calculations visible
**Recommended size:** 600x1200px (iPhone screenshot)
**File name:** `app-hero.png`

---

### 2. **Feature Showcase - Drive Detection**
**Location:** "MileageSnaps automatically detects your drives" section
**What to show:** iPhone notification showing automatic drive detection
- Example: "Trip detected - Tap to start tracking"
**Recommended size:** 400x800px
**File name:** `feature-detection.png`

---

### 3. **Feature Showcase - Photo Taking**
**Location:** "Snap photos for ironclad verification" section
**What to show:** iPhone camera interface taking a photo of an odometer
- Show the camera viewfinder with an odometer in view
- Include the capture button visible
**Recommended size:** 400x800px
**File name:** `feature-photo.png`

---

### 4. **Feature Showcase - Trip Classification**
**Location:** "Classify as business or personal" section
**What to show:** iPhone showing the swipe interface
- Trip details visible
- Swipe indicators (left/right arrows)
- "Business" and "Personal" options visible
**Recommended size:** 400x800px
**File name:** `feature-classify.png`

---

### 5-8. **How It Works Icons** (Optional - can use emojis)
**Location:** Four steps in "How It Works" section
**What to show:** Simple icons or illustrations:
1. Car icon (driving)
2. Camera icon (taking photo)
3. Swipe gesture icon
4. Checkmark or report icon
**Recommended size:** 150x150px each
**File names:** `icon-drive.png`, `icon-photo.png`, `icon-swipe.png`, `icon-done.png`

---

## 🎨 How to Add Your Images

### Method 1: Replace Placeholders in HTML

1. Save your images in the same folder as `index.html`
2. Open `index.html` in a text editor
3. Find the placeholder sections (they look like this):
   ```html
   <div class="image-placeholder">
       <div class="placeholder-content">
           <p>📱</p>
           <p class="placeholder-text">IMAGE NEEDED: ...</p>
       </div>
   </div>
   ```

4. Replace the entire `<div class="image-placeholder">...</div>` with:
   ```html
   <img src="your-image-name.png" alt="Description of image">
   ```

### Example Replacement:

**BEFORE:**
```html
<div class="hero-image">
    <div class="image-placeholder">
        <div class="placeholder-content">
            <p>📱</p>
            <p class="placeholder-text">IMAGE NEEDED: iPhone showing the MileageSnaps app</p>
        </div>
    </div>
</div>
```

**AFTER:**
```html
<div class="hero-image">
    <img src="app-hero.png" alt="MileageSnaps app interface on iPhone">
</div>
```

---

## 🎯 Quick Tips

### Taking App Screenshots:
1. On your iPhone, open the app
2. Press **Side Button + Volume Up** to take a screenshot
3. Transfer to your computer via AirDrop or iCloud

### If You Don't Have Images Yet:
- The placeholders will show with dashed borders
- The site still looks professional and functional
- You can add images later without breaking anything

### Image Optimization:
- Use PNG format for screenshots (better quality)
- Use JPG format for photos (smaller file size)
- Keep file sizes under 500KB for fast loading
- Use tools like TinyPNG.com to compress images

---

## 📁 File Structure

Your final folder should look like this:
```
mileagesnaps-website/
├── index.html
├── styles.css
├── script.js
├── CNAME
├── app-hero.png
├── feature-detection.png
├── feature-photo.png
├── feature-classify.png
├── icon-drive.png (optional)
├── icon-photo.png (optional)
├── icon-swipe.png (optional)
└── icon-done.png (optional)
```

---

## 🚀 Need Help Creating Images?

### Option 1: Use Figma or Canva
- Create mockups of your app screens
- Add text and graphics to make them look professional

### Option 2: Hire on Fiverr
- Search for "app mockup" or "app screenshot design"
- Prices typically $5-$20

### Option 3: Use Placeholder Services (Temporary)
- https://placehold.co - generates placeholder images
- Example: `https://placehold.co/600x1200/667eea/white?text=App+Screenshot`

---

## ✅ Launch Checklist

Before going live, make sure:
- [ ] All placeholder text is replaced with images
- [ ] Images load correctly on mobile and desktop
- [ ] File sizes are optimized
- [ ] App Store link is updated (currently points to placeholder)
- [ ] All text accurately describes your app

---

**Questions?** The website works great even with placeholders - add images as you create them!
