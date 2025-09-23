#!/usr/bin/env python3
"""
Quick script to extract and generate CSS color variables from San Diego beach photos.
This can be run independently to just update the color palette.
"""

import asyncio
from pathlib import Path
from generate_sd_beach_assets import SanDiegoBeachAssetGenerator

async def extract_colors_only():
    """Extract only the color palettes and generate CSS"""
    generator = SanDiegoBeachAssetGenerator()

    print("🎨 Extracting San Diego Beach Color Palettes")
    print("=" * 45)

    # Create directories if they don't exist
    generator.base_dir.mkdir(parents=True, exist_ok=True)
    generator.sections_dir.mkdir(parents=True, exist_ok=True)

    async with generator.generator:
        # Generate only color reference images
        print("\n🌈 Generating Color Reference Images...")
        await generator._generate_batch(generator.get_color_reference_images(), generator.sections_dir)

    # Generate CSS color variables
    print("\n📝 Generating CSS Color Variables...")
    css_content = await generator.generate_css_color_variables()
    css_file = generator.base_dir / 'sd-beach-colors.css'
    css_file.write_text(css_content)
    print(f"✅ Generated: {css_file}")

    # Also generate a Tailwind config snippet
    tailwind_colors = """
// Add to your tailwind.config.js colors section
const sdBeachColors = {
  'sd-navy': {
    'deep': '#0C1B2A',
    'medium': '#1E3A5F',
  },
  'sd-sage': '#8EA69B',
  'sd-sand': '#E9E2D0',
  'sd-coral': '#F29B88',
  'sd-slate': '#334155',
  'sd-turquoise': {
    'DEFAULT': '#4ECDC4',
    'light': '#7FDDDD',
  },
  'sd-sunset': '#FF8C69',
  'sd-cliff': '#D4A574',
  'sd-foam': '#F7F9F9',
  'sd-dune': '#F5E6D3',
  'sd-kelp': '#5A6B47',
  'sd-shell': '#F4E4E0',
  'sd-warm-white': '#FEFDFB',
  'sd-soft-gray': '#E2E8F0',
  'sd-charcoal': '#2D3748',
};

// Usage in your tailwind config:
module.exports = {
  theme: {
    extend: {
      colors: {
        ...sdBeachColors,
        // You can also map to your semantic names:
        primary: sdBeachColors['sd-navy']['deep'],
        secondary: sdBeachColors['sd-sage'],
        accent: sdBeachColors['sd-coral'],
      }
    }
  }
}
"""

    tailwind_file = generator.base_dir / 'sd-beach-tailwind-colors.js'
    tailwind_file.write_text(tailwind_colors)
    print(f"✅ Generated: {tailwind_file}")

    print("\n🎉 Color extraction complete!")
    print(f"📁 Files saved to: {generator.base_dir}")
    print(f"🎨 CSS variables: {css_file}")
    print(f"🌊 Tailwind colors: {tailwind_file}")

if __name__ == "__main__":
    asyncio.run(extract_colors_only())