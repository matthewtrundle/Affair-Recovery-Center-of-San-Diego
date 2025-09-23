#!/usr/bin/env python3
"""
Generate comprehensive branding images for ARC San Diego
"""

import sys
import os
sys.path.append('/Users/mattrundle/Documents/image-generator-tool')

from gemini_image_sdk import ImageGenerator, Config
import asyncio

async def generate_arc_branding():
    print("🎨 Generating premium branding for ARC San Diego...")

    env_path = "/Users/mattrundle/Documents/image-generator-tool/.env"
    config = Config.from_env(env_file=env_path)

    generator = ImageGenerator(config)

    # Output directories
    logo_dir = "/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/logo"
    hero_dir = "/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/hero"
    sections_dir = "/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/sections"
    parallax_dir = "/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/parallax"

    # Create directories
    for dir in [logo_dir, hero_dir, sections_dir, parallax_dir]:
        os.makedirs(dir, exist_ok=True)

    images = [
        # LOGO DESIGNS
        {
            "prompt": "Minimalist elegant logo design, curved arc shape forming a bridge or rainbow, deep navy and sage green gradient, symbol of connection and healing, professional therapy practice logo, vector style, white background, modern clean design",
            "filename": "arc-logo-main.png",
            "dir": logo_dir,
            "size": (512, 512)
        },
        {
            "prompt": "Abstract arc logo mark only, two curved lines meeting to form protective embrace, navy blue with coral accent, minimalist design, symbol of support and recovery, vector graphic on transparent background",
            "filename": "arc-logo-mark.png",
            "dir": logo_dir,
            "size": (512, 512)
        },
        {
            "prompt": "Elegant wordmark 'ARC San Diego' with stylized arc above the text, sophisticated serif typography, navy and sage colors, professional therapy practice branding, high-end design",
            "filename": "arc-logo-wordmark.png",
            "dir": logo_dir,
            "size": (1024, 256)
        },

        # HERO IMAGES WITH DEPTH
        {
            "prompt": "Dramatic aerial view of San Diego coastline at golden hour, soft focus foreground with sharp horizon, layers of depth for parallax effect, warm golden light, peaceful ocean waves, professional photography, ultra high resolution",
            "filename": "hero-parallax-ocean.webp",
            "dir": parallax_dir,
            "size": (2560, 1440)
        },
        {
            "prompt": "Modern luxury therapy office interior, floor to ceiling windows with city view, elegant furniture in sage and cream tones, multiple depth layers, sophisticated lighting, architectural photography, magazine quality",
            "filename": "hero-office-luxury.webp",
            "dir": hero_dir,
            "size": (2560, 1440)
        },
        {
            "prompt": "Abstract healing journey visualization, flowing ribbons of light in sage and coral, multiple transparent layers, ethereal and elegant, premium artistic design, depth and movement",
            "filename": "hero-abstract-journey.webp",
            "dir": parallax_dir,
            "size": (2560, 1440)
        },

        # SECTION BACKGROUNDS
        {
            "prompt": "Soft watercolor wash background, elegant marble texture with sage green and sand tones, subtle gold veining, premium texture for website sections, sophisticated and calming",
            "filename": "section-marble-texture.webp",
            "dir": sections_dir,
            "size": (1920, 1080)
        },
        {
            "prompt": "Geometric sacred geometry pattern, overlapping circles forming flower of life, translucent navy and sage, elegant mathematical beauty, healing symbolism, vector design",
            "filename": "section-sacred-geometry.webp",
            "dir": sections_dir,
            "size": (1920, 1080)
        },

        # PARALLAX LAYERS
        {
            "prompt": "Foreground bokeh lights, soft out of focus golden orbs, transparent overlay effect for parallax scrolling, dreamy atmospheric element, PNG with transparency",
            "filename": "parallax-bokeh-overlay.png",
            "dir": parallax_dir,
            "size": (1920, 1080)
        },
        {
            "prompt": "Mid-ground mountain silhouette, layered hills in gradient from navy to sage, misty atmospheric perspective, designed for parallax scrolling effect",
            "filename": "parallax-mountains.png",
            "dir": parallax_dir,
            "size": (1920, 600)
        },
        {
            "prompt": "Floating geometric shapes, translucent triangles and circles in sage and coral, scattered composition for parallax movement, modern abstract design elements",
            "filename": "parallax-shapes.png",
            "dir": parallax_dir,
            "size": (1920, 1080)
        },

        # FEATURE IMAGES
        {
            "prompt": "Elegant couple silhouette walking on beach at sunset, holding hands, artistic photography, emotional connection, warm backlight, cinematic quality, symbol of journey together",
            "filename": "feature-couple-beach.webp",
            "dir": sections_dir,
            "size": (1200, 800)
        },
        {
            "prompt": "Zen garden with carefully placed stones, raked sand patterns, minimalist Japanese aesthetic, symbol of order from chaos, peaceful meditation space, high-end photography",
            "filename": "feature-zen-garden.webp",
            "dir": sections_dir,
            "size": (1200, 800)
        },
        {
            "prompt": "Hands releasing butterflies into golden light, transformation and freedom metaphor, magical realism style, emotional healing visualization, artistic photography",
            "filename": "feature-transformation.webp",
            "dir": sections_dir,
            "size": (1200, 800)
        }
    ]

    async with generator:
        for img in images:
            print(f"\n📸 Generating: {img['filename']}")

            # Set custom size if specified
            if 'size' in img:
                config.output.width = img['size'][0]
                config.output.height = img['size'][1]
            else:
                config.output.width = 1920
                config.output.height = 1080

            config.output.quality = 95

            result = await generator.generate_single(
                prompt=img['prompt'],
                filename=img['filename'],
                output_dir=img['dir']
            )

            if result.success:
                print(f"✅ Success! Saved to: {result.path}")
            else:
                print(f"❌ Failed: {result.error}")

    print("\n✨ Premium branding generation complete!")

def main():
    asyncio.run(generate_arc_branding())

if __name__ == "__main__":
    main()