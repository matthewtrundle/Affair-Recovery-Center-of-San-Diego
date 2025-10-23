# Cross-Browser Testing Checklist
**ARC San Diego Website - Browser Compatibility QA**
**Date:** October 18, 2025
**Status:** ⏳ PENDING USER TESTING

---

## Testing Matrix

### Required Browsers & Versions
- ✅ Chrome (Latest + Version -1)
- ✅ Safari (Latest + Version -1)
- ✅ Firefox (Latest + Version -1)
- ⚠️ Edge (Latest) - Optional but recommended
- ⚠️ Mobile Safari (iOS Latest)
- ⚠️ Mobile Chrome (Android Latest)

---

## Pages to Test (9 Primary Pages)

### Priority 1 (Critical Path)
1. **Homepage** (`/`)
2. **Schedule** (`/schedule`) - Contains Calendly embed
3. **Contact** (`/contact`)
4. **Services** (`/services`)

### Priority 2 (Content Pages)
5. **About** (`/about`)
6. **FAQ** (`/faq`)
7. **Approach** (`/approach`)

### Priority 3 (Specialty Pages)
8. **For the Hurt Partner** (`/for-the-hurt-partner`)
9. **For the Partner Who Strayed** (`/for-the-partner-who-strayed`)
10. **Testimonials** (`/testimonials`)

---

## Test Cases by Feature

### 1. Layout & Rendering

#### Chrome
- [ ] Grid layouts render correctly (2-column, 3-column, 4-column)
- [ ] Gradient backgrounds display smoothly
- [ ] Glass morphism effects (backdrop-filter) work
- [ ] Font loading completes (no FOIT/FOUT)
- [ ] Images load without layout shift
- [ ] Footer columns align properly

#### Safari
- [ ] Webkit-specific backdrop-filter renders
- [ ] CSS Grid compatibility
- [ ] Gradient mesh overlays display
- [ ] Font rendering quality (anti-aliasing)
- [ ] Video elements play correctly (PremiumHero)
- [ ] Smooth scrolling behavior

#### Firefox
- [ ] Grid layouts match Chrome/Safari
- [ ] backdrop-filter polyfill or fallback works
- [ ] SVG icons render correctly
- [ ] Font weight rendering (Cormorant/Playfair)
- [ ] Flexbox layouts align properly

---

### 2. Interactive Components

#### Accordions (FAQ, PremiumFAQAccordion)
- [ ] **Chrome:** Expand/collapse animations smooth
- [ ] **Safari:** aria-expanded state updates
- [ ] **Firefox:** ChevronDown rotation animates
- [ ] All: Height transitions don't jump
- [ ] All: Content visibility toggles correctly

#### Navigation (PremiumHeader)
- [ ] **Chrome:** Mobile menu toggles
- [ ] **Safari:** Sticky header remains in viewport
- [ ] **Firefox:** Hover states on nav links
- [ ] All: Focus indicators visible on tab navigation
- [ ] All: Logo links to homepage

#### CTABand Components
- [ ] **Chrome:** Gradient animations render
- [ ] **Safari:** Floating particles animate
- [ ] **Firefox:** Shimmer effects on buttons
- [ ] All: Hover effects trigger smoothly
- [ ] All: Links navigate correctly

---

### 3. Framer Motion Animations

#### PremiumHero
- [ ] **Chrome:** Video carousel auto-plays
- [ ] **Safari:** Video controls hidden
- [ ] **Firefox:** Parallax scroll effects smooth
- [ ] All: Rotating quotes transition
- [ ] All: Magnetic button effect works
- [ ] All: Reduced motion respected (@media query)

#### Page Transitions
- [ ] **Chrome:** Scroll-triggered reveals
- [ ] **Safari:** Stagger animations on lists
- [ ] **Firefox:** Fade-in effects on sections
- [ ] All: No animation jank or layout thrashing
- [ ] All: Animations disabled with prefers-reduced-motion

---

### 4. Typography & Fonts

#### Font Loading
- [ ] **Chrome:** Cormorant Garamond loads
- [ ] **Chrome:** Playfair Display loads
- [ ] **Chrome:** Inter loads
- [ ] **Chrome:** Source Sans 3 loads
- [ ] **Safari:** Font fallback cascade works
- [ ] **Safari:** Font weights display correctly
- [ ] **Firefox:** Italic variants render
- [ ] All: No invisible text during loading (display: swap)

#### Font Hierarchy
- [ ] **All:** H1 uses display font (Cormorant/Playfair)
- [ ] **All:** H2 uses display font
- [ ] **All:** H3/H4 use heading font
- [ ] **All:** Body text uses Inter/Source Sans
- [ ] **All:** Font sizes scale responsively

---

### 5. Forms & Inputs

#### Calendly Embed (Schedule page)
- [ ] **Chrome:** Iframe loads correctly
- [ ] **Safari:** Mobile view scales properly
- [ ] **Firefox:** Form inputs accessible
- [ ] All: Date picker functional
- [ ] All: Timezone selection works
- [ ] All: Submit/booking completes

#### Contact Form (if any)
- [ ] **N/A** - No forms on site (Calendly only)

---

### 6. Media & Assets

#### Images
- [ ] **Chrome:** Next/Image optimization works
- [ ] **Safari:** WebP format supported
- [ ] **Firefox:** Image lazy loading
- [ ] All: Alt text displays on broken images
- [ ] All: Aspect ratios maintained

