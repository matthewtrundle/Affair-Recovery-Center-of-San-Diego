# Page Inventory - ARC San Diego Website

Complete inventory of all website pages with content status, word counts, and key elements.

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Pages | 8 |
| Total Word Count | ~8,500 words |
| Pages Needing Review | 8 |
| Pages Approved | 0 |
| Critical Missing Info | 5 items |

---

## Page-by-Page Breakdown

### 1. Home Page
**File**: `app/(marketing)/page.tsx`
**Status**: #needs-review
**Priority**: 🔴 High
**Word Count**: ~1,200 words

#### Key Sections
- [[Components/Hero-Section]] - Rotating headlines with trust indicators
- [[Components/About-Therapist]] - Introduction to Jordan Zipkin
- [[Components/Problem-Promise]] - Understanding pain and offering hope
- [[Components/Process-Steps]] - 3-phase recovery framework
- [[Components/Method-Cards]] - Evidence-based approaches
- [[Components/Testimonials]] - Client success stories
- [[Components/FAQ-Preview]] - Top 4 questions

#### CTAs on Page
1. "Begin Your Recovery Journey" (Hero)
2. "Explore Our Methodology" (Hero)
3. "Schedule a Consultation" (About section)
4. "Learn About My Approach" (About section)
5. "Begin Your Recovery Journey" (Process section)
6. "Explore Our Approach" (Methods section)
7. "View All FAQs" (FAQ preview)

#### Missing/Placeholder Content
- [ ] Actual therapist photo
- [ ] Real testimonial names/details (currently representative)
- [ ] Video testimonial placeholder

#### Next Actions
- Review tone and voice with client
- Confirm San Diego neighborhood references
- Verify therapeutic method descriptions

---

### 2. About Page
**File**: `app/(marketing)/about/page.tsx`
**Status**: #needs-review
**Priority**: 🔴 High
**Word Count**: ~900 words

#### Key Sections
- [[Components/About-Hero]] - Local SD therapist positioning
- [[Components/Professional-Bio]] - Specialized training and experience
- [[Components/Philosophy]] - Core beliefs and approach
- [[Components/Affiliations]] - Professional credentials
- [[Components/Why-Specialization]] - Why affair recovery

#### CTAs on Page
1. "Start Your Journey" (Hero)
2. "Learn My Approach" (Hero)

