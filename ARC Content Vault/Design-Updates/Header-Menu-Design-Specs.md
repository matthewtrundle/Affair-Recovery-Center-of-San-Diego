# Header & Menu Design Specifications

**Date**: 2025-10-23
**Archon Task ID**: `b3f7da53-c95c-41c9-9128-6f71460d07ab`
**Component**: `components/layout/Header.tsx`

---

## Design Requirements (from client screenshot)

### Menu Background
- **Color**: `#ffffffde` (white with slight transparency)
- **Current**: `bg-white/95`
- **Action**: Update to exact hex value

### Logo Styling
- **Size**: Reduce to 80% of current size
- **Padding**: 10px top and bottom
- **Drop Shadow**: `filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.5))`
- **Current**: `text-xl lg:text-2xl` with no padding/shadow
- **Action**: Apply size reduction, padding, and drop-shadow filter

### Menu Link Styling
- **Color**: `#115659` (Deep Teal variant)
- **Font Size**: `1rem`
- **Spacing**: More padding between menu items
- **Current**: `text-sm` with `space-x-1` and `px-3 py-2`
- **Action**: Update to `text-base` (1rem), increase horizontal spacing

### Button Text Styling
- **Font Weight**: `700` (bold)
- **Text Shadow**: `0px 1px 5px black`
- **Current**: Default button styling
- **Action**: Add custom CSS classes for CTAs

---

## Current vs Required

| Element | Current | Required | Status |
|---------|---------|----------|--------|
| Menu BG | `bg-white/95` | `#ffffffde` | ❌ Update needed |
| Logo Size | `text-xl lg:text-2xl` | 80% of current | ❌ Reduce size |
| Logo Padding | None | 10px top/bottom | ❌ Add padding |
| Logo Shadow | None | `drop-shadow(0px 1px 0px rgba(0,0,0,0.5))` | ❌ Add filter |
| Link Color | `text-slate` | `#115659` | ❌ Update color |
| Link Font Size | `text-sm` | `1rem` | ❌ Increase |
| Link Spacing | `space-x-1` `px-3` | More padding | ❌ Increase |
| Button Font Weight | Default | `700` | ❌ Add weight |
| Button Text Shadow | None | `0px 1px 5px black` | ❌ Add shadow |

---

## Implementation Plan

### 1. Update Menu Background
```tsx
// Change from:
scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'

// To:
scrolled ? 'shadow-md backdrop-blur-md' : ''
// Add inline style or Tailwind config for #ffffffde
style={{ backgroundColor: '#ffffffde' }}
```

### 2. Update Logo Styling
```tsx
<Link href="/" className="flex items-center">
  <span
    className="text-lg lg:text-xl font-heading font-semibold text-navy py-2.5"
    style={{ filter: 'drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.5))' }}
  >
    ARC San Diego
  </span>
</Link>
```

### 3. Update Menu Links
```tsx
// Navigation container - increase spacing
<nav className="hidden lg:flex items-center space-x-3"> {/* was space-x-1 */}

// Individual links
className={cn(
  'px-4 py-2 text-base font-medium rounded-md transition-colors', // was text-sm px-3
  pathname === item.href
    ? 'bg-deepTeal-600/10 text-[#115659]' // use exact color
    : 'text-[#115659] hover:bg-deepTeal-600/5'
)}
```

### 4. Update Button Styling
```tsx
<Button
  size="sm"
  className="font-bold"
  style={{ textShadow: '0px 1px 5px black' }}
  asChild
  onClick={handleScheduleClick}
>
```

---

## Tailwind Config Updates

May need to add custom color to `tailwind.config.ts`:

```typescript
colors: {
  menuLink: '#115659',
  menuBg: '#ffffffde',
}
```

---

## Implementation Complete

### Changes Made

**File**: `components/layout/Header.tsx`

1. ✅ **Menu Background**: Updated to `#ffffffde` with inline style
2. ✅ **Logo Size**: Reduced from `text-xl lg:text-2xl` to `text-lg lg:text-xl` (80%)
3. ✅ **Logo Padding**: Added `py-2.5` (10px top/bottom)
4. ✅ **Logo Shadow**: Added `filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.5))`
5. ✅ **Link Color**: Updated to `text-[#115659]` with matching hover states
6. ✅ **Link Font Size**: Changed from `text-sm` to `text-base` (1rem)
7. ✅ **Link Spacing**: Increased from `space-x-1` to `space-x-3` and `px-3` to `px-4`
8. ✅ **Button Font Weight**: Added `font-bold` class
9. ✅ **Button Text Shadow**: Added inline style `textShadow: '0px 1px 5px black'`
10. ✅ **Mobile Menu**: Applied same styling updates for consistency

---

## Testing Checklist

- [x] Menu background shows correct transparency (#ffffffde)
- [x] Logo is visibly smaller (80% of original)
- [x] Logo has 10px padding top/bottom
- [x] Logo has subtle drop shadow
- [x] Menu links are color #115659
- [x] Menu links are 1rem font size
- [x] Menu items have more spacing (space-x-3, px-4)
- [x] Button text is bold (font-weight 700)
- [x] Button text has black shadow
- [ ] Visual verification on desktop viewport (requires dev server check)
- [ ] Visual verification on mobile viewport
- [ ] Test scrolled vs non-scrolled states

---

## Related Files

- `components/layout/Header.tsx` - ✅ **UPDATED** - Main header component
- `tailwind.config.ts` - No changes needed (using inline styles for exact colors)
- `components/ui/button.tsx` - No changes needed (using className overrides)

---

**Status**: #review - Implementation complete, awaiting visual verification
**Date Completed**: 2025-10-23
**Archon Task**: `b3f7da53-c95c-41c9-9128-6f71460d07ab`
