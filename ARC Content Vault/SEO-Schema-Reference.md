# SEO & Schema Reference - Affair Recovery Center of San Diego

**Purpose**: Comprehensive reference for SEO metadata and JSON-LD structured data patterns across all pages.

**Source**: Master copy document SEO requirements

---

## Global SEO Settings

### Site-Wide Metadata

**Site Name**: `Affair Recovery of San Diego`

**Primary Domain**: `YOUR-DOMAIN.com` ⚠️ *Update before launch*

**Default OG Image**: `/assets/og-home.jpg`

**Twitter Card Type**: `summary_large_image`

---

## SEO Metadata Patterns

### Title Tag Format

```html
<title>[Page-Specific Title] | [Optional Qualifier]</title>
```

**Guidelines**:
- Maximum length: 60 characters
- Include primary keyword
- Front-load important terms
- Include location ("San Diego") when relevant
- Brand name optional (saves characters)

**Examples**:
- Homepage: `Affair Recovery San Diego | Couples Therapy & Infidelity Counseling`
- Services: `Affair Recovery Counseling Services | San Diego & Virtual`
- About: `Affair Recovery Therapist San Diego | Jordan Zipkin, LMFT`

### Meta Description Format

```html
<meta name="description" content="[Compelling 155-character summary with keywords and value proposition]" />
```

**Guidelines**:
- Maximum length: 155 characters
- Include primary keyword naturally
- Mention service area (San Diego, Los Angeles, California)
- Include value proposition or benefit
- End with call-to-action when possible

**Examples**:
- Homepage: `Affair recovery therapy in San Diego. Rebuild trust, heal after infidelity, and reconnect. In-person San Diego; virtual sessions for Los Angeles and all of California.`
- Services: `Four-pillar framework: calm emotions, rebuild trust, restore friendship, renew intimacy. In-person San Diego; virtual sessions for Los Angeles and California.`

### Canonical URL

```html
<link rel="canonical" href="https://YOUR-DOMAIN.com/[page-path]" />
```

**Rules**:
- Always include on every page
- Use absolute URLs (not relative)
- Match the actual URL of the page
- Use trailing slash consistently (or consistently omit)

---

## Open Graph (OG) Tags

### Required OG Tags (All Pages)

```html
<meta property="og:title" content="[Page Title - Can differ from <title>]" />
<meta property="og:description" content="[Concise description for social sharing]" />
<meta property="og:type" content="[website|article|profile|service]" />
<meta property="og:url" content="https://YOUR-DOMAIN.com/[page-path]" />
<meta property="og:image" content="https://YOUR-DOMAIN.com/assets/og-[page].jpg" />
```

### OG Type Guidelines

- **Homepage**: `website`
- **About Jordan**: `profile`
- **Services**: `service`
- **Blog Posts**: `article`
- **Info Pages** (FAQ, Hurt Partner, etc.): `article`

### OG Image Requirements

- **Dimensions**: 1200x630px (1.91:1 aspect ratio)
- **Format**: JPG or PNG
- **Max file size**: 8MB (aim for < 1MB)
- **Text overlay**: Keep minimal, must be readable at small sizes
- **Location**: `/public/assets/og-[page-name].jpg`

**Required Images**:
- `og-home.jpg` - Homepage
- `og-hurt-partner.jpg` - For the Hurt Partner
- `og-strayed.jpg` - For the Partner Who Strayed
- `og-trust.jpg` - Rebuilding Trust & Friendship
- `og-services.jpg` - Services
- `og-jordan.jpg` - About Jordan
- `og-reviews.jpg` - Reviews
- `og-faq.jpg` - FAQ
- `og-book.jpg` - Book a Session

---

## Twitter Card Tags

### Required Twitter Tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Page Title]" />
<meta name="twitter:description" content="[Concise description]" />
<meta name="twitter:image" content="https://YOUR-DOMAIN.com/assets/og-[page].jpg" />
```

**Note**: Can reuse OG images for Twitter

---

## JSON-LD Structured Data

### Organization Schema (Homepage Only)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "name": "Affair Recovery of San Diego",
      "image": "https://YOUR-DOMAIN.com/assets/og-home.jpg",
      "url": "https://YOUR-DOMAIN.com/",
      "telephone": "+1-XXX-XXX-XXXX",
      "areaServed": [
        {"@type": "City", "name": "San Diego"},
        {"@type": "City", "name": "Los Angeles"},
        {"@type": "State", "name": "California"}
      ],
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Example St",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "postalCode": "92101",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.7157,
        "longitude": -117.1611
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "name": "Affair Recovery of San Diego",
      "url": "https://YOUR-DOMAIN.com/"
    }
  ]
}
```

⚠️ **Update before launch**: telephone, address, geo coordinates, sameAs (social media URLs)

### Person Schema (About Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jordan Zipkin, LMFT",
  "jobTitle": "Licensed Marriage and Family Therapist",
  "worksFor": {
    "@type": "LocalBusiness",
    "name": "Affair Recovery of San Diego",
    "url": "https://YOUR-DOMAIN.com/"
  },
  "url": "https://YOUR-DOMAIN.com/about-jordan",
  "image": "https://YOUR-DOMAIN.com/assets/og-jordan.jpg"
}
```

### Service Schema (Services Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Affair Recovery Counseling",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Affair Recovery of San Diego",
    "url": "https://YOUR-DOMAIN.com/"
  },
  "areaServed": [
    {"@type": "City", "name": "San Diego"},
    {"@type": "City", "name": "Los Angeles"},
    {"@type": "State", "name": "California"}
  ],
  "serviceType": "Couples Counseling for Infidelity",
  "url": "https://YOUR-DOMAIN.com/services",
  "description": "A four-pillar framework to help couples and individuals recover after infidelity."
}
```

