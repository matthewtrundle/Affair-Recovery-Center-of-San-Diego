# Image Audit Report
## Affair Recovery Center of San Diego Website

**Date**: October 30, 2025
**Total Images**: 42 files
**Total Size**: ~13.5MB

---

## 1. Logo Assets

### ✅ Current:
- **File**: `logo/affair-recovery-center-logo.png`
- **Size**: 22K
- **Status**: ✅ **Good** - Optimized PNG with transparency
- **Usage**: Header, footer
- **Notes**: Already optimized in previous work

---

## 2. Therapist Photos

### ⚠️ Requires Attention:

#### WebP (Optimized) - ✅ KEEP
- `therapist/Jordan1.webp` - 60K ✅
- `therapist/Jordan2.webp` - 114K ✅

#### JPEG (Unoptimized) - 🔄 REPLACE
- `therapist/jordan-portrait-1.jpg` - 184K ⚠️
- `therapist/jordan-portrait-2.jpg` - 209K ⚠️

**Recommendations**:
1. Delete the .jpg versions if .webp versions exist
2. If .jpg versions are different shots, convert to WebP
3. Ensure images show Jordan Zipkin professionally but warmly
4. Consider adding 1-2 more diverse angles (office setting, consultation room)

---

## 3. Beach/San Diego Location Images

### Large Files - Optimization Needed:

| File | Size | Priority | Notes |
|------|------|----------|-------|
| `beach/torrey-pines-sunset.jpg` | 433K | 🔴 High | Compress to ~200K |
| `beach/la-jolla-tide-pools.jpg` | 416K | 🔴 High | Compress to ~200K |
| `beach/sunset-cliffs-silhouette.jpg` | 304K | 🟡 Medium | Compress to ~150K |
| `beach/windansea-couple-walk.jpg` | 288K | 🟡 Medium | Compress to ~150K |

### Section Beach Images (WebP):

| File | Size | Status | Notes |
|------|------|--------|-------|
| `sections/beach-torrey-pines.webp` | 714K | 🔴 **TOO LARGE** | Resize/compress to ~300K |
| `sections/beach-la-jolla-cove.webp` | 584K | 🔴 High | Compress to ~250K |
| `sections/beach-sunset-cliffs.webp` | 468K | 🟡 Medium | Compress to ~200K |
| `sections/beach-coronado.webp` | 472K | 🟡 Medium | Compress to ~200K |
| `sections/beach-tide-pools.webp` | 420K | 🟡 Medium | Compress to ~180K |
| `sections/beach-windansea.webp` | 360K | 🟢 Good | OK as-is |
| `sections/beach-sage-plants.webp` | 332K | 🟢 Good | OK as-is |
| `sections/beach-del-mar.webp` | 262K | ✅ Excellent | Perfect size |
| `sections/beach-zen-stones.webp` | 250K | ✅ Excellent | Perfect size |
| `sections/beach-driftwood-heart.webp` | 205K | ✅ Excellent | Perfect size |

**Brand Alignment**: ✅ These images align well with the San Diego beach aesthetic

---

## 4. Hero Images

### Current Hero Images:

| File | Size | Status | Usage |
|------|------|--------|-------|
| `hero/hero-office-luxury.webp` | 473K | 🔴 High | Compress to ~250K |
| `hero/hero-services.webp` | 444K | 🔴 High | Compress to ~250K |
| `hero/hero-home.webp` | 202K | ✅ Good | OK as-is |

**Recommendations**:
- Compress large heroes to ~200-250K
- Consider lazy loading for below-the-fold heroes
- Ensure images convey warmth and professionalism

---

## 5. Couples/Relationship Images

### 🚩 PRIORITY REVIEW NEEDED:

| File | Size | Concern |
|------|------|---------|
| `couples/beach-conversation.jpg` | 419K | 🚨 **Stock Image?** |
| `couples/neural-healing-abstract.jpg` | 291K | 🚨 **Generic Abstract?** |
| `sections/hero-couple-portrait.webp` | 136K | ⚠️ **Review Authenticity** |
| `sections/couple-hero-healing.webp` | 146K | ⚠️ **Review Authenticity** |
| `sections/feature-couple-beach.webp` | 121K | ⚠️ **Review Authenticity** |

**Critical Requirements**:
1. **Diversity**: Must show diverse couples (ethnicity, age 30-45, body types)
2. **Authenticity**: Avoid obvious stock photography poses
3. **Emotion**: Capture genuine connection, hope, vulnerability
4. **Context**: San Diego settings preferred (local beaches, Carmel Valley)
5. **Consent**: Ensure proper model releases if using client photos

**Recommended Replacements**:
- Real client photos (with consent & anonymity if needed)
- Professional photoshoots with local models
- Remove neural/abstract images - too impersonal for therapy site
- Focus on: holding hands, gentle conversation, moments of hope

---

## 6. Metaphor/Abstract Images

### Current Metaphor Images:

| File | Size | Assessment |
|------|------|------------|
| `metaphor/metaphor-connection.webp` | 690K | 🔴 **TOO LARGE** - Compress |
| `metaphor/metaphor-journey.webp` | 440K | 🟡 Medium - Compress to ~200K |
| `metaphor/metaphor-calm-waters.webp` | 148K | ✅ Good size |

