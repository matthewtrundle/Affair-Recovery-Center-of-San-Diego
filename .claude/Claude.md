claude.md (fresh build)

Project: Affair Recovery Center of San Diego — static marketing site & blog (Next.js) Client: Jordan Zipkin, LMFT — couples therapy focused on affair/betrayal recovery (Gottman + RLT) Primary CTA: Schedule a consult (Calendly) Constraints: No web forms; Resend for outbound email + contact list; Local image generator tool at ~/Documents/image-generator-tool using OpenRouter API Launch target: End of October • Budget: $2k–$3.5k (optimize for velocity + polish)

0) Technical stack (no-forms variant)

Framework: Next.js 14 (App Router)

Styling: Tailwind CSS + shadcn/ui; lucide-react; Framer Motion (subtle)

Content: MDX for blog (Contentlayer optional)

Scheduling: Calendly inline embed + webhook to track scheduled events

Email & List: Resend (transactional + audiences) — used without on‑site forms; mailto links and server‑side automations only

Analytics: GA4 + Plausible (lightweight)

Images: Local generator tool at ~/Documents/image-generator-tool via OPENROUTER_API_KEY; Next/Image; @next/og for social

SEO: Next metadata API; sitemap.xml; robots.txt; JSON‑LD

Accessibility: AA contrast; keyboard nav; prefers‑reduced‑motion

Deploy: Vercel; preview deploys on PRs