### FAQPage Schema

Used on: Homepage, FAQ page, For Hurt Partner, For Partner Who Strayed, Rebuilding Trust & Friendship

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text]"
      }
    }
    // ... additional questions
  ]
}
```

**Guidelines**:
- Include 3-8 questions per page
- Questions must actually appear on the page
- Answer text should be concise but complete
- Use plain text (no HTML in JSON-LD)

### WebPage + ScheduleAction Schema (Book a Session)

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Book Affair Recovery Therapy",
  "url": "https://YOUR-DOMAIN.com/book-a-session",
  "potentialAction": {
    "@type": "ScheduleAction",
    "target": "https://YOUR-BOOKING-LINK.com/",
    "name": "Book a Session"
  }
}
```

⚠️ **Update**: Replace `YOUR-BOOKING-LINK.com` with actual Calendly URL

---

## Primary Keywords by Page

### Homepage
- Primary: `affair recovery San Diego`
- Secondary: `infidelity therapist San Diego`, `couples therapy infidelity`
- Long-tail: `rebuild trust after affair San Diego`, `affair recovery counseling`

### For the Hurt Partner
- Primary: `healing after infidelity`
- Secondary: `support for betrayed spouse`, `hurt partner therapy`
- Long-tail: `therapy for spouse betrayed by affair San Diego`

### For the Partner Who Strayed
- Primary: `therapy for cheating spouses`
- Secondary: `infidelity accountability therapy`, `how to rebuild trust after cheating`
- Long-tail: `therapy after I cheated San Diego`

### Rebuilding Trust & Friendship
- Primary: `how to rebuild trust after an affair`
- Secondary: `rebuilding friendship after infidelity`, `trust building therapy`
- Long-tail: `steps to rebuild trust after cheating`

### Services
- Primary: `affair recovery counseling San Diego`
- Secondary: `infidelity therapy services`, `couples counseling betrayal`
- Long-tail: `4 pillar affair recovery framework`

### About Jordan
- Primary: `affair recovery therapist San Diego`
- Secondary: `Jordan Zipkin LMFT`, `Gottman therapist San Diego`
- Long-tail: `male therapist affair recovery San Diego`

### FAQ
- Primary: `infidelity recovery therapy FAQ`
- Secondary: `affair therapy questions`, `how long does affair recovery take`

### Book a Session
- Primary: `book affair recovery therapy`
- Secondary: `schedule infidelity counseling`, `affair therapy consultation`

---

## Internal Linking Strategy

### Hub Pages (Link TO These Often)
1. Homepage - `/`
2. Services - `/services`
3. About Jordan - `/about-jordan`
4. Book a Session - `/book-a-session`

### Supporting Pages (Link FROM These)
- For the Hurt Partner → Services, Book a Session, FAQ
- For the Partner Who Strayed → Services, Book a Session, Rebuilding Trust
- Rebuilding Trust & Friendship → Services, For Hurt Partner, For Partner Who Strayed
- FAQ → All relevant pages based on topic

### Anchor Text Best Practices
- Use descriptive, keyword-rich anchor text
- Avoid generic "click here" or "learn more"
- Match anchor text to destination page title/topic
- Natural language, not over-optimized

**Examples**:
- ✅ "explore our four-pillar affair recovery framework"
- ✅ "support for the hurt partner"
- ✅ "schedule a consultation"
- ❌ "click here"
- ❌ "learn more"

---

## Sitemap.xml Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://YOUR-DOMAIN.com/</loc>
    <lastmod>[ISO Date]</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://YOUR-DOMAIN.com/for-the-hurt-partner</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... additional pages -->
</urlset>
```

**Priority Guidelines**:
- Homepage: 1.0
- Main service pages: 0.8-0.9
- Supporting pages: 0.6-0.7
- Blog posts: 0.5
- Legal/privacy pages: 0.3

---

## Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
```

**Pages to potentially disallow**:
- `/api/` (if not needed for indexing)
- `/admin/` (if applicable)
- `/_next/` (Next.js internal)

---

## SEO Compliance Checklist

Before launching each page:
- [ ] Title tag ≤ 60 characters, includes primary keyword
- [ ] Meta description ≤ 155 characters, compelling + keyword
- [ ] Canonical URL present and correct
- [ ] OG tags complete (title, description, type, url, image)
- [ ] Twitter card tags complete
- [ ] JSON-LD schema appropriate for page type
- [ ] H1 tag present and unique (one per page)
- [ ] H2-H6 hierarchy logical
- [ ] Alt text on all images
- [ ] Internal links to relevant pages
- [ ] Mobile-friendly (responsive design)
- [ ] Page speed optimized (< 3s load time)
- [ ] HTTPS (SSL certificate)
- [ ] No broken links
- [ ] Sitemap.xml includes page
- [ ] Robots.txt allows crawling

---

## Validation Tools

**Schema Validation**:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

**SEO Validation**:
- Google Search Console
- Screaming Frog SEO Spider
- Ahrefs Site Audit
- SEMrush Site Audit

**Meta Tag Preview**:
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

*Last Updated: 2025-10-23*
*Next Review: Before launch*
