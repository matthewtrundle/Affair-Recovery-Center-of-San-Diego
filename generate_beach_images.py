#!/usr/bin/env python3
"""Generate San Diego beach-themed images for website sections"""

import os
import sys
import asyncio
from pathlib import Path

# Add the image generator tool to path
sys.path.append('/Users/mattrundle/Documents/image-generator-tool')

from gemini_image_sdk import ImageGenerator, Config

async def generate_beach_images():
    """Generate beach-themed images for the website"""

    # Load config from environment
    config = Config.from_env(env_file='/Users/mattrundle/Documents/image-generator-tool/.env')
    generator = ImageGenerator(config)

    # Define output directory
    output_dir = Path('/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/sections')
    output_dir.mkdir(parents=True, exist_ok=True)

    # San Diego beach-themed images
    images = [
        {
            "prompt": "Aerial view of La Jolla Cove at golden hour, turquoise water meeting sandy cliffs, warm sunset lighting, professional landscape photography, high resolution, peaceful and serene mood",
            "filename": "beach-la-jolla-cove.webp",
            "size": (1920, 1080)
        },
        {
            "prompt": "Torrey Pines State Reserve coastal trail with ocean view, California native plants, golden hour lighting, couple walking in distance, professional nature photography, warm tones, healing atmosphere",
            "filename": "beach-torrey-pines.webp",
            "size": (1920, 1080)
        },
        {
            "prompt": "Sunset Cliffs natural park San Diego, waves crashing on sandstone cliffs, warm golden sunset, silhouette of couple sitting on bench, romantic and peaceful, professional landscape photography",
            "filename": "beach-sunset-cliffs.webp",
            "size": (1920, 1080)
        },
        {
            "prompt": "Windansea Beach La Jolla at sunrise, famous surf shack silhouette, gentle waves, soft morning light, peaceful and contemplative mood, professional beach photography",
            "filename": "beach-windansea.webp",
            "size": (1920, 1080)
        },
        {
            "prompt": "Del Mar beach at low tide, smooth wet sand reflecting sky, couple walking leaving footprints, golden hour, healing journey metaphor, professional photography, warm and hopeful",
            "filename": "beach-del-mar.webp",
            "size": (1920, 1080)
        },
        {
            "prompt": "Coronado Beach with Hotel del Coronado in background, golden sand, gentle waves, couple sitting on beach, late afternoon sun, professional resort photography, luxurious yet peaceful",
            "filename": "beach-coronado.webp",
            "size": (1920, 1080)
        },
        {
            "prompt": "Close-up of smooth beach stones stacked in balance on sand, La Jolla shores background blurred, zen meditation concept, soft natural lighting, professional macro photography",
            "filename": "beach-zen-stones.webp",
            "size": (1200, 800)
        },
        {
            "prompt": "California coastal sage scrub plants with ocean backdrop, Torrey Pines native vegetation, soft focus, natural healing environment, warm afternoon light, professional botanical photography",
            "filename": "beach-sage-plants.webp",
            "size": (1200, 800)
        },
        {
            "prompt": "Tide pools at Cabrillo National Monument, sea anemones and starfish in crystal clear water, educational and fascinating, natural wonder, professional nature photography",
            "filename": "beach-tide-pools.webp",
            "size": (1200, 800)
        },
        {
            "prompt": "Driftwood heart shape on sandy beach, La Jolla shores, symbol of love and renewal, soft morning light, professional still life photography, romantic and hopeful",
            "filename": "beach-driftwood-heart.webp",
            "size": (800, 800)
        }
    ]

    async with generator:
        for img in images:
            config.output.width = img['size'][0]
            config.output.height = img['size'][1]
            config.output.quality = 95

            print(f"\nGenerating: {img['filename']}...")
            result = await generator.generate_single(
                prompt=img['prompt'],
                filename=img['filename'],
                output_dir=str(output_dir)
            )

            if result.success:
                print(f"✅ Generated: {result.path}")
            else:
                print(f"❌ Failed to generate {img['filename']}: {result.error}")

    print("\n✨ Beach image generation complete!")

if __name__ == "__main__":
    asyncio.run(generate_beach_images())