**Brand Assessment**: 🟡 **Neutral**
- Abstract metaphors are OK for section backgrounds
- Don't overuse - real human connection is more powerful
- "Calm waters" aligns with beach theme ✅
- "Journey" and "Connection" feel generic

---

## 7. Section Feature Images

### Feature Images:

| File | Size | Status | Notes |
|------|------|--------|-------|
| `sections/feature-zen-garden.webp` | 321K | 🟡 Medium | Compress to ~150K |
| `sections/section-marble-texture.webp` | 311K | 🟡 Medium | Compress to ~150K |
| `sections/section-sacred-geometry.webp` | 220K | ✅ Good | OK as-is |
| `sections/feature-transformation.webp` | 249K | ✅ Good | OK as-is |

**Assessment**: These decorative images are nice but ensure they don't distract from main content

---

## 8. Parallax/Background Images

### Parallax Images:

| File | Size | Status |
|------|------|--------|
| `parallax/hero-parallax-ocean.webp` | 731K | 🔴 **TOO LARGE** |
| `parallax/hero-abstract-journey.webp` | 307K | 🟡 Medium |
| `parallax/parallax-bokeh-overlay.png` | 141K | ✅ Good |
| `parallax/parallax-mountains.png` | 102K | ✅ Good |
| `parallax/parallax-shapes.png` | 66K | ✅ Good |

### Background Pattern:
- `background/pattern-circles.webp` - 136K ✅ Good

**Recommendations**: Compress large parallax images to ~200-300K

---

## Summary & Priority Actions

### 🔴 HIGH PRIORITY (Do First):

1. **Compress Large Files** (5 files >500K):
   - `parallax/hero-parallax-ocean.webp` (731K → 300K)
   - `sections/beach-torrey-pines.webp` (714K → 300K)
   - `metaphor/metaphor-connection.webp` (690K → 300K)
   - `sections/beach-la-jolla-cove.webp` (584K → 250K)
   - `hero/hero-office-luxury.webp` (473K → 250K)

2. **Review Stock/Generic Images** (Replace with authentic photos):
   - `couples/beach-conversation.jpg` 🚨
   - `couples/neural-healing-abstract.jpg` 🚨
   - All `sections/couple-*.webp` images

3. **Delete Duplicate/Unused Files**:
   - Remove `.jpg` therapist photos if `.webp` versions exist
   - Remove `.DS_Store` files

### 🟡 MEDIUM PRIORITY:

4. **Compress Medium Files** (8 files 400-500K):
   - Beach images (multiple files)
   - Hero images
   - Metaphor images

5. **Convert Remaining JPEGs to WebP**:
   - All `/beach/*.jpg` files
   - All `/couples/*.jpg` files

### 🟢 LOW PRIORITY (Nice to Have):

6. **Add Missing Images**:
   - Office interior photos (waiting room, therapy room)
   - More diverse couple representations
   - San Diego landmarks (balboa park, gaslamp, etc.)

7. **Optimize Further**:
   - Implement responsive image srcsets
   - Add blur-up placeholders
   - Consider next/image automatic optimization

---

## Image Guidelines for Replacements

### For Couple Photos:

**DO**:
- ✅ Diverse ethnicities (Black, Asian, Latino, White, Mixed)
- ✅ Age range 30-45 primarily (with some 25-50)
- ✅ Various body types
- ✅ Authentic moments: gentle hand-holding, sitting together, walking
- ✅ Subtle emotions: hope, vulnerability, determination
- ✅ San Diego settings: beaches, parks, Carmel Valley
- ✅ Casual but put-together attire
- ✅ Natural lighting, soft focus

**DON'T**:
- ❌ Obvious stock photo poses
- ❌ Only young, attractive, thin, white couples
- ❌ Over-staged happiness or drama
- ❌ Studio lighting/backgrounds
- ❌ Corporate attire
- ❌ Generic cityscape backgrounds

### Technical Specs:

- **Format**: WebP (primary), JPG (fallback)
- **Max file size**: 250K for hero, 150K for section images
- **Dimensions**: 1920px wide for hero, 1200px for sections
- **Compression**: 80-85% quality
- **Alt text**: Descriptive, specific, keyword-rich

---

## Estimated Impact

### Current Total: 13.5MB
### After Optimization: ~7-8MB (40-45% reduction)

**Benefits**:
- ⚡ Faster page load times (2-3 seconds improvement)
- 📱 Better mobile experience
- 💰 Reduced bandwidth costs
- 🎯 Improved SEO scores
- ♿ Better accessibility

---

## Next Steps

1. **Week 1**: Compress all 🔴 HIGH PRIORITY images
2. **Week 2**: Replace stock/generic couple photos
3. **Week 3**: Optimize remaining medium-priority images
4. **Week 4**: Add new authentic imagery

**Tools Recommended**:
- [Squoosh.app](https://squoosh.app/) - Free image optimization
- [TinyPNG](https://tinypng.com/) - Batch compression
- [Remove.bg](https://www.remove.bg/) - Background removal if needed
- Local tool: `~/Documents/image-generator-tool` for new generations

---

*Report prepared by: AI Assistant*
*For: Jordan Zipkin, LMFT - Affair Recovery Center of San Diego*
