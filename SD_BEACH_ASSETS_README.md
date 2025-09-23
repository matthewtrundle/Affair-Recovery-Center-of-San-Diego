# San Diego Beach Assets Generator

This collection of scripts generates authentic San Diego beach imagery, textures, and color palettes specifically for the Affair Recovery Center website. All locations are recognizable to San Diego locals and create an authentic sense of place.

## Scripts Overview

### 🏖️ `generate_sd_beach_assets.py` - Complete Asset Generation
Generates the full collection of San Diego beach assets including hero images, textures, WebGL materials, and color palettes.

### 🎨 `extract_sd_colors.py` - Colors Only
Quick script that generates only the color reference images and CSS/Tailwind color variables.

## Featured San Diego Locations

### Hero Section Locations
- **Sunset Cliffs Natural Park** - Dramatic cliffs with couple silhouettes
- **La Jolla Cove** - Aerial turquoise waters view
- **Del Mar Beach** - Golden hour walking scenes
- **Coronado Beach** - Hotel del Coronado backdrop
- **Windansea Beach** - Iconic surf shack at sunrise

### Texture Source Locations
- **La Jolla Shores** - Fine sand textures
- **Mission Bay** - Water ripple patterns
- **Torrey Pines** - Sea foam and sage plants
- **Moonlight Beach Encinitas** - Beach glass overlays
- **San Elijo State Beach** - River rock textures

### Color Palette Sources
- **Sunset Cliffs** - Navy, coral, sand tones
- **La Jolla Cove** - Turquoise, white, gold
- **Torrey Pines** - Sage greens, sandstone

## Generated Assets

### 📁 Directory Structure
```
public/images/
├── hero/                    # Hero section backgrounds (1920x1080)
│   ├── hero-sunset-cliffs-couple.webp
│   ├── hero-la-jolla-cove-aerial.webp
│   ├── hero-del-mar-golden-hour.webp
│   ├── hero-coronado-hotel-del.webp
│   └── hero-windansea-sunrise.webp
├── textures/                # Seamless overlay textures (1024x1024)
│   ├── sand-texture-la-jolla.webp
│   ├── water-ripples-mission-bay.webp
│   ├── sea-foam-torrey-pines.webp
│   ├── beach-glass-moonlight.webp
│   └── beach-stones-san-elijo.webp
├── webgl/                   # 3D textures for WebGL effects
│   ├── water-normal-map.webp
│   ├── sand-displacement-map.webp
│   ├── la-jolla-environment-map.webp
│   └── beach-ambient-occlusion.webp
├── sections/                # Color reference images
│   ├── color-sunset-cliffs-palette.webp
│   ├── color-la-jolla-palette.webp
│   └── color-torrey-pines-palette.webp
├── sd-beach-colors.css      # CSS custom properties
├── sd-beach-tailwind-colors.js # Tailwind color config
└── sd-beach-assets-manifest.json # Complete asset catalog
```

### 🎨 Color Palette

The generated color palette is based on authentic San Diego beach photography:

#### Primary Colors
- **Navy Deep**: `#0C1B2A` - Deep ocean at twilight
- **Navy Medium**: `#1E3A5F` - Evening water
- **Slate**: `#334155` - Wet cliff rocks
- **Sage**: `#8EA69B` - Coastal sage scrub
- **Sand**: `#E9E2D0` - La Jolla beach sand
- **Coral**: `#F29B88` - Sunset reflection

#### Secondary Colors
- **Turquoise**: `#4ECDC4` - La Jolla Cove water
- **Turquoise Light**: `#7FDDDD` - Shallow water
- **Cliff Gold**: `#D4A574` - Sandstone cliffs
- **Sea Foam**: `#F7F9F9` - Wave foam

## Usage

### Generate All Assets
```bash
# Generate complete asset collection
cd "/Users/mattrundle/Documents/Affair Recovery Center of San Diego"
python3 generate_sd_beach_assets.py
```

### Generate Colors Only
```bash
# Quick color palette extraction
python3 extract_sd_colors.py
```

### Using Generated Colors in CSS
```css
/* Import the generated variables */
@import './public/images/sd-beach-colors.css';

/* Use in your styles */
.hero-section {
  background-color: var(--sd-navy-deep);
  color: var(--sd-warm-white);
}

.cta-button {
  background: var(--sd-sunset-gradient);
  color: var(--sd-warm-white);
}
```

### Using in Tailwind
```javascript
// Add to tailwind.config.js
const colors = require('./public/images/sd-beach-tailwind-colors.js');

module.exports = {
  theme: {
    extend: {
      colors: colors,
    }
  }
}
```

## Therapeutic Symbolism

Each location was chosen for its therapeutic symbolism:

- **Sunset Cliffs** - Transformation, new perspectives, overcoming challenges
- **La Jolla Cove** - Clarity, protection, safe harbors
- **Del Mar** - Journey, progress, moving forward together
- **Coronado Beach** - Luxury of healing, investment in relationship
- **Windansea** - New beginnings, dawn of hope
- **Torrey Pines** - Resilience, native strength, natural healing

## WebGL Implementation

The WebGL textures can be used for subtle interactive elements:

```javascript
// Example usage in Three.js
const normalMap = new THREE.TextureLoader().load('/images/webgl/water-normal-map.webp');
const displacementMap = new THREE.TextureLoader().load('/images/webgl/sand-displacement-map.webp');
const environmentMap = new THREE.TextureLoader().load('/images/webgl/la-jolla-environment-map.webp');

const oceanMaterial = new THREE.MeshStandardMaterial({
  normalMap: normalMap,
  envMap: environmentMap,
});
```

## Performance Optimization

- All images generated in WebP format for optimal file sizes
- Multiple resolution options for responsive design
- Seamless textures for efficient tiling
- Optimized prompts for web-ready imagery

## Local Recognition

These locations are instantly recognizable to San Diego residents, creating authentic local connection and trust for the therapy practice.

---

*Generated for Affair Recovery Center of San Diego - Jordan Zipkin, LMFT*