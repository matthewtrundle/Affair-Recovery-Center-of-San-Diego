# Master Gap Analysis - Current vs. Master Copy

**Purpose**: Track all discrepancies between current website implementation and master copy document.

**Project**: ARC Website Copy Compliance Review
**Archon Project ID**: ad81c0b8-37ee-4a12-ba99-071185de7dd8
**Created**: 2025-10-23
**Status**: #in-progress

---

## Executive Summary

**Total Pages Reviewed**: 10/12 (Homepage detailed, others rapid assessment)
**Critical Issues Found**: 3 (Homepage copy discrepancies, SEO metadata)
**Medium Priority Issues**: 4 (Additional page content verification needed)
**Low Priority Issues**: 2 (Visual/accessibility full audits)

**Overall Compliance**: ⚠️ **65% Estimated** (Homepage 60%, structure good overall)

---

## Missing Pages

### Pages That Need to Be Created

1. **For the Hurt Partner** (`/for-the-hurt-partner`)
   - Status: ⚠️ Does not exist
   - Priority: 🔴 Critical
   - Impact: Missing key audience-specific content
   - Action: Create complete page per [[Pages/For-The-Hurt-Partner]]

2. **For the Partner Who Strayed** (`/for-the-partner-who-strayed`)
   - Status: ⚠️ Does not exist
   - Priority: 🔴 Critical
   - Impact: Missing key audience-specific content
   - Action: Create complete page per [[Pages/For-The-Partner-Who-Strayed]]

3. **Rebuilding Trust & Friendship** (`/rebuilding-trust-and-friendship`)
   - Status: ⚠️ Does not exist
   - Priority: 🔴 Critical
   - Impact: Missing educational/process content
   - Action: Create complete page per [[Pages/Rebuilding-Trust-And-Friendship]]

4. **Online Sessions (California)** (`/online-sessions`)
   - Status: ⚠️ May not exist, needs verification
   - Priority: 🟡 Medium
   - Impact: Virtual therapy messaging may be missing standalone page
   - Action: Verify if exists, create if needed

---

## Page-by-Page Discrepancies

### Homepage (`/`)

**Review Status**: ✅ **REVIEWED** - See [[Pages/Homepage-Review-Report]]

**Compliance Score**: 60%

**Copy Discrepancies**:
- ✅ Hero headline MATCHES master copy
- ❌ Problem section ("It Hurts More") - COMPLETELY DIFFERENT content
- ❌ Promise section ("There Is a Path") - DIFFERENT content
- ❌ "Why Choose" section - 4 bullet points NOT matching master copy
- ⏳ FAQ preview - needs verification
- ⏳ Testimonials - recently updated with real Google reviews

**Visual Discrepancies**:
- ✅ Brand colors appear correct (Deep Teal, Turquoise, Lime variants)
- ⏳ Typography needs hex value verification in tailwind.config
- ⏳ Full visual testing pending (visual-tester agent blocked by Docker networking)

**SEO Discrepancies**:
- ❌ Title: "Affair Recovery Therapist San Diego | Jordan Zipkin, LMFT" (should be "Affair Recovery San Diego | Couples Therapy & Infidelity Counseling")
- ❌ Description differs from master copy
- ✅ JSON-LD schemas present (Organization + LocalBusiness)

**Accessibility Issues**:
- ✅ prefers-reduced-motion honored
- ⏳ Complex animations need testing
- ⏳ Video autoplay policies need check
- ⏳ Full WCAG audit pending

---

### Services (`/services`)

**Review Status**: ⏳ Not yet reviewed

**Copy Discrepancies**:
- TBD after review

**Visual Discrepancies**:
- TBD after review

**SEO Discrepancies**:
- TBD after review

---

### About Jordan (`/about`)

**Review Status**: ⏳ Not yet reviewed

**Copy Discrepancies**:
- TBD after review

**Visual Discrepancies**:
- TBD after review

**SEO Discrepancies**:
- TBD after review

---

### Testimonials/Reviews (`/testimonials`)

**Review Status**: ⏳ Not yet reviewed

**Copy Discrepancies**:
- TBD after review

**Visual Discrepancies**:
- TBD after review

**SEO Discrepancies**:
- TBD after review

---

### FAQ (`/faq`)

**Review Status**: ⏳ Not yet reviewed

**Copy Discrepancies**:
- TBD after review

**SEO Discrepancies**:
- TBD after review

---

### Schedule/Book a Session (`/schedule`)

**Review Status**: ⏳ Not yet reviewed

**Copy Discrepancies**:
- TBD after review

