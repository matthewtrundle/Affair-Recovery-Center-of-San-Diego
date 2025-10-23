# Brand Style Guide - Affair Recovery Center of San Diego

**Purpose**: Comprehensive brand guidelines for visual consistency across all pages and components.

**Source**: Master copy document + CLAUDE.md project instructions

---

## Color Palette

### Primary Colors

**Deep Teal** `#125959`
- **Use**: Primary color, H1 headings, primary CTAs
- **RGB**: rgb(18, 89, 89)
- **Purpose**: Trust, stability, professionalism

**Turquoise** `#2ABFB0`
- **Use**: Secondary color, accents, hover states
- **RGB**: rgb(42, 191, 176)
- **Purpose**: Hope, healing, renewal

### Accent Colors

**Lime** `#ADD94E`
- **Use**: Highlights, secondary CTAs, important callouts
- **RGB**: rgb(173, 217, 78)
- **Purpose**: Growth, vitality, forward movement

**Olive** `#9CBF4E`
- **Use**: Tertiary accents, depth, visual variety
- **RGB**: rgb(156, 191, 78)
- **Purpose**: Grounding, natural, calming

### Neutral Colors

**Light Gray** `#F2F2F2`
- **Use**: Backgrounds, sections, subtle tints
- **RGB**: rgb(242, 242, 242)
- **Purpose**: Clean, open, breathing room

---

## Typography

### Headings

**Primary Heading Font**: **Cormorant Garamond**
- Alternative: Playfair Display
- Use for: H1, H2, major section headers
- Characteristics: Elegant, professional, trustworthy
- Weight range: 400 (regular), 600 (semi-bold), 700 (bold)

### Body Text

**Primary Body Font**: **Inter**
- Alternative: Source Sans 3
- Use for: Body copy, paragraphs, descriptions
- Characteristics: Clean, highly readable, modern
- Weight range: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold)

### Typography Scale

```
H1: 48px / 3rem (Cormorant Garamond, weight 700, #125959)
H2: 36px / 2.25rem (Cormorant Garamond, weight 600, #125959)
H3: 28px / 1.75rem (Cormorant Garamond, weight 600, #125959)
H4: 24px / 1.5rem (Inter, weight 600, #125959)
H5: 20px / 1.25rem (Inter, weight 600, #125959)

Body Large: 18px / 1.125rem (Inter, weight 400)
Body Regular: 16px / 1rem (Inter, weight 400)
Body Small: 14px / 0.875rem (Inter, weight 400)

Button Text: 16px / 1rem (Inter, weight 600, uppercase)
```

### Line Heights
- Headings: 1.2 - 1.3
- Body text: 1.6 - 1.8
- Buttons/CTAs: 1.0

---

## Imagery Guidelines

### Photography Style

**Subject Matter**:
- Diverse couples, ages 30–45
- Authentic, genuine expressions
- Grounded, sincere tone
- Avoid stock photo clichés

**Mood**:
- Hopeful but realistic
- Warm without being overly cheerful
- Professional yet approachable
- Calm, not chaotic

**Technical Specifications**:
- High resolution (minimum 1920px width for hero images)
- Natural lighting preferred
- Slightly desaturated to match brand palette
- Occasional abstract imagery: neural networks, repair metaphors

### Abstract Imagery

**When to Use**:
- Section backgrounds (subtle)
- Hero overlays
- Decorative elements

**Style**:
- Minimal, not distracting
- Muted colors from brand palette
- Repair/healing/connection motifs
- Neural/brain science imagery (subtle)

### Image Optimization

- Next.js Image component for all images
- WebP format with PNG/JPG fallback
- Responsive sizes for mobile/tablet/desktop
- Lazy loading except above-the-fold
- Alt text: specific, descriptive, action-oriented

---

## Motion & Animation

### Philosophy
**Minimal Motion** - Honor `prefers-reduced-motion` accessibility setting

### Allowed Animations

**Micro-interactions**:
- Button hover states (0.2s ease transition)
- Card lift on hover (subtle shadow, 0.3s)
- Link underlines (0.2s ease)

**Page Transitions**:
- Fade in on scroll (0.4s, once per element)
- Stagger children animations (50ms delay)

**Loading States**:
- Skeleton screens (pulse animation)
- Spinner for async actions

### Forbidden Animations
- ❌ Auto-playing videos
- ❌ Carousels that auto-advance
- ❌ Parallax scrolling (can cause motion sickness)
- ❌ Heavy particle effects
- ❌ Continuous/looping animations

---

## Component Styling

### Buttons / CTAs

**Primary Button**:
```css
Background: #125959 (Deep Teal)
Text: #FFFFFF (White)
Font: Inter, 16px, weight 600, uppercase
Padding: 14px 28px
Border-radius: 4px
Transition: background 0.2s ease

Hover:
Background: #2ABFB0 (Turquoise)
```

