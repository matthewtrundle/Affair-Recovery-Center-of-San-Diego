# Launch Checklist - ARC San Diego

Complete pre-launch checklist. Check off items as completed.

---

## Launch Readiness: 🔴 NOT READY

**Blocking Issues**: 5 critical items
**Estimated Time to Launch**: 2-4 weeks (with all info ready)
**Last Updated**: 2025-10-17

---

## Phase 1: Critical Information 🔴

**These MUST be completed before launch. Site cannot function without them.**

### Contact Information
- [ ] **Phone Number** - Set up business line
  - Current: (619) 555-0123 (PLACEHOLDER)
  - Update locations: Contact page, footer, all CTAs
  - Test: Click-to-call works on mobile
  - Test: Voicemail set up professionally

- [ ] **Email Address** - Set up professional email
  - Current: jordan@affairrecoverysd.com (PLACEHOLDER)
  - Verify domain: affairrecoverysd.com OR affairrecoverysandiego.com
  - Set up email forwarding if needed
  - Update locations: Contact page, footer, all CTAs
  - Test: Can send/receive emails
  - Set up auto-responder if desired

- [ ] **Office Address** - Provide exact location
  - Current: "Carmel Valley Professional Center" (GENERIC)
  - Need: Full address with suite number
  - Update locations: Contact page, about page, footer
  - Add: Google Maps embed
  - Add: Parking instructions
  - Add: Public transit info (if applicable)

### Professional Credentials
- [ ] **LMFT License Number** - Verify actual license
  - Current: #123456 (PLACEHOLDER)
  - Verify: CA BBS license lookup
  - Update locations: About page, footer
  - Add: License issue date
  - Add: Link to CA BBS verification (optional)

### Scheduling System
- [ ] **Calendly Account** - Set up completely
  - [ ] Create Calendly account
  - [ ] Configure appointment types:
    - [ ] Free 15-min consultation
    - [ ] Initial 90-min assessment ($450)
    - [ ] 60-min couples session ($350)
    - [ ] 50-min individual session ($150)
  - [ ] Set availability rules
  - [ ] Add buffer times between appointments
  - [ ] Set up notifications (email/SMS)
  - [ ] Create intake forms
  - [ ] Test booking flow end-to-end
  - [ ] Get embed code
  - [ ] Add to Schedule page
  - [ ] Test on mobile

### Pricing Confirmation
- [ ] **Finalize All Pricing** - Resolve inconsistencies
  - Current inconsistencies noted in [[02-CONTENT-AUDIT]]
  - [ ] Couples session: $___ (currently $350 vs $180)
  - [ ] Individual session: $___ (currently $150)
  - [ ] Initial assessment: $___ (currently $450 vs $180)
  - [ ] Intensive weekend: $___ (currently $1,800)
  - [ ] Update ALL mentions consistently
  - [ ] Update Services page
  - [ ] Update FAQ page
  - [ ] Update Calendly pricing
  - [ ] Update any other mentions

### Insurance Policy
- [ ] **Clarify Insurance Acceptance** - Decide final policy
  - [ ] Accept insurance? (Yes/No)
  - [ ] If yes, which plans?
  - [ ] Out-of-network benefits? (Superbills?)
  - [ ] Update Services page
  - [ ] Update FAQ
  - [ ] Create insurance info page (optional)

**Phase 1 Deadline**: ________________

---

## Phase 2: Content & Legal 🟡

**These should be completed before launch for legal/professional reasons.**

### Legal Pages
- [ ] **Privacy Policy** - REQUIRED
  - [ ] Work with attorney or use vetted template
  - [ ] Cover: cookies, analytics, email list, third-party services
  - [ ] Include: GDPR and CCPA provisions
  - [ ] Link from footer
  - [ ] Test page loads

- [ ] **HIPAA Notice** - REQUIRED (healthcare)
  - [ ] Work with healthcare attorney
  - [ ] Cover: PHI, patient rights, security measures
  - [ ] Explain: when therapy starts (not on website)
  - [ ] Link from footer
  - [ ] Test page loads

- [ ] **Terms of Service** - RECOMMENDED
  - [ ] Use vetted template
  - [ ] Cover: website use, liability, disputes
  - [ ] Link from footer
  - [ ] Test page loads

- [ ] **Good Faith Estimate** - REQUIRED (uninsured clients)
  - [ ] Create GFE document
  - [ ] Mention on Services/Pricing page
  - [ ] Provide before or at first session

