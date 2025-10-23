# Logo PNG Replacement

**Date**: 2025-10-23
**Archon Task ID**: `411e7908-944d-45a0-8912-42ea6ba728e5`
**Component**: `components/layout/PremiumHeader.tsx`

---

## Change Summary

Replaced SVG logo with PNG logo to avoid font rendering issues.

### File Updated
- `components/layout/PremiumHeader.tsx` (line 80)

### Change Made
```tsx
// OLD (SVG):
<Image
  src="/images/logo/affair recovery center logo.svg"
  width={320}
  height={96}
  ...
/>

// NEW (PNG):
<Image
  src="/images/logo/affair-recovery-center-logo.png"
  width={1042}
  height={344}
  ...
/>
```

### Client Action Required

**Save the PNG logo to:**
```
/Users/matthewrundle/Documents/ARC/public/images/logo/affair-recovery-center-logo.png
```

The client provided the PNG logo image and needs to save it to this location for the site to display it correctly.

---

## Why PNG Instead of SVG?

- PNG logo has fonts already rendered (no font loading issues)
- Consistent appearance across all browsers
- No dependency on web font loading
- Simpler implementation

---

**Status**: Code updated, awaiting PNG file from client
**Next Step**: Client saves PNG logo to specified path
