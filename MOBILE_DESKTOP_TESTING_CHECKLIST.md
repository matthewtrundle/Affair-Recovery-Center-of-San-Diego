# Mobile & Desktop Responsive Testing Checklist
**ARC San Diego Website - Viewport Compatibility QA**
**Date:** October 18, 2025
**Status:** ⏳ PENDING USER TESTING

---

## Testing Viewports

### Desktop Breakpoints
- ✅ **2560px** - Large monitors (27"+ displays)
- ✅ **1920px** - Standard desktop (most common)
- ✅ **1440px** - Laptop displays
- ✅ **1280px** - Smaller laptops

### Tablet Breakpoints
- ✅ **1024px** - iPad Pro landscape / lg breakpoint
- ✅ **768px** - iPad portrait / md breakpoint
- ✅ **640px** - Small tablets / sm breakpoint

### Mobile Breakpoints
- ✅ **414px** - iPhone Pro Max
- ✅ **390px** - iPhone 14/15
- ✅ **375px** - iPhone SE / Older iPhones
- ✅ **360px** - Android phones (most common)
- ✅ **320px** - Minimum supported (iPhone 5)

---

## Test Devices (Physical or Emulated)

### Mobile Devices
- [ ] iPhone 14 Pro (390 × 844)
- [ ] iPhone SE (375 × 667)
- [ ] Samsung Galaxy S21 (360 × 800)
- [ ] Pixel 7 (412 × 915)

### Tablets
- [ ] iPad Pro 12.9" (1024 × 1366)
- [ ] iPad Air (820 × 1180)
- [ ] iPad Mini (768 × 1024)
- [ ] Samsung Galaxy Tab (800 × 1280)

### Desktop
- [ ] MacBook Pro 16" (1728 × 1117)
- [ ] MacBook Air 13" (1440 × 900)
- [ ] Standard Desktop (1920 × 1080)
- [ ] Large Monitor (2560 × 1440)

---

## Pages to Test (All 9 Primary)

1. **Homepage** (`/`) ⭐ Priority 1
2. **Schedule** (`/schedule`) ⭐ Priority 1
3. **Contact** (`/contact`) ⭐ Priority 1
4. **Services** (`/services`)
5. **About** (`/about`)
6. **FAQ** (`/faq`)
7. **Approach** (`/approach`)
8. **For the Hurt Partner** (`/for-the-hurt-partner`)
9. **For the Partner Who Strayed** (`/for-the-partner-who-strayed`)
10. **Testimonials** (`/testimonials`)

---

## Responsive Layout Tests

### 1. Homepage (/)

#### PremiumHero Section
**Desktop (≥1024px)**
- [ ] Video box displays on right side
- [ ] Text content on left (50% width)
- [ ] Gradient background fills viewport
- [ ] CTA buttons side-by-side
- [ ] Trust indicators below CTAs

**Tablet (768-1023px)**
- [ ] Layout switches to single column
- [ ] Video box maintains aspect ratio
- [ ] Text remains readable (not cramped)
- [ ] CTAs stack vertically or shrink

**Mobile (≤767px)**
- [ ] Video box hidden or reduced size
- [ ] Text stack vertically
- [ ] CTA buttons full-width
- [ ] Font sizes reduce (text-3xl → text-xl)
- [ ] Padding reduces (py-32 → py-20)

#### ProblemPromise Section
**Desktop**
- [ ] Two-column layout (grid lg:grid-cols-2)
- [ ] Text left, glass card right
- [ ] Background images visible

**Tablet**
- [ ] Columns stack (grid-cols-1)
- [ ] Glass card maintains width

**Mobile**
- [ ] Single column layout
- [ ] Glass card full-width
- [ ] Font sizes reduce appropriately

#### ProcessSteps Section
**All viewports**
- [ ] Steps remain readable
- [ ] Icons scale appropriately
- [ ] Spacing adjusts (gap-16 → gap-8)

---

### 2. Services Page (/services)

#### FourPillarsSection
**Desktop (≥1024px)**
- [ ] 2×2 grid layout
- [ ] Cards equal height
- [ ] Gradient borders visible
- [ ] Hover effects work

**Tablet (768-1023px)**
- [ ] 2-column grid maintained or switch to 1-column
- [ ] Card padding adjusts
- [ ] Text remains readable

**Mobile (≤767px)**
- [ ] Single column layout (grid-cols-1)
- [ ] Cards stack vertically
- [ ] Full-width cards
- [ ] Touch targets ≥44px
- [ ] Pillar numbers visible

#### MainServicesSection
**All viewports**
- [ ] Heading sizes responsive
- [ ] Bullet points don't overflow
- [ ] San Diego references wrap properly

---

### 3. About Page (/about)

#### Hero Section
**Desktop**
- [ ] Centered content (max-w-4xl)
- [ ] Large heading (text-6xl)
- [ ] Gradient background full-width

**Mobile**
- [ ] Heading reduces to text-4xl
- [ ] Padding reduces (py-32 → py-20)
- [ ] Max-width container works

#### Four Sections (Approach, Background, Why Choose, Message)
**Desktop**
- [ ] CheckCircle icons visible
- [ ] Bullet points aligned
- [ ] Section backgrounds alternate

**Mobile**
- [ ] Icons scale down but remain visible
- [ ] Text doesn't overflow
- [ ] Line height adjusts for readability

#### Professional Credentials Grid
**Desktop**
- [ ] 2-column grid (md:grid-cols-2)
- [ ] Cards equal height
- [ ] Icons and text balanced

**Mobile**
- [ ] Single column (grid-cols-1)
- [ ] Cards stack
- [ ] Spacing appropriate

---

### 4. FAQ Page (/faq)

#### FAQ Sections (5 categories)
**Desktop**
- [ ] Max-width container (max-w-4xl)
- [ ] Section dividers clear
- [ ] Headings hierarchy visible

**Mobile**
- [ ] Single column layout
- [ ] Collapsible sections (if interactive)
- [ ] Questions/answers readable
- [ ] Border separators clear

#### Long-Form Answers
**All viewports**
- [ ] Text wraps properly
- [ ] No horizontal scroll
- [ ] Links clickable (≥44px touch target on mobile)
- [ ] Line height comfortable (leading-relaxed)

---

### 5. Contact Page (/contact)

#### Contact Methods Cards
**Desktop**
- [ ] Three cards in column layout
- [ ] Primary card (Schedule) stands out
- [ ] Icons aligned with text
- [ ] CTAs visible

**Mobile**
- [ ] Cards stack vertically
- [ ] Full-width buttons
- [ ] Touch targets ≥44px
- [ ] Emojis/icons don't break layout

#### Office Information Grid
**Desktop**
- [ ] 3-column grid (lg:grid-cols-3)
- [ ] Map Pin, Clock, Globe sections
- [ ] Equal height cards

**Tablet**
- [ ] May reduce to 2-column

**Mobile**
- [ ] Single column (grid-cols-1)
- [ ] All info accessible
- [ ] Google Maps link clickable

---

### 6. Schedule Page (/schedule)

#### Calendly Embed
**Desktop**
- [ ] Iframe renders at full size
- [ ] Min-height sufficient (600-800px)
- [ ] No horizontal scroll

**Tablet**
- [ ] Iframe width adjusts
- [ ] Calendar grid remains usable

**Mobile**
- [ ] Calendly mobile view loads
- [ ] Date picker accessible
- [ ] Time slots tappable
- [ ] Form inputs visible
- [ ] Zoom not required

**Critical:** Test actual booking flow on mobile!

#### "What to Expect" Section
**All viewports**
- [ ] Bullet points readable
- [ ] Icons aligned
- [ ] Background card scales

---

### 7. Navigation (PremiumHeader)

#### Desktop
- [ ] Logo left, nav center/right
- [ ] All links visible
- [ ] Hover states work
- [ ] Schedule button prominent

#### Tablet
- [ ] Nav may collapse or shrink
- [ ] Hamburger menu if needed

#### Mobile
- [ ] Hamburger menu icon visible
- [ ] Menu slides in/overlays
- [ ] All links accessible in menu
- [ ] Close button visible
- [ ] Touch targets ≥44px

---

### 8. Footer

#### Desktop
- [ ] 4-column layout (lg:grid-cols-4)
- [ ] About, Quick Links, Contact sections
- [ ] Legal links visible
- [ ] Social icons (if any)

#### Tablet
- [ ] 2-column layout (md:grid-cols-2)

#### Mobile
- [ ] Single column (grid-cols-1)
- [ ] All links tappable
- [ ] Copyright text readable
- [ ] Email/phone links work

---

## Touch Target Testing (Mobile Critical)

### Minimum Sizes
- [ ] Buttons: ≥44px × ≥44px
- [ ] Links: ≥44px × ≥44px
- [ ] Form inputs: ≥44px height
- [ ] Navigation items: ≥44px height
- [ ] Icon buttons: ≥48px × ≥48px

### Spacing
- [ ] Buttons have 8px+ gap between
- [ ] Links have comfortable line-height
- [ ] CTAs don't crowd each other

---

## Typography Scaling

### Desktop
- [ ] H1: text-6xl (60px)
- [ ] H2: text-4xl (36px)
- [ ] Body: text-lg (18px)
- [ ] Small text: text-sm (14px)

### Tablet
- [ ] H1: text-5xl (48px)
- [ ] H2: text-3xl (30px)
- [ ] Body: text-base (16px)

### Mobile
- [ ] H1: text-4xl (36px)
- [ ] H2: text-2xl (24px)
- [ ] Body: text-base (16px)
- [ ] Line height increases for readability

---

## Images & Media

### Responsive Images
- [ ] Next/Image with sizes prop
- [ ] srcset includes multiple resolutions
- [ ] Lazy loading enabled
- [ ] Alt text present
- [ ] Aspect ratio maintains (no layout shift)

### Background Images
- [ ] Scale appropriately on mobile
- [ ] Don't obscure text
- [ ] Load efficiently (consider art direction)

### Videos (PremiumHero)
**Desktop**
- [ ] Video plays automatically (muted)
- [ ] Controls hidden
- [ ] Quality appropriate (not pixelated)

**Mobile**
- [ ] Video poster image displays
- [ ] Consider disabling video on mobile (performance)
- [ ] Or reduce video quality

---

## Scrolling & Overflow

### Horizontal Scroll
- [ ] **NO** horizontal scroll on any viewport
- [ ] Tables use overflow-x-auto if needed
- [ ] Wide content wraps or scales

### Vertical Scroll
- [ ] Smooth scroll behavior (if enabled)
- [ ] No unexpected scroll jank
- [ ] Sticky header remains visible

### Container Overflow
- [ ] Text doesn't overflow containers
- [ ] Images don't break layouts
- [ ] Code blocks scroll if needed

---

## Performance on Mobile

### Load Time
- [ ] First Contentful Paint < 2.5s on 4G
- [ ] Time to Interactive < 5s
- [ ] Total bundle size < 300KB (mobile)

### Interactions
- [ ] No lag when tapping buttons
- [ ] Animations smooth (60fps)
- [ ] No janky scrolling

### Data Usage
- [ ] Images optimized for mobile
- [ ] Videos load only when needed
- [ ] Fonts subset for mobile

---

## Orientation Testing (Mobile/Tablet)

### Portrait
- [ ] All layouts work in portrait
- [ ] No horizontal scroll
- [ ] CTAs accessible

### Landscape
- [ ] Layouts adapt to landscape
- [ ] Hero sections not too tall
- [ ] Navigation remains usable

---

## Testing Tools

### Browser DevTools
- **Chrome DevTools**
  - Device toolbar (Cmd+Shift+M)
  - Responsive mode
  - Network throttling
  - Lighthouse mobile audit

- **Safari Web Inspector**
  - Responsive design mode
  - iOS device simulation

- **Firefox Developer Tools**
  - Responsive design mode
  - Touch simulation

### Physical Device Testing
- Use **BrowserStack Real Devices**
- Use **LambdaTest Real Devices**
- Test on actual phones/tablets when possible

### Automated Testing
- **Percy** - Visual regression testing
- **Chromatic** - Component visual testing
- **BackstopJS** - Screenshot comparison

---

## Common Responsive Issues to Check

### Spacing
- [ ] Padding reduces on mobile (py-32 → py-16)
- [ ] Gap between elements appropriate
- [ ] No cramped text

### Alignment
- [ ] Text-center on mobile for readability
- [ ] Flexbox items don't wrap awkwardly
- [ ] Grid columns stack properly

### Visibility
- [ ] No content hidden unintentionally
- [ ] "View more" functionality works
- [ ] Collapse/expand states clear

### Forms
- [ ] Inputs full-width on mobile
- [ ] Labels visible
- [ ] Error messages display
- [ ] Submit buttons accessible

---

## Bug Reporting Template

```markdown
**Viewport:** 375px × 667px (iPhone SE)
**Page:** /services
**Issue:** 4-pillar cards overflow container on mobile
**Severity:** High

**Steps to Reproduce:**
1. Resize viewport to 375px width
2. Navigate to /services
3. Scroll to 4-pillar section
4. Observe card overflow

**Expected:** Cards stack in single column, full width
**Actual:** Cards partially off-screen, horizontal scroll

**Screenshot:** [Attach mobile screenshot]
```

---

## Testing Priority

1. **Mobile iPhone (375px)** - Highest traffic
2. **Desktop 1920px** - Second highest
3. **Tablet iPad (768px)** - Third
4. **Large Desktop 2560px** - Edge case testing
5. **Small Mobile 320px** - Minimum support

---

## Sign-Off

### Mobile Testing (≤767px)
- [ ] All 9 pages tested
- [ ] Touch targets verified
- [ ] No horizontal scroll
- **Tester:** _______________
- **Date:** _______________

### Tablet Testing (768-1023px)
- [ ] All 9 pages tested
- [ ] Layout transitions smooth
- [ ] No layout breaks
- **Tester:** _______________
- **Date:** _______________

### Desktop Testing (≥1024px)
- [ ] All 9 pages tested
- [ ] Large screen layouts verified
- [ ] No wasted space
- **Tester:** _______________
- **Date:** _______________

---

*Checklist created: 2025-10-18 by Claude (Sonnet 4.5)*
*Based on Tailwind breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)*