### Professional Photos
- [ ] **Therapist Headshot**
  - [ ] Schedule photo session
  - [ ] Professional, approachable look
  - [ ] Multiple expressions/poses
  - [ ] High resolution
  - [ ] Optimize for web
  - [ ] Add to About page
  - [ ] Add to Home page

- [ ] **Office Photos**
  - [ ] Therapy room
  - [ ] Waiting area
  - [ ] Building exterior
  - [ ] Parking area
  - [ ] Optimize for web
  - [ ] Add to Contact/About pages

### Content Verification
- [ ] **Fact-Check Everything**
  - [ ] All credentials accurate
  - [ ] All dates correct
  - [ ] All locations correct
  - [ ] All methods/approaches accurately described
  - [ ] All statistics verifiable

- [ ] **Proofread All Pages**
  - [ ] Home page
  - [ ] About page
  - [ ] Services page
  - [ ] Approach page (if exists)
  - [ ] Testimonials page
  - [ ] FAQ page
  - [ ] Contact page
  - [ ] Schedule page

- [ ] **Voice & Tone Review**
  - [ ] Consistent across all pages
  - [ ] Reflects Jordan's actual voice
  - [ ] Not too casual or too formal
  - [ ] San Diego references accurate

**Phase 2 Deadline**: ________________

---

## Phase 3: Technical Setup 🟡

**These ensure site functions properly and is discoverable.**

### Domain & Hosting
- [ ] **Domain Name** - Register and configure
  - [ ] Decide: affairrecoverysd.com OR affairrecoverysandiego.com
  - [ ] Register domain
  - [ ] Configure DNS
  - [ ] Point to Vercel (or hosting)
  - [ ] Set up SSL certificate
  - [ ] Test: Domain loads site
  - [ ] Set up www redirect (or vice versa)

- [ ] **Hosting Setup** - Configure Vercel
  - [ ] Connect GitHub repo to Vercel
  - [ ] Configure environment variables
  - [ ] Set up production URL
  - [ ] Configure build settings
  - [ ] Test: Deploys work
  - [ ] Set up deploy notifications