#### Videos (PremiumHero)
- [ ] **Chrome:** MP4 playback smooth
- [ ] **Safari:** Autoplay works (muted)
- [ ] **Firefox:** Video format supported
- [ ] All: Fallback for unsupported formats
- [ ] All: Video doesn't block page load

---

### 7. Performance

#### Load Times
- [ ] **Chrome:** First Contentful Paint < 1.5s
- [ ] **Safari:** Largest Contentful Paint < 2.5s
- [ ] **Firefox:** Time to Interactive < 3.5s
- [ ] All: No layout shifts (CLS < 0.1)
- [ ] All: Bundle size < 500KB initial

#### Caching
- [ ] **All:** Static assets cached (fonts, images)
- [ ] **All:** API requests minimal
- [ ] **All:** Service worker (if implemented)

---

### 8. Accessibility (Browser-Specific)

#### Keyboard Navigation
- [ ] **Chrome:** Tab order logical
- [ ] **Safari:** Focus indicators visible
- [ ] **Firefox:** Skip to content works
- [ ] All: No keyboard traps
- [ ] All: Esc closes modals/menus

#### Screen Reader Support
- [ ] **Chrome + NVDA:** ARIA labels read
- [ ] **Safari + VoiceOver:** Semantic HTML navigable
- [ ] **Firefox + NVDA:** Heading hierarchy clear
- [ ] All: Image alt text read
- [ ] All: Link purpose clear

---

### 9. Known Browser Issues

#### Safari-Specific
- [ ] Backdrop-filter support (check iOS Safari)
- [ ] Date input format (US vs international)
- [ ] Video autoplay policy (requires muted)
- [ ] Smooth scroll behavior polyfill

#### Firefox-Specific
- [ ] backdrop-filter may need fallback
- [ ] Font rendering may be thicker
- [ ] Grid gap syntax (older versions)

#### Edge-Specific
- [ ] Generally compatible with Chrome
- [ ] Test Chromium Edge specifically

---

## Testing Tools

### Browser DevTools
- **Chrome DevTools**
  - Lighthouse audit (Performance, Accessibility, SEO)
  - Coverage tool (unused CSS/JS)
  - Network throttling (Slow 3G, Fast 3G)

- **Safari Web Inspector**
  - Responsive design mode
  - Timeline recording
  - Storage inspector

- **Firefox Developer Tools**
  - Accessibility inspector
  - Grid inspector
  - Console errors

### Automated Testing
- [ ] **BrowserStack** - Cross-browser screenshots
- [ ] **LambdaTest** - Live testing on real browsers
- [ ] **Sauce Labs** - Automated cross-browser tests

### Manual Testing Checklist
- [ ] Clear browser cache before each test
- [ ] Test with browser extensions disabled
- [ ] Test in incognito/private mode
- [ ] Test with different zoom levels (100%, 125%, 150%)

---

## Bug Reporting Template

When you find an issue, report it with:

```markdown
**Browser:** Chrome 120.0.0 (macOS)
**Page:** /services
**Issue:** 4-pillar cards misaligned on 1280px width
**Severity:** Medium
**Steps to Reproduce:**
1. Navigate to /services
2. Resize window to 1280px
3. Scroll to 4-pillar section
4. Observe card alignment

**Expected:** Cards in 2x2 grid
**Actual:** Cards overlap on right side

**Screenshot:** [Attach screenshot]
**Console Errors:** None
```

---

## Severity Levels

- **Critical** 🔴 - Blocks core functionality (e.g., Calendly won't load)
- **High** 🟠 - Major visual issue or broken feature
- **Medium** 🟡 - Minor layout issue, still functional
- **Low** 🟢 - Cosmetic issue, no impact on UX

---

## Testing Priority Order

1. **Chrome Desktop** (70% of traffic) - Priority 1 pages
2. **Safari Desktop** (15% of traffic) - Priority 1 pages
3. **Mobile Safari** (10% of traffic) - Priority 1 pages
4. **Firefox Desktop** (3% of traffic) - Priority 1 pages
5. **Mobile Chrome** (2% of traffic) - Priority 1 pages

Then repeat for Priority 2 and Priority 3 pages.

---

## Sign-Off

### Chrome Testing
- [ ] All critical pages tested
- [ ] All interactive components verified
- [ ] No console errors
- **Tester:** _______________
- **Date:** _______________

### Safari Testing
- [ ] All critical pages tested
- [ ] All interactive components verified
- [ ] No console errors
- **Tester:** _______________
- **Date:** _______________

### Firefox Testing
- [ ] All critical pages tested
- [ ] All interactive components verified
- [ ] No console errors
- **Tester:** _______________
- **Date:** _______________

---

## Next Steps After Testing

1. **Document all issues** in issue tracker (GitHub Issues, Linear, etc.)
2. **Prioritize fixes** based on severity and browser market share
3. **Implement fixes** and re-test in affected browsers
4. **Update this checklist** with any new test cases discovered
5. **Schedule regular regression testing** (monthly)

---

*Checklist created: 2025-10-18 by Claude (Sonnet 4.5)*
*Based on Next.js 14.2.5, React 18, Framer Motion, Tailwind CSS stack*
