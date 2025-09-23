#!/usr/bin/env python3
"""Generate transparent ARC logo"""

import os
import sys
import asyncio
from pathlib import Path

# Add the image generator tool to path
sys.path.append('/Users/mattrundle/Documents/image-generator-tool')

from gemini_image_sdk import ImageGenerator, Config

async def generate_transparent_logo():
    """Generate transparent ARC logo"""

    # Load config from environment
    config = Config.from_env(env_file='/Users/mattrundle/Documents/image-generator-tool/.env')
    generator = ImageGenerator(config)

    # Define output directory
    output_dir = Path('/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/logo')
    output_dir.mkdir(parents=True, exist_ok=True)

    # Logo specifications
    logos = [
        {
            "prompt": "Minimalist arc logo design, single curved arc shape flowing upward like ocean wave, gradient from deep ocean blue to warm sand beige, transparent background, clean vector style, modern and professional, subtle elegance, no text, PNG with transparency",
            "filename": "arc-logo-transparent.png",
            "size": (512, 512)
        },
        {
            "prompt": "Simple elegant arc symbol, smooth curved line forming gentle upward arc, Pacific blue gradient transitioning to sunset coral at tips, completely transparent background, minimalist design, professional logo, PNG format with alpha channel",
            "filename": "arc-logo-mark-transparent.png",
            "size": (256, 256)
        },
        {
            "prompt": "Clean arc icon, flowing curved shape inspired by ocean waves, single continuous line forming upward arc, gradient from teal to warm gold, fully transparent background, vector-style logo, modern minimal design, PNG with transparency",
            "filename": "arc-icon-transparent.png",
            "size": (128, 128)
        }
    ]

    async with generator:
        for logo in logos:
            config.output.width = logo['size'][0]
            config.output.height = logo['size'][1]
            config.output.quality = 100  # Max quality for logos

            print(f"\nGenerating: {logo['filename']}...")
            result = await generator.generate_single(
                prompt=logo['prompt'],
                filename=logo['filename'],
                output_dir=str(output_dir)
            )

            if result.success:
                print(f"✅ Generated: {result.path}")
            else:
                print(f"❌ Failed to generate {logo['filename']}: {result.error}")

    print("\n✨ Transparent logo generation complete!")

if __name__ == "__main__":
    asyncio.run(generate_transparent_logo())