### Environment Variables
- [ ] **Configure All Env Vars**
  - [ ] `NEXT_PUBLIC_SITE_URL` - Production URL
  - [ ] `NEXT_PUBLIC_GA_ID` - Google Analytics
  - [ ] `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - Plausible Analytics
  - [ ] `CALENDLY_EMBED_URL` - Calendly link
  - [ ] `RESEND_API_KEY` - Email service (if using)
  - [ ] Any others in `.env.local.example`
  - [ ] Test: All services work

### Analytics Setup
- [ ] **Google Analytics 4**
  - [ ] Create GA4 property
  - [ ] Add tracking code
  - [ ] Set up goals/conversions
  - [ ] Test: Events tracking
  - [ ] Add to env vars

- [ ] **Plausible Analytics** (optional)
  - [ ] Create account
  - [ ] Add site
  - [ ] Add script
  - [ ] Test: Tracking works
  - [ ] Add to env vars

- [ ] **Calendly Webhook** (optional)
  - [ ] Set up webhook endpoint
  - [ ] Configure in Calendly
  - [ ] Test: Booking notifications work

### SEO Basics
- [ ] **Meta Tags** - All pages
  - [ ] Home page meta description
  - [ ] About page meta description
  - [ ] Services page meta description
  - [ ] FAQ page meta description
  - [ ] All other pages
  - [ ] OG images for social sharing

- [ ] **Sitemap**
  - [ ] Verify sitemap.xml generates
  - [ ] Test: `/sitemap.xml` loads
  - [ ] Submit to Google Search Console
  - [ ] Submit to Bing Webmaster Tools

- [ ] **Robots.txt**
  - [ ] Verify robots.txt exists
  - [ ] Allow all pages (or configure exclusions)
  - [ ] Test: `/robots.txt` loads

- [ ] **Schema Markup**
  - [ ] LocalBusiness schema
  - [ ] Professional Service schema
  - [ ] FAQ schema
  - [ ] Test with Rich Results Test

### Search Console Setup
- [ ] **Google Search Console**
  - [ ] Verify domain ownership
  - [ ] Submit sitemap
  - [ ] Check for crawl errors
  - [ ] Monitor indexing

- [ ] **Bing Webmaster Tools** (optional)
  - [ ] Verify domain ownership
  - [ ] Submit sitemap

**Phase 3 Deadline**: ________________

---

## Phase 4: Testing 🟡

**Test everything before going live.**

### Functionality Testing
- [ ] **All Links Work**
  - [ ] Internal links
  - [ ] External links
  - [ ] Navigation menu
  - [ ] Footer links
  - [ ] CTA buttons
  - [ ] Phone numbers (click-to-call)
  - [ ] Email addresses (mailto links)

- [ ] **All Forms Work**
  - [ ] Calendly booking flow
  - [ ] Any contact forms
  - [ ] Newsletter signup (if exists)
  - [ ] Test submissions

- [ ] **All Pages Load**
  - [ ] Home
  - [ ] About
  - [ ] Services
  - [ ] Approach
  - [ ] Testimonials
  - [ ] FAQ
  - [ ] Contact
  - [ ] Schedule
  - [ ] Legal pages
  - [ ] 404 page

### Device Testing
- [ ] **Desktop Browsers**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

- [ ] **Mobile Devices**
  - [ ] iPhone (Safari)
  - [ ] iPhone (Chrome)
  - [ ] Android (Chrome)
  - [ ] Android (Firefox)
  - [ ] Tablet (iPad)

- [ ] **Responsive Breakpoints**
  - [ ] Mobile (320px, 375px, 414px)
  - [ ] Tablet (768px, 1024px)
  - [ ] Desktop (1280px, 1440px, 1920px)

### Performance Testing
- [ ] **Page Speed**
  - [ ] Run Lighthouse audit
  - [ ] Test with PageSpeed Insights
  - [ ] Target: >90 performance score
  - [ ] Optimize images if needed
  - [ ] Check load times on 3G/4G

- [ ] **Core Web Vitals**
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1

### Accessibility Testing
- [ ] **Automated Tools**
  - [ ] Run WAVE evaluation
  - [ ] Run axe DevTools
  - [ ] Run Lighthouse accessibility audit
  - [ ] Target: 100 accessibility score

- [ ] **Manual Testing**
  - [ ] Keyboard navigation (Tab through site)
  - [ ] Screen reader (VoiceOver/NVDA)
  - [ ] Color contrast check
  - [ ] Text resize (up to 200%)
  - [ ] Focus indicators visible

- [ ] **WCAG Compliance**
  - [ ] All images have alt text
  - [ ] All form fields have labels
  - [ ] Proper heading hierarchy
  - [ ] No autoplay video/audio
  - [ ] Captions on videos (when added)

### SEO Testing
- [ ] **Technical SEO**
  - [ ] All pages indexable
  - [ ] No broken links
  - [ ] Proper redirects (if any)
  - [ ] Mobile-friendly test passes
  - [ ] HTTPS working
  - [ ] No mixed content warnings

- [ ] **On-Page SEO**
  - [ ] One H1 per page
  - [ ] Logical header hierarchy
  - [ ] Meta descriptions unique
  - [ ] Title tags unique and descriptive
  - [ ] Alt text descriptive
  - [ ] Internal linking logical

### Security Testing
- [ ] **SSL/HTTPS**
  - [ ] Certificate valid
  - [ ] All pages load via HTTPS
  - [ ] No mixed content
  - [ ] HTTP redirects to HTTPS

- [ ] **Headers**
  - [ ] Security headers present
  - [ ] HSTS enabled
  - [ ] XSS protection

**Phase 4 Deadline**: ________________

---

## Phase 5: Marketing Prep 🟢

**Prepare for launch and ongoing marketing.**

### Google Business Profile
- [ ] **Claim/Create Profile**
  - [ ] Claim business on Google
  - [ ] Verify ownership
  - [ ] Complete all sections
  - [ ] Add photos
  - [ ] Add office hours
  - [ ] Add services
  - [ ] Add booking link
  - [ ] Enable messaging (optional)

### Social Media (Optional)
- [ ] **Set Up Profiles**
  - [ ] Facebook page
  - [ ] Instagram account
  - [ ] LinkedIn profile
  - [ ] Use consistent branding
  - [ ] Link to website

- [ ] **Initial Content**
  - [ ] Profile/cover photos
  - [ ] About sections
  - [ ] First post announcing launch
  - [ ] Share website link

### Email Setup
- [ ] **Professional Email Signature**
  - [ ] Name and credentials
  - [ ] Phone number
  - [ ] Website link
  - [ ] Office address
  - [ ] Professional disclaimer (optional)

- [ ] **Email Nurture** (Optional)
  - [ ] Set up email service (Resend, Mailchimp, etc.)
  - [ ] Create welcome email
  - [ ] Create nurture sequence
  - [ ] Add signup form to site

### Content Marketing (Post-Launch)
- [ ] **Blog Setup**
  - [ ] Plan initial topics
  - [ ] Write 3-5 initial posts
  - [ ] Set up blog on site
  - [ ] RSS feed

- [ ] **Resources**
  - [ ] Downloadable guides
  - [ ] Worksheets
  - [ ] Checklists

### Local SEO
- [ ] **Local Citations**
  - [ ] Psychology Today profile
  - [ ] GoodTherapy profile
  - [ ] Yelp (if desired)
  - [ ] Other therapist directories
  - [ ] Consistent NAP (Name, Address, Phone)

- [ ] **Local Content**
  - [ ] San Diego-specific keywords
  - [ ] Neighborhood pages (optional)
  - [ ] Local landing pages

**Phase 5 Deadline**: ________________

---

## Phase 6: Go Live 🚀

### Pre-Launch
- [ ] **Final Walkthrough**
  - [ ] Review entire site one last time
  - [ ] Test all CTAs
  - [ ] Verify contact info everywhere
  - [ ] Check for typos
  - [ ] Test booking flow

- [ ] **Backup & Rollback Plan**
  - [ ] Note current Git commit
  - [ ] Document how to rollback
  - [ ] Have emergency contact ready

### Launch Day
- [ ] **Switch DNS** (if not already live)
  - [ ] Update DNS settings
  - [ ] Wait for propagation (24-48 hours)
  - [ ] Test from multiple locations

- [ ] **Monitor**
  - [ ] Watch analytics
  - [ ] Check for errors
  - [ ] Test bookings
  - [ ] Monitor server/hosting

- [ ] **Announce**
  - [ ] Email existing contacts (if any)
  - [ ] Social media posts
  - [ ] Google Business post
  - [ ] Update other profiles

### Post-Launch (First 24 Hours)
- [ ] **Verify Everything**
  - [ ] All pages loading
  - [ ] Analytics tracking
  - [ ] Booking system working
  - [ ] Forms working
  - [ ] No console errors

- [ ] **Monitor**
  - [ ] Check analytics every few hours
  - [ ] Watch for errors
  - [ ] Test booking flow multiple times
  - [ ] Check mobile experience

### Post-Launch (First Week)
- [ ] **Daily Checks**
  - [ ] Analytics review
  - [ ] Test booking
  - [ ] Check emails
  - [ ] Monitor phone/voicemail

- [ ] **Gather Feedback**
  - [ ] Ask friends to review
  - [ ] Note any issues
  - [ ] Track conversion rates
  - [ ] Monitor page performance

### Post-Launch (First Month)
- [ ] **Analytics Review**
  - [ ] Top pages
  - [ ] Traffic sources
  - [ ] Bounce rates
  - [ ] Conversion rates
  - [ ] User flow

- [ ] **Optimization**
  - [ ] Identify drop-off points
  - [ ] A/B test CTAs
  - [ ] Improve slow pages
  - [ ] Fix any issues

- [ ] **SEO Check**
  - [ ] Indexing status
  - [ ] Keyword rankings
  - [ ] Backlinks acquired
  - [ ] Search console errors

**Launch Date**: ________________

---

## Ongoing Maintenance

### Weekly
- [ ] Check analytics
- [ ] Monitor bookings
- [ ] Check for technical issues
- [ ] Respond to inquiries

### Monthly
- [ ] Review analytics in depth
- [ ] Update content as needed
- [ ] Add blog posts
- [ ] Check for broken links
- [ ] Monitor page speed
- [ ] Review search rankings

### Quarterly
- [ ] Comprehensive site audit
- [ ] Update photos
- [ ] Refresh testimonials
- [ ] Review and update pricing
- [ ] Check competitor sites
- [ ] SEO audit

### Annually
- [ ] Renew domain
- [ ] Review all content
- [ ] Major design refresh (if needed)
- [ ] Update credentials/training
- [ ] Review legal pages
- [ ] Professional photos update

---

## Emergency Contacts

**Technical Issues**:
- Developer: ________________
- Hosting Support: support@vercel.com
- Domain Registrar: ________________

**Content Issues**:
- Content Manager: ________________
- Copy Editor: ________________

**Legal Issues**:
- Attorney: ________________

---

## Notes & Issues Log

Use this section to track any issues discovered during launch prep:

**Date** | **Issue** | **Status** | **Resolution**
---------|-----------|------------|---------------
         |           |            |
         |           |            |

---

## Related Documents

- [[01-PAGE-INVENTORY]] - All pages
- [[02-CONTENT-AUDIT]] - Quality check
- [[CONTENT-UPDATE-WORKFLOW]] - Update process

---

**Launch Status**: 🔴 NOT READY
**Blocking Issues**: 5 critical
**Last Updated**: 2025-10-17
**Target Launch**: ________________