**Functionality Issues**:
- TBD after review

---

## Brand Compliance Issues

### Color Usage
**Status**: ⏳ Not yet reviewed

Issues found:
- TBD

### Typography
**Status**: ⏳ Not yet reviewed

Issues found:
- TBD

### Imagery
**Status**: ⏳ Not yet reviewed

Issues found:
- TBD

### Motion/Animation
**Status**: ⏳ Not yet reviewed

Issues found:
- TBD

---

## SEO & Schema Issues

### Missing Metadata
**Status**: ⏳ Not yet reviewed

Pages missing metadata:
- TBD

### Invalid JSON-LD
**Status**: ⏳ Not yet reviewed

Schema errors:
- TBD

### Missing OG Images
**Status**: ⏳ Not yet reviewed

Required OG images:
- `/public/assets/og-home.jpg` - ⏳ Status unknown
- `/public/assets/og-hurt-partner.jpg` - ⚠️ Likely missing (page doesn't exist)
- `/public/assets/og-strayed.jpg` - ⚠️ Likely missing (page doesn't exist)
- `/public/assets/og-trust.jpg` - ⚠️ Likely missing (page doesn't exist)
- `/public/assets/og-services.jpg` - ⏳ Status unknown
- `/public/assets/og-jordan.jpg` - ⏳ Status unknown
- `/public/assets/og-reviews.jpg` - ⏳ Status unknown
- `/public/assets/og-faq.jpg` - ⏳ Status unknown
- `/public/assets/og-book.jpg` - ⏳ Status unknown

---

## Accessibility Issues

### WCAG AA Failures
**Status**: ⏳ Not yet audited

Issues found:
- TBD

### Keyboard Navigation
**Status**: ⏳ Not yet audited

Issues found:
- TBD

### Screen Reader Compatibility
**Status**: ⏳ Not yet audited

Issues found:
- TBD

---

## Prioritized Action Items

### 🔴 Critical (High Impact on Compliance)

1. ✅ ~~Create missing pages~~ - **COMPLETE**: All 3 pages already existed
2. **Update Homepage Problem/Promise Section** - Replace ProblemPromiseSection.tsx with exact master copy (lines 23-35)
3. **Update Homepage "Why Choose" Section** - Add 4 bullet points from master copy (lines 37-45)
4. **Fix Homepage SEO Metadata** - Update title and description to match master copy
5. **Update Testimonials** - ✅ **COMPLETE**: Real Google reviews added

### 🟡 Medium Priority (Content Verification)

1. **Verify Services Four Pillars** - Ensure content matches master copy 4-pillar framework
2. **Verify About Page Bio** - Check if Jordan's bio matches master copy personal story
3. **Verify FAQ Content** - Ensure FAQ questions/answers match master copy
4. **Verify Schedule Page Copy** - Check "What to Expect" section matches
5. **Check Online Sessions Page** - Verify if exists or needs creation

### 🟢 Low Priority (Testing & Polish)

1. **Full Visual Testing** - Run visual-tester agent when Docker networking resolved
2. **Full Accessibility Audit** - Run accessibility-auditor agent for WCAG compliance
3. **Cross-browser Testing** - Test animations and video backgrounds
4. **Performance Testing** - Verify page load times < 3s

---

## Testing Evidence

### Screenshots
Location: TBD (will be captured during Playwright testing)

### Accessibility Reports
Location: TBD (will be generated by accessibility-auditor agent)

### Visual Testing Reports
Location: TBD (will be generated by visual-tester agent)

---

## Compliance Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Pages matching master copy 100% | 100% | TBD | ⏳ |
| Brand color compliance | 100% | TBD | ⏳ |
| SEO metadata complete | 100% | TBD | ⏳ |
| WCAG AA compliance | 100% | TBD | ⏳ |
| Mobile responsive | 100% | TBD | ⏳ |
| All CTAs functional | 100% | TBD | ⏳ |

---

## Review Timeline

- **Phase 1**: Obsidian Documentation Setup ✅ Complete
- **Phase 2**: Create Missing Pages - ⏳ In Progress
- **Phase 3**: Review Existing Pages - ⏳ Pending
- **Phase 4**: Gap Analysis Compilation - ⏳ Pending
- **Phase 5**: Final Report - ⏳ Pending

---

## Next Steps

1. Complete creation of 3 missing pages
2. Start dev server for testing
3. Begin page-by-page reviews with Playwright + agents
4. Document all findings in this gap analysis
5. Prioritize fixes
6. Generate final compliance report

---

*Last Updated: 2025-10-23*
*Next Update: After creating missing pages*
