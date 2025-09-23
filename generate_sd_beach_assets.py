#!/usr/bin/env python3
"""
Generate San Diego-specific beach images, textures, and color palettes for the website.
Focuses on authentic local locations that San Diego residents would recognize.
"""

import os
import sys
import asyncio
import json
from pathlib import Path
from typing import Dict, List, Tuple

# Add the image generator tool to path
sys.path.append('/Users/mattrundle/Documents/image-generator-tool')

from gemini_image_sdk import ImageGenerator, Config

class SanDiegoBeachAssetGenerator:
    """Generate authentic San Diego beach assets for the therapy website"""

    def __init__(self):
        self.config = Config.from_env(env_file='/Users/mattrundle/Documents/image-generator-tool/.env')
        self.generator = ImageGenerator(self.config)

        # Define output directories
        self.base_dir = Path('/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images')
        self.hero_dir = self.base_dir / 'hero'
        self.textures_dir = self.base_dir / 'textures'
        self.webgl_dir = self.base_dir / 'webgl'
        self.sections_dir = self.base_dir / 'sections'

        # Create directories
        for dir_path in [self.hero_dir, self.textures_dir, self.webgl_dir, self.sections_dir]:
            dir_path.mkdir(parents=True, exist_ok=True)

    def get_hero_images(self) -> List[Dict]:
        """Define hero section images for specific San Diego beaches"""
        return [
            {
                "prompt": "Sunset Cliffs Natural Park San Diego at golden hour, dramatic sandstone cliffs meeting the Pacific Ocean, silhouette of loving couple sitting together on cliff edge watching sunset, warm golden light, waves gently crashing below, peaceful and romantic atmosphere, professional landscape photography, 4K resolution, symbol of healing and new beginnings",
                "filename": "hero-sunset-cliffs-couple.webp",
                "size": (1920, 1080),
                "description": "Sunset Cliffs with couple silhouette - main hero image"
            },
            {
                "prompt": "Aerial drone view of La Jolla Cove, crystal clear turquoise waters, white sand beach surrounded by golden cliffs, sea lions basking on rocks, luxury homes on bluffs, late afternoon lighting, pristine California coastline, professional aerial photography, vibrant blues and golds, peaceful sanctuary feeling",
                "filename": "hero-la-jolla-cove-aerial.webp",
                "size": (1920, 1080),
                "description": "La Jolla Cove aerial view showcasing the beauty of San Diego"
            },
            {
                "prompt": "Del Mar Beach at golden hour during low tide, wide expanse of smooth wet sand reflecting the sky, couple walking hand in hand leaving footprints, Del Mar bluffs in background, warm amber lighting, seagulls in distance, healing journey metaphor, professional beach photography, intimate and hopeful mood",
                "filename": "hero-del-mar-golden-hour.webp",
                "size": (1920, 1080),
                "description": "Del Mar beach at golden hour representing the journey of healing"
            },
            {
                "prompt": "Coronado Beach with iconic Hotel del Coronado in soft focus background, pristine white sand, gentle waves, mature couple sitting on beach blanket having intimate conversation, late afternoon sun creating warm backlighting, luxury and elegance, professional resort photography, therapeutic and safe environment feeling",
                "filename": "hero-coronado-hotel-del.webp",
                "size": (1920, 1080),
                "description": "Coronado Beach with Hotel Del Coronado - luxury therapy setting"
            },
            {
                "prompt": "Windansea Beach La Jolla at sunrise, famous palm-covered surf shack silhouetted against pink and orange sky, gentle morning waves, peaceful and contemplative atmosphere, surfers in distance, natural wooden textures, professional surf photography, new day and fresh start symbolism",
                "filename": "hero-windansea-sunrise.webp",
                "size": (1920, 1080),
                "description": "Windansea Beach surf shack at sunrise - new beginnings theme"
            }
        ]

    def get_texture_overlays(self) -> List[Dict]:
        """Define texture overlays for design elements"""
        return [
            {
                "prompt": "High resolution seamless sand texture from La Jolla shores, fine golden sand grains, natural lighting, subtle shadows and highlights, repeatable pattern, professional macro photography, neutral tones, 4K detail for web overlays",
                "filename": "sand-texture-la-jolla.webp",
                "size": (1024, 1024),
                "description": "Seamless sand texture pattern"
            },
            {
                "prompt": "Water ripple texture pattern from Mission Bay, gentle surface waves creating concentric circles, captured from above, natural blue-green tones, high contrast for overlay use, seamless tileable pattern, professional water photography",
                "filename": "water-ripples-mission-bay.webp",
                "size": (1024, 1024),
                "description": "Water ripple overlay texture"
            },
            {
                "prompt": "Sea foam texture close-up from Torrey Pines beach, white bubbles and foam patterns on wet sand, organic shapes, high contrast black and white for masking, detailed macro photography, suitable for graphic overlays",
                "filename": "sea-foam-torrey-pines.webp",
                "size": (1024, 1024),
                "description": "Sea foam texture for overlays"
            },
            {
                "prompt": "Beach glass fragments scattered on sand from Moonlight Beach Encinitas, translucent green, blue, and white sea glass, soft natural lighting, artistic arrangement, professional still life photography, healing and transformation symbolism",
                "filename": "beach-glass-moonlight.webp",
                "size": (1024, 1024),
                "description": "Beach glass overlay texture"
            },
            {
                "prompt": "Smooth river rocks and pebbles texture from San Elijo State Beach, various sizes and colors, wet from ocean spray, natural arrangement, high resolution detail, professional geology photography, grounding and stability symbolism",
                "filename": "beach-stones-san-elijo.webp",
                "size": (1024, 1024),
                "description": "Beach stone texture pattern"
            }
        ]

    def get_webgl_textures(self) -> List[Dict]:
        """Define WebGL-specific textures for 3D effects"""
        return [
            {
                "prompt": "Normal map for ocean water surface, blue and purple tones representing height variations of gentle waves, technical 3D texture for WebGL, seamless pattern, Mission Beach water surface reference, professional 3D texture art",
                "filename": "water-normal-map.webp",
                "size": (512, 512),
                "description": "Normal map for water surface WebGL effects"
            },
            {
                "prompt": "Displacement map for sand surface, grayscale height map showing sand dune ripples and natural patterns from Silver Strand beach, high contrast black and white, seamless tileable, professional 3D displacement texture",
                "filename": "sand-displacement-map.webp",
                "size": (512, 512),
                "description": "Sand displacement map for 3D effects"
            },
            {
                "prompt": "Environment map for reflections, 360-degree panoramic view of La Jolla coastline, sky and ocean for realistic reflections, HDRI style lighting, professional environmental mapping for 3D rendering",
                "filename": "la-jolla-environment-map.webp",
                "size": (2048, 1024),
                "description": "Environment map for realistic reflections"
            },
            {
                "prompt": "Ambient occlusion map for beach scene, grayscale shadows and depth information from Scripps Beach rocky areas, soft gradients, professional 3D texture art for realistic lighting",
                "filename": "beach-ambient-occlusion.webp",
                "size": (1024, 1024),
                "description": "Ambient occlusion map for realistic lighting"
            }
        ]

    def get_color_reference_images(self) -> List[Dict]:
        """Generate images specifically for color palette extraction"""
        return [
            {
                "prompt": "Color palette reference from Sunset Cliffs at sunset, dominant colors: deep navy #0C1B2A, warm coral #F29B88, golden sand #E9E2D0, sage green #8EA69B from coastal plants, slate gray #334155 from rocks, color swatches arranged naturally",
                "filename": "color-sunset-cliffs-palette.webp",
                "size": (800, 600),
                "description": "Sunset Cliffs color palette reference"
            },
            {
                "prompt": "La Jolla Cove color palette, turquoise water blues, white sand tones, golden cliff colors, green sea grass, natural color harmony from this specific San Diego location, professional color reference photography",
                "filename": "color-la-jolla-palette.webp",
                "size": (800, 600),
                "description": "La Jolla Cove natural color palette"
            },
            {
                "prompt": "Torrey Pines natural color palette, sage green coastal plants, sandstone cliff colors, deep blue ocean, golden sand, native California vegetation colors, earthy and calming tones, therapeutic color harmony",
                "filename": "color-torrey-pines-palette.webp",
                "size": (800, 600),
                "description": "Torrey Pines natural therapeutic color palette"
            }
        ]

    async def generate_css_color_variables(self) -> str:
        """Generate CSS variables based on authentic San Diego beach colors"""
        css_variables = """
/* San Diego Beach-Inspired Color Palette */
:root {
  /* Primary Colors - Sunset Cliffs Inspiration */
  --sd-navy-deep: #0C1B2A;        /* Deep ocean at twilight */
  --sd-navy-medium: #1E3A5F;      /* Evening water */
  --sd-slate: #334155;            /* Wet cliff rocks */
  --sd-sage: #8EA69B;             /* Coastal sage scrub */
  --sd-sand: #E9E2D0;             /* La Jolla beach sand */
  --sd-coral: #F29B88;            /* Sunset reflection */

  /* Secondary Colors - La Jolla Cove */
  --sd-turquoise: #4ECDC4;        /* Cove water */
  --sd-turquoise-light: #7FDDDD;  /* Shallow water */
  --sd-cliff-gold: #D4A574;       /* Sandstone cliffs */
  --sd-sea-foam: #F7F9F9;         /* Wave foam */

  /* Accent Colors - Del Mar & Coronado */
  --sd-sunset-orange: #FF8C69;    /* Del Mar sunset */
  --sd-dune-beige: #F5E6D3;       /* Coronado sand */
  --sd-kelp-green: #5A6B47;       /* Kelp forest */
  --sd-shell-pink: #F4E4E0;       /* Shell tones */

  /* Therapeutic Neutrals */
  --sd-warm-white: #FEFDFB;       /* Beach morning light */
  --sd-soft-gray: #E2E8F0;        /* Overcast sky */
  --sd-charcoal: #2D3748;         /* Driftwood */

  /* Gradients - Inspired by SD Sunsets */
  --sd-sunset-gradient: linear-gradient(135deg, #FF8C69 0%, #F29B88 50%, #D4A574 100%);
  --sd-ocean-gradient: linear-gradient(180deg, #4ECDC4 0%, #0C1B2A 100%);
  --sd-dawn-gradient: linear-gradient(90deg, #F7F9F9 0%, #E9E2D0 50%, #D4A574 100%);
}

/* Semantic Color Assignments for Therapy Website */
:root {
  --primary: var(--sd-navy-deep);
  --primary-foreground: var(--sd-warm-white);
  --secondary: var(--sd-sage);
  --secondary-foreground: var(--sd-navy-deep);
  --accent: var(--sd-coral);
  --accent-foreground: var(--sd-warm-white);
  --background: var(--sd-warm-white);
  --foreground: var(--sd-charcoal);
  --muted: var(--sd-soft-gray);
  --muted-foreground: var(--sd-slate);
  --border: var(--sd-sand);
  --card: var(--sd-sea-foam);
  --card-foreground: var(--sd-charcoal);
}
"""
        return css_variables

    async def generate_all_assets(self):
        """Generate all San Diego beach assets"""
        print("🏖️  Starting San Diego Beach Asset Generation")
        print("=" * 50)

        async with self.generator:
            # Generate hero images
            print("\n📸 Generating Hero Section Images...")
            await self._generate_batch(self.get_hero_images(), self.hero_dir)

            # Generate texture overlays
            print("\n🎨 Generating Texture Overlays...")
            await self._generate_batch(self.get_texture_overlays(), self.textures_dir)

            # Generate WebGL textures
            print("\n🌐 Generating WebGL Textures...")
            await self._generate_batch(self.get_webgl_textures(), self.webgl_dir)

            # Generate color reference images
            print("\n🎨 Generating Color Reference Images...")
            await self._generate_batch(self.get_color_reference_images(), self.sections_dir)

        # Generate CSS color variables
        print("\n🎨 Generating CSS Color Variables...")
        css_content = await self.generate_css_color_variables()
        css_file = self.base_dir / 'sd-beach-colors.css'
        css_file.write_text(css_content)
        print(f"✅ Generated: {css_file}")

        # Generate asset manifest
        await self._generate_asset_manifest()

        print("\n🎉 San Diego Beach Asset Generation Complete!")
        print(f"📁 Assets saved to: {self.base_dir}")
        print(f"🎨 CSS colors saved to: {css_file}")

    async def _generate_batch(self, images: List[Dict], output_dir: Path):
        """Generate a batch of images"""
        for img in images:
            self.config.output.width = img['size'][0]
            self.config.output.height = img['size'][1]
            self.config.output.quality = 95

            print(f"  Generating: {img['filename']}...")
            print(f"    {img['description']}")

            result = await self.generator.generate_single(
                prompt=img['prompt'],
                filename=img['filename'],
                output_dir=str(output_dir)
            )

            if result.success:
                print(f"  ✅ Generated: {result.path}")
            else:
                print(f"  ❌ Failed: {img['filename']} - {result.error}")

    async def _generate_asset_manifest(self):
        """Generate a manifest file describing all assets"""
        manifest = {
            "generated_at": "2024-09-23",
            "description": "San Diego beach assets for Affair Recovery Center website",
            "theme": "Authentic San Diego beaches for therapy and healing",
            "categories": {
                "hero": {
                    "path": "images/hero/",
                    "description": "Hero section backgrounds featuring iconic SD beaches",
                    "files": [img["filename"] for img in self.get_hero_images()]
                },
                "textures": {
                    "path": "images/textures/",
                    "description": "Seamless textures for overlays and backgrounds",
                    "files": [img["filename"] for img in self.get_texture_overlays()]
                },
                "webgl": {
                    "path": "images/webgl/",
                    "description": "3D textures for WebGL effects and animations",
                    "files": [img["filename"] for img in self.get_webgl_textures()]
                },
                "colors": {
                    "path": "images/sections/",
                    "description": "Color reference images for authentic SD palettes",
                    "files": [img["filename"] for img in self.get_color_reference_images()]
                }
            },
            "locations_featured": [
                "Sunset Cliffs Natural Park",
                "La Jolla Cove",
                "Del Mar Beach",
                "Coronado Beach & Hotel del Coronado",
                "Windansea Beach",
                "Torrey Pines State Reserve",
                "Mission Bay",
                "Moonlight Beach Encinitas",
                "San Elijo State Beach",
                "Silver Strand Beach",
                "Scripps Beach"
            ],
            "color_palette": {
                "primary": "#0C1B2A",
                "sage": "#8EA69B",
                "sand": "#E9E2D0",
                "coral": "#F29B88",
                "slate": "#334155"
            }
        }

        manifest_file = self.base_dir / 'sd-beach-assets-manifest.json'
        manifest_file.write_text(json.dumps(manifest, indent=2))
        print(f"✅ Asset manifest: {manifest_file}")


async def main():
    """Main execution function"""
    generator = SanDiegoBeachAssetGenerator()
    await generator.generate_all_assets()


if __name__ == "__main__":
    asyncio.run(main())