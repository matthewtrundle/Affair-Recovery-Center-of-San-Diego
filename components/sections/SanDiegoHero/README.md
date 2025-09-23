# San Diego Hero Component

A high-end, WebGL-powered hero component inspired by San Diego's coastal beauty, featuring interactive 3D ocean scenes, dynamic scroll effects, and rotating text animations.

## Features

### 🌊 WebGL Ocean Scene
- Interactive 3D ocean shader with realistic water animations
- Responds to scroll with tide effects
- Performance-optimized with LOD and instancing
- Floating particles system for sea foam and mist

### 🎨 San Diego Visual Identity
- Authentic color palette inspired by:
  - La Jolla Cove turquoise waters
  - Sunset Cliffs golden hour
  - Del Mar beaches
  - Torrey Pines landscape
- Dynamic lighting that mimics San Diego's golden hour
- Time-of-day adaptive theming

### ✨ Interactive Effects
- Rotating text with morphing transitions
- Scroll-based parallax layers with different speeds
- Mouse-tracking subtle parallax
- 60fps performance optimizations
- Adaptive quality based on device performance

### 📱 Responsive Design
- Mobile-optimized WebGL rendering
- Adaptive particle counts
- Performance scaling for different devices
- Accessibility considerations

## Component Structure

```
components/sections/
├── SanDiegoHero.tsx              # Main hero component
├── shaders/
│   └── OceanShader.tsx           # WebGL ocean shader
├── effects/
│   ├── FloatingParticles.tsx     # Particle systems
│   ├── RotatingText.tsx          # Text animation effects
│   ├── ParallaxLayers.tsx        # Scroll-based parallax
│   └── PerformanceOptimizer.tsx  # Performance management
└── lib/
    └── san-diego-theme.ts        # Color palette & theming
```

## Usage

```tsx
import { SanDiegoHero } from '@/components/sections/SanDiegoHero'

export default function HomePage() {
  return (
    <div>
      <SanDiegoHero />
      {/* Rest of your page content */}
    </div>
  )
}
```

## Customization

### Theme Configuration
The component uses the San Diego theme system defined in `lib/san-diego-theme.ts`:

```typescript
// Customize colors
const customTheme = {
  ...sanDiegoTheme,
  colors: {
    ...sanDiegoTheme.colors,
    ocean: {
      ...sanDiegoTheme.colors.ocean,
      primary: '#your-custom-blue'
    }
  }
}
```

### Performance Tuning
Adjust performance settings based on your needs:

```tsx
<SanDiegoHero
  performanceLevel="medium" // high | medium | low
  particleCount={400}       // Reduce for better performance
  enableWebGL={true}        // Disable for fallback mode
/>
```

### Text Content
Customize the rotating words:

```tsx
const customWords = ['through', 'forward', 'to heal', 'to hope', 'back home']
```

## Technical Details

### Dependencies
- `@react-three/fiber` - React Three.js renderer
- `@react-three/drei` - Three.js helpers
- `three` - 3D graphics library
- `framer-motion` - Animation library
- `leva` - Debug controls (development)

### Performance Features
- Level of Detail (LOD) for different quality levels
- Adaptive particle systems
- Scroll-based visibility culling
- Memory management for long sessions
- Frame rate monitoring and quality adjustment

### Shaders
The ocean shader includes:
- Multi-layer wave generation with noise functions
- Scroll-responsive tide effects
- Foam generation near "shores"
- Golden hour lighting simulation
- Depth-based color gradients

### Accessibility
- Respects `prefers-reduced-motion`
- High contrast mode support
- Keyboard navigation friendly
- Screen reader compatible content structure

## Browser Support

- Chrome 80+ (full WebGL support)
- Firefox 75+ (full WebGL support)
- Safari 14+ (WebGL with some limitations)
- Edge 80+ (full WebGL support)

Graceful fallback to static design for unsupported browsers.

## Performance Metrics

- **Target FPS**: 60fps
- **Particle count**: 200-800 (adaptive)
- **Memory usage**: <50MB typical
- **Initial load**: ~2MB compressed assets

## Development

### Local Development
```bash
npm run dev
# Component available at http://localhost:3000
```

### Debug Mode
Enable debug controls in development:
```tsx
import { Leva } from 'leva'

// Add to your app during development
<Leva collapsed />
```

### Testing Performance
Monitor performance with built-in metrics:
```tsx
// Check current performance level
const [perfLevel, setPerfLevel] = useState('high')
// Component automatically adjusts quality
```

## Inspiration

This component draws inspiration from:
- **La Jolla Cove**: Crystal clear turquoise waters
- **Sunset Cliffs**: Dramatic golden hour lighting
- **Mission Beach**: Soft foam and gentle waves
- **Torrey Pines**: Natural sage and sandstone colors
- **Balboa Park**: Sophisticated, therapeutic ambiance

The design captures the essence of San Diego's healing coastal environment while maintaining the professional, therapeutic tone appropriate for couples therapy services.