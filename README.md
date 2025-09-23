# Affair Recovery Center of San Diego

A modern, performant Next.js 14 website for a couples therapy practice specializing in affair recovery and rebuilding trust.

## Project Overview

This is a complete marketing website built with:
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Scheduling**: Calendly integration (no web forms)
- **Email**: Resend for transactional emails
- **Analytics**: Google Analytics 4 + Plausible
- **SEO**: Full metadata, sitemap, structured data

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example file and configure with your actual values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with:
- Your Calendly embed URL
- Resend API key (if using email features)
- Analytics IDs
- Site URL

### 3. Generate Images

If you have the image generation tool configured:

```bash
npm run generate-og-images
```

Otherwise, placeholder SVG images will be created automatically.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Marketing pages with shared layout
│   │   ├── page.tsx       # Home page
│   │   ├── contact/       # Contact page (mailto/tel links)
│   │   ├── schedule/      # Calendly scheduling page
│   │   ├── faq/          # Frequently asked questions
│   │   └── services/      # Service pages
│   └── api/
│       └── calendly/      # Webhook for Calendly events
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections (Hero, etc.)
│   └── layout/           # Header, Footer
├── lib/                  # Utility functions
│   ├── calendly.ts       # Calendly helpers
│   ├── resend.ts         # Email functions
│   ├── analytics.ts      # Event tracking
│   └── seo.ts           # SEO utilities
└── public/              # Static assets
    ├── images/          # Site images
    └── og/              # Open Graph images
```

## Key Features

### ✅ No Web Forms
All contact and scheduling is handled through:
- Calendly embedded scheduling
- Direct mailto/tel links
- Automated email responses via webhook

### ✅ Calendly Integration
- Inline embed on /schedule page
- Webhook endpoint for event tracking
- Automatic confirmation emails
- Optional audience list building (with consent)

### ✅ SEO Optimized
- Dynamic metadata for all pages
- XML sitemap generation
- Structured data (LocalBusiness, FAQ, etc.)
- Open Graph images for social sharing

### ✅ Analytics
- Google Analytics 4 integration
- Plausible Analytics (lightweight alternative)
- Custom event tracking for CTAs
- Calendly scheduling tracking

### ✅ Performance
- Static generation for marketing pages
- Image optimization with Next/Image
- Font optimization
- Lazy loading
- Respects prefers-reduced-motion

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub repository
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables Required

```
NEXT_PUBLIC_SITE_URL=https://affairrecoverysandiego.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=affairrecoverysandiego.com

RESEND_API_KEY=re_xxxxxxxxxx
RESEND_AUDIENCE_ID=aud_xxxxxxxxxx (optional)

CALENDLY_EMBED_URL=https://calendly.com/zipkin/15min
CALENDLY_WEBHOOK_SECRET=your_secret_here

IMAGE_TOOL_PATH=/path/to/image-generator (optional)
OPENROUTER_API_KEY=sk-or-xxxxxxxxxx (optional)
```

## Calendly Webhook Setup

1. In Calendly, go to Integrations → Webhooks
2. Add webhook URL: `https://yourdomain.com/api/calendly/webhook`
3. Select events: "invitee.created" and "invitee.canceled"
4. Copy the signing key to `CALENDLY_WEBHOOK_SECRET`

## Customization

### Update Content
- Edit page content in `app/(marketing)/` directory
- Modify testimonials in `components/sections/TestimonialCarousel.tsx`
- Update FAQ questions in `app/(marketing)/faq/page.tsx`

### Update Styling
- Colors defined in `tailwind.config.ts`
- Global styles in `styles/globals.css`
- Component styles use Tailwind classes

### Add Pages
1. Create new file in `app/(marketing)/` directory
2. Add to navigation in `components/layout/Header.tsx`
3. Add to sitemap in `app/sitemap.ts`

## Production Checklist

- [ ] Configure all environment variables
- [ ] Update site URL in .env.local
- [ ] Set up Calendly webhook
- [ ] Configure Resend API (if using email)
- [ ] Add Google Analytics ID
- [ ] Update contact information
- [ ] Generate production OG images
- [ ] Test all CTAs and tracking
- [ ] Verify mobile responsiveness
- [ ] Check accessibility (keyboard nav, ARIA labels)
- [ ] Update legal pages (privacy, terms, HIPAA)

## Support

For issues or questions about the codebase, refer to the inline documentation or the component files directly.

## License

Private - All rights reserved