1) Repo structure
/ (root)
  ├─ app/
  │   ├─ (marketing)/
  │   │   ├─ page.tsx                 # Home
  │   │   ├─ about/page.tsx
  │   │   ├─ services/betrayal-recovery/page.tsx
  │   │   ├─ approach/page.tsx
  │   │   ├─ testimonials/page.tsx
  │   │   ├─ faq/page.tsx
  │   │   ├─ contact/page.tsx         # No form: mailto + tel + Calendly
  │   │   ├─ schedule/page.tsx        # Calendly embed + expectations
  │   │   └─ blog/(index + [slug])
  │   ├─ api/
  │   │   └─ calendly/webhook/route.ts  # Receives event_scheduled → analytics + (optional) audience add
  │   └─ sitemap.ts / robots.ts
  ├─ scripts/
  │   ├─ image-gen.ts                 # Batch OG + section art via local tool
  │   └─ audience-sync.ts             # Optional: server-side syncs (no UI)
  ├─ content/
  │   └─ blog/                        # MDX posts
  ├─ components/
  │   ├─ ui/*  sections/*  layout/*  cards/*
  ├─ lib/
  │   ├─ seo.ts
  │   ├─ analytics.ts
  │   ├─ calendly.ts
  │   ├─ image-tool.ts                # child_process wrapper
  │   └─ resend.ts                    # Resend helpers (send, addToAudience)
  ├─ public/images/brand/*  public/og/*
  ├─ styles/globals.css
  ├─ tailwind.config.ts
  ├─ components.json
  ├─ eslint.config.js  prettier
  └─ .env.local.example
.env.local.example
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=example.com


RESEND_API_KEY=
RESEND_AUDIENCE_ID=               # optional (if using audiences)
MAIL_FROM="Affair Recovery Center <hello@example.com>"


CALENDLY_EMBED_URL=https://calendly.com/zipkin/15min
CALENDLY_WEBHOOK_SECRET=


OPENROUTER_API_KEY=
IMAGE_TOOL_PATH=/Users/mattrundle/Documents/image-generator-tool
2) Visual direction (brand palette)

Palette: Deep Teal #125959 (primary/H1/CTAs) • Turquoise #2ABFB0 (secondary/accents) • Lime #ADD94E (highlights/CTAs) • Olive #9CBF4E (accents/depth) • Light Gray #F2F2F2 (backgrounds/subtle tints)

Type: Headings — Cormorant Garamond or Playfair; Body — Inter or Source Sans 3

Imagery: Diverse couples 30–45; grounded, sincere; occasional abstract neural/repair motifs

Motion: Minimal; honors reduced‑motion

3) Page skeletons (no-forms copy stubs)
Home

Hero: "There is a way through." • Sub: "Evidence‑based help to heal from betrayal and rebuild trust." • CTA: Schedule a consult (primary) • Secondary: "How I work"

Problem → Promise: Normalize shock, grief, hypervigilance; Jordan’s approach = Gottman + RLT + brain‑based education

Process (3 steps): Stabilize → Structure → Rebuild

Credibility: 15 years; Gottman/RLT; outcomes; professional affiliations

FAQ teaser + CTA

Services (Betrayal/Infidelity Recovery)

Who it’s for; what sessions look like; arc (typ. 12–20 sessions); homework; individual work when useful; CTA → Schedule

Approach (Gottman + RLT)

Plain English outlines; skill‑building; direct yet compassionate style

Schedule

Calendly embed; what to expect; cancellation window; preparation tips

Contact (no forms)

Buttons: Email (mailto:), Call (tel:), Schedule (Calendly). Service region (San Diego + telehealth availability)

Blog

Educational posts targeting intent (see SEO plan)

FAQ

Common concerns ("Can we recover?" "What if only one of us is ready?" "How long?" "Insurance?")

4) Component checklist

Sticky Header + MobileNav + Footer (with mailto/tel/Calendly)

Hero, Process, Method Cards (Gottman/RLT/Brain), CTA band

Testimonial carousel (v2), Blog list (MDX)

ContactCard (mailto/tel only)

5) Image pipeline (local tool)

Use scripts/image-gen.ts to batch create:

public/og/home.png, services.png, approach.png, schedule.png, blog.png

4–6 section backgrounds as subtle abstracts

Filename convention: hero-<page>.png, section-<name>.png

Alt text: specific, action‑oriented, avoids clichés

CLI template:

$IMAGE_TOOL_PATH --prompt "calm, modern abstract evoking trust and repair, muted navy/sage palette, high-resolution, minimal" --out ./public/og/services.png
6) SEO & Schema

Primary keywords: "affair recovery San Diego", "infidelity therapist San Diego", "betrayal trauma couples therapy", "Gottman therapist San Diego", "Relational Life Therapy San Diego"

On‑page: Unique H1; titles ≤60; desc ≤155; internal links Blog → Services/Schedule

Schema: Organization, LocalBusiness (Therapist), FAQPage, Article, BreadcrumbList

OG images: Generated via local tool; text overlays with page titles as needed

7) Analytics & events

cta_click { label: "schedule_consult", page }

mailto_click { label: "email_click", page }

tel_click { label: "phone_click", page }

calendly_scheduled via webhook + inline JS SDK

8) Calendly → Resend audience (optional, still no forms)

Flow: When a consult is scheduled, Calendly webhook posts to /api/calendly/webhook → server verifies signature →

Record analytics event

(Optional) Add attendee email to Resend Audience RESEND_AUDIENCE_ID if consent is collected on Calendly booking question (checkbox). No on‑site form needed.

Consent: Add a required checkbox to Calendly (“I agree to receive helpful resources and updates…”) → store answer → only then call addToAudience()

9) Legal & consent (plain-English)

No PHI stored; site is informational + scheduling only

Email marketing requires explicit consent; include unsubscribe in all Resend messages

HIPAA notice/Privacy/Terms pages; cookie notice if required

10) QA & launch checklist




11) Quick start (local)
pnpm dlx create-next-app@latest arc-sd --ts --eslint --tailwind --app --src-dir=false --import-alias "@/*"
cd arc-sd
pnpm add framer-motion lucide-react contentlayer next-contentlayer class-variance-authority tailwind-merge
pnpm add -D @types/node @types/react @types/react-dom ts-node
# (optionally) shadcn
npx shadcn@latest init && npx shadcn@latest add button card input textarea dialog accordion badge

Add files:

lib/image-tool.ts — child_process wrapper to run local generator

scripts/image-gen.ts — iterates prompts → outputs to /public/og

lib/resend.ts — sendMail(opts), addToAudience(email, fields)

app/api/calendly/webhook/route.ts — verify signature, handle event