**Secondary Button**:
```css
Background: transparent
Border: 2px solid #125959
Text: #125959
Font: Inter, 16px, weight 600
Padding: 14px 28px
Border-radius: 4px

Hover:
Background: #125959
Text: #FFFFFF
```

**Accent Button** (Limited Use):
```css
Background: #ADD94E (Lime)
Text: #125959 (Deep Teal)
Font: Inter, 16px, weight 600, uppercase
Padding: 14px 28px
Border-radius: 4px

Hover:
Background: #9CBF4E (Olive)
```

### Cards

```css
Background: #FFFFFF
Border: 1px solid #E5E5E5
Border-radius: 8px
Padding: 24px
Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05)

Hover (if interactive):
Box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1)
Transform: translateY(-2px)
Transition: all 0.3s ease
```

### Forms

**Input Fields**:
```css
Border: 1px solid #D1D5DB
Border-radius: 4px
Padding: 12px 16px
Font: Inter, 16px
Color: #1F2937

Focus:
Border-color: #125959
Outline: none
Box-shadow: 0 0 0 3px rgba(18, 89, 89, 0.1)
```

**Labels**:
```css
Font: Inter, 14px, weight 500
Color: #374151
Margin-bottom: 6px
```

---

## Spacing System

**Base unit**: 4px

```
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 16px (1rem)
lg: 24px (1.5rem)
xl: 32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
4xl: 96px (6rem)
```

### Section Spacing
- Between major sections: 64px - 96px (desktop), 48px (mobile)
- Between subsections: 32px - 48px
- Between paragraphs: 16px - 24px

---

## Accessibility Requirements

### Color Contrast
- ✅ AA Compliance minimum
- AAA preferred for body text
- Deep Teal (#125959) on white background: **7.1:1** (AAA)
- Turquoise (#2ABFB0) on white background: **2.8:1** (fails AA - use only for decorative)
- Lime (#ADD94E) on Deep Teal: Check before using

### Focus States
- All interactive elements MUST have visible focus indicator
- Focus ring: 2px solid #2ABFB0, offset 2px

### Keyboard Navigation
- All features accessible via keyboard
- Tab order logical and intuitive
- Skip links for screen readers

---

## Responsive Design Breakpoints

```css
mobile: < 640px
tablet: 640px - 1024px
desktop: 1024px+
wide: 1440px+
```

### Typography Adjustments
- H1: 36px (mobile) → 48px (desktop)
- Body: 16px (all breakpoints, may increase to 18px for wide)

### Spacing Adjustments
- Section padding: 48px (mobile) → 96px (desktop)
- Container max-width: 100% (mobile) → 1280px (desktop)

---

## Voice & Tone Guidelines

### Voice Characteristics
- **Direct** - Clear, straightforward, no jargon
- **Compassionate** - Empathetic without being patronizing
- **Professional** - Credible, experienced, trustworthy
- **Hopeful** - Realistic optimism, grounded in evidence

### Writing Style
- Active voice preferred
- Short sentences and paragraphs
- Subheadings for scannability
- "You" language (second person)
- Avoid therapy jargon - explain concepts plainly

### Specific Word Choices
- ✅ "Affair recovery" not "infidelity treatment"
- ✅ "Rebuild trust" not "restore relationship"
- ✅ "Partner who strayed" not "cheater" or "unfaithful spouse"
- ✅ "Hurt partner" not "betrayed spouse" or "victim"

---

## Do's and Don'ts

### Visual Design

✅ **DO**:
- Use brand colors consistently
- Maintain generous white space
- Ensure sufficient color contrast
- Use high-quality, authentic imagery
- Keep animations subtle and purposeful
- Test on multiple devices and browsers

❌ **DON'T**:
- Use off-brand colors without approval
- Overcrowd layouts
- Use low-quality stock photos
- Add decorative motion
- Use complex backgrounds that reduce readability
- Ignore accessibility guidelines

### Content

✅ **DO**:
- Write in plain English
- Use specific examples
- Break up long text with headings
- Include clear CTAs
- Validate user emotions
- Explain therapeutic approaches simply

❌ **DON'T**:
- Use therapy jargon
- Make unrealistic promises
- Shame or judge either partner
- Use stigmatizing language
- Overpromise outcomes
- Sound clinical or cold

---

## Brand Consistency Checklist

Before publishing any page, verify:
- [ ] Colors match exact hex codes
- [ ] Typography uses approved fonts and sizes
- [ ] Imagery follows style guidelines
- [ ] Animations honor prefers-reduced-motion
- [ ] Contrast meets AA (preferably AAA) standards
- [ ] Spacing follows the spacing system
- [ ] Voice and tone align with guidelines
- [ ] All CTAs are clear and functional
- [ ] Mobile responsive design works well
- [ ] Focus states visible for all interactive elements

---

*Last Updated: 2025-10-23*
*Next Review: After first visual testing*