#### Missing/Placeholder Content
- [ ] LMFT License Number (currently #47291 - placeholder)
- [ ] Actual year licensed (currently 2008 - verify)
- [ ] Professional headshot
- [ ] Office photo

#### Next Actions
- Verify all credentials and dates
- Confirm personal philosophy statements
- Get actual license number
- Review "why affair recovery" narrative

---

### 3. Services Page
**File**: `app/(marketing)/services/page.tsx`
**Status**: #needs-review
**Priority**: 🟡 Medium
**Word Count**: ~1,100 words

#### Key Sections
- [[Components/Services-Hero]] - Services for healing
- [[Components/Primary-Service]] - Couples therapy for betrayal
- [[Components/Additional-Services]] - Individual, intensives, discernment
- [[Components/Process-Overview]] - Session breakdown (1-20+)
- [[Components/Investment]] - Pricing and value
- [[Components/Services-FAQ]] - Service-specific questions

#### CTAs on Page
1. "Start Your Journey" (Hero)
2. "Learn Our Approach" (Hero)
3. "Learn More About This Service" (Primary service)

#### Missing/Placeholder Content
- [ ] Confirm pricing: $180/couples, $150/individual, $1,800/intensive
- [ ] Insurance details (some plans accepted?)
- [ ] Payment plan specifics

#### Next Actions
- Confirm all pricing
- Clarify insurance policy
- Verify session duration (60 min vs 75 min first session)
- Review service descriptions

---

### 4. Approach Page
**File**: `app/(marketing)/approach/page.tsx` (may need to be created)
**Status**: #needs-review
**Priority**: 🟡 Medium
**Word Count**: ~600 words

#### Key Sections
- Gottman Method details
- Relational Life Therapy details
- Neuroscience-informed care
- How methods integrate

#### Missing/Placeholder Content
- [ ] This page may not exist yet - check codebase
- [ ] Need research citations?
- [ ] More detail on specific techniques?

#### Next Actions
- Verify page exists
- Review technical method descriptions
- Ensure accuracy of therapeutic approaches

---

### 5. Testimonials Page
**File**: `app/(marketing)/testimonials/page.tsx`
**Status**: #needs-review
**Priority**: 🟢 Low
**Word Count**: ~800 words

#### Key Sections
- [[Components/Success-Stats]] - Outcome statistics
- [[Components/Extended-Testimonials]] - Detailed client stories
- [[Components/Video-Testimonials]] - Video placeholder

#### CTAs on Page
1. "Read Their Stories" (Hero)

#### Missing/Placeholder Content
- [ ] All testimonials are representative (not actual clients)
- [ ] Video testimonials are placeholders
- [ ] Success statistics need verification
- [ ] Need signed consent forms for any real testimonials

#### Next Actions
- Decide: use representative testimonials or gather real ones?
- If real: collect testimonials with proper consent
- Verify any statistics cited (95% success rate, etc.)
- Consider HIPAA compliance for any specific details

---

### 6. FAQ Page
**File**: `app/(marketing)/faq/page.tsx`
**Status**: #needs-review
**Priority**: 🔴 High
**Word Count**: ~2,500 words

#### Key Sections
- About Therapy Process (5 questions)
- Affair Recovery Specific (3+ questions)
- Logistics & Scheduling (questions)
- Insurance & Payment (questions)
- Getting Started (questions)

#### CTAs on Page
- Multiple "Schedule Consultation" throughout

#### Missing/Placeholder Content
- [ ] Some answers use placeholder office details
- [ ] Pricing consistency check needed
- [ ] Insurance specifics

#### Notable FAQ Topics
- Partner not ready for therapy
- Typical session structure
- Individual vs couples sessions
- Confidentiality and secrets
- Handling explosive emotions
- Recovery timeline
- Success rates (honest approach)
- Taking sides
- "Once a cheater" belief
- Handling triggers
- Pricing and cancellation
- Office location
- Virtual sessions
- Medication/psychiatry referrals
- Why specialize in affair recovery

#### Next Actions
- Review all answers for accuracy
- Ensure consistent tone throughout
- Verify all logistical details
- Check pricing consistency

---

### 7. Contact Page
**File**: `app/(marketing)/contact/page.tsx`
**Status**: #needs-review
**Priority**: 🔴 High
**Word Count**: ~400 words

#### Key Sections
- [[Components/Contact-Methods]] - Multiple ways to reach out
- [[Components/Office-Info]] - Location and hours
- [[Components/What-to-Expect]] - Response timeline
- [[Components/Crisis-Resources]] - Emergency contacts

#### CTAs on Page
1. "Grab a Time That Works" (Schedule call)
2. Phone number (clickable)
3. Email address (clickable)

#### Missing/Placeholder Content
- [ ] 🔴 CRITICAL: Phone number (619) 555-0123 is placeholder
- [ ] 🔴 CRITICAL: Email jordan@affairrecoverysd.com - verify domain
- [ ] 🔴 CRITICAL: Office address (Carmel Valley Professional Center)
- [ ] Office hours (verify)
- [ ] Service area specifics

#### Next Actions
- **PRIORITY**: Get all actual contact information
- Verify office hours
- Confirm service area (in-person vs telehealth)
- Set up email forwarding/inbox
- Set up phone number
- Add office photo

---

### 8. Schedule Page
**File**: `app/(marketing)/schedule/page.tsx`
**Status**: #needs-review
**Priority**: 🔴 High
**Word Count**: ~500 words

#### Key Sections
- [[Components/Schedule-Hero]] - Schedule your consultation
- [[Components/What-to-Expect]] - First session details
- [[Components/Preparation-Tips]] - For betrayed, unfaithful, both
- Calendly embed

#### CTAs on Page
- Calendly scheduling widget (primary action)

#### Missing/Placeholder Content
- [ ] 🔴 CRITICAL: Calendly URL (currently placeholder)
- [ ] Intake form process
- [ ] Confirmation email details

#### Next Actions
- **PRIORITY**: Set up Calendly account
- Configure Calendly settings (duration, buffer, etc.)
- Create intake forms
- Set up automated confirmation emails
- Test booking flow end-to-end

---

## Components Used Across Multiple Pages

See [[Components/]] folder for detailed documentation on:

- [[Components/Hero-Section]]
- [[Components/CTA-Band]]
- [[Components/Testimonial-Carousel]]
- [[Components/FAQ-Accordion]]
- [[Components/Contact-Methods]]
- [[Components/Header-Navigation]]
- [[Components/Footer]]

---

## Critical Missing Information Summary

### 🔴 High Priority - Blocking Launch

1. **LMFT License Number**
   - Current: #123456 (placeholder)
   - Location: About page, footer
   - Action: Get actual license number

2. **Phone Number**
   - Current: (619) 555-0123, (858) 555-1234 (various placeholders)
   - Location: Contact page, footer, CTAs
   - Action: Set up business phone line

3. **Email Address**
   - Current: jordan@affairrecoverysd.com, jordan@affairrecoverysandiego.com
   - Location: Contact page, footer
   - Action: Set up professional email, decide on domain

4. **Office Address**
   - Current: Carmel Valley Professional Center (generic)
   - Location: Contact page, about page, footer
   - Action: Provide exact address

5. **Calendly Account**
   - Current: Placeholder URL
   - Location: Schedule page, CTA buttons
   - Action: Set up and configure Calendly

### 🟡 Medium Priority - Should Update Soon

6. **Pricing Confirmation**
   - Multiple price points mentioned
   - Need to confirm: $350/session, $450/initial, $1,800/intensive

7. **Insurance Details**
   - "Some insurance accepted" vs "out-of-network only"
   - Need clarity on policy

8. **Professional Photos**
   - Therapist headshot
   - Office photos
   - Team photos (if applicable)

9. **Testimonials**
   - Decide on representative vs real
   - If real: collect with consent forms

### 🟢 Low Priority - Nice to Have

10. **Blog Content**
    - Future content strategy
    - Initial blog posts

11. **Video Testimonials**
    - Production and editing
    - Platform hosting

12. **Additional Pages**
    - Privacy Policy
    - Terms of Service
    - HIPAA Notice

---

## Page Performance Goals

| Page | Load Time Goal | Key Metric |
|------|---------------|------------|
| Home | <1.5s | Consultation bookings |
| About | <1.5s | Time on page >2min |
| Services | <1.5s | CTA click-through |
| FAQ | <2s | Search usage, time on page |
| Contact | <1s | Form submissions |
| Schedule | <1s | Calendly completion rate |

---

## Next Review Cycle

- [ ] Client review all pages
- [ ] Update placeholder content
- [ ] Verify all facts and credentials
- [ ] Test all CTAs and links
- [ ] Mobile responsiveness check
- [ ] Accessibility audit
- [ ] SEO optimization check

---

## Related Documents

- [[00-WEBSITE-OVERVIEW]] - Overall strategy
- [[02-CONTENT-AUDIT]] - Detailed content analysis
- [[Planning/LAUNCH-CHECKLIST]] - Pre-launch tasks

---

*Last Updated: 2025-10-17*
*Next Review: Before launch*
