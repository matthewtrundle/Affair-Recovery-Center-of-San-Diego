#!/usr/bin/env python3
"""
Generate images for Affair Recovery Center of San Diego website
"""

import sys
import os
sys.path.append('/Users/mattrundle/Documents/image-generator-tool')

from gemini_image_sdk import ImageGenerator, Config
import asyncio

async def generate_therapy_images():
    print("🎨 Generating images for Affair Recovery Center of San Diego...")

    # Update the .env with OpenRouter API key
    env_path = "/Users/mattrundle/Documents/image-generator-tool/.env"

    # Write the OpenRouter API key to .env
    with open(env_path, 'w') as f:
        f.write("GEMINI_API_KEY=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\n")
        f.write("OUTPUT_DIR=./generated\n")
        f.write("IMAGE_QUALITY=95\n")
        f.write("LOGGING_ENABLED=true\n")

    config = Config.from_env(env_file=env_path)

    # Configure for optimal quality
    config.output.width = 1792
    config.output.height = 1024
    config.output.quality = 95

    generator = ImageGenerator(config)

    # Output directories
    hero_dir = "/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/hero"
    bg_dir = "/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/background"
    metaphor_dir = "/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/metaphor"
    og_dir = "/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/og"

    # Ensure directories exist
    for dir in [hero_dir, bg_dir, metaphor_dir, og_dir]:
        os.makedirs(dir, exist_ok=True)

    images = [
        # Hero Images
        {
            "prompt": "Serene professional therapy office, two comfortable sage green armchairs positioned for conversation, warm natural light through sheer curtains, wooden side table with small plant, cream walls, cozy professional atmosphere, photorealistic, depth of field",
            "filename": "hero-home.webp",
            "dir": hero_dir
        },
        {
            "prompt": "Abstract watercolor painting, flowing shapes in sage green, soft coral, sand tones, calming organic movement, healing and growth theme, high resolution artistic texture, website header background",
            "filename": "hero-services.webp",
            "dir": hero_dir
        },

        # Background Patterns
        {
            "prompt": "Subtle geometric circles pattern, translucent sage green and sand tones, minimalist design, soft gradient overlay, professional calming background texture",
            "filename": "pattern-circles.webp",
            "dir": bg_dir
        },

        # Metaphorical Images
        {
            "prompt": "Two mature trees with gently intertwined branches, soft morning sky background, golden hour lighting, peaceful natural landscape, symbolizing connection and mutual support, photorealistic nature photography",
            "filename": "metaphor-connection.webp",
            "dir": metaphor_dir
        },
        {
            "prompt": "Peaceful garden path with smooth stepping stones, lush sage colored foliage, morning light creating soft shadows, coral flowers along path, serene hopeful atmosphere, depth perspective",
            "filename": "metaphor-journey.webp",
            "dir": metaphor_dir
        },
        {
            "prompt": "Calm water surface with gentle ripples catching golden light, peaceful lake setting, reflective meditative quality, soft focus on horizon, emotional peace metaphor",
            "filename": "metaphor-calm-waters.webp",
            "dir": metaphor_dir
        },

        # OG Images
        {
            "prompt": "Professional therapy office interior, warm inviting atmosphere, sage and cream colors, text overlay space, social media preview image",
            "filename": "og-home.png",
            "dir": og_dir
        },
        {
            "prompt": "Abstract healing journey visualization, sage green and coral gradient, professional mental health theme, social media card background",
            "filename": "og-default.png",
            "dir": og_dir
        }
    ]

    async with generator:
        for img in images:
            print(f"\n📸 Generating: {img['filename']}")
            result = await generator.generate_single(
                prompt=img['prompt'],
                filename=img['filename'],
                output_dir=img['dir']
            )

            if result.success:
                print(f"✅ Success! Saved to: {result.path}")
            else:
                print(f"❌ Failed: {result.error}")
                # If API fails, create placeholder
                placeholder_path = os.path.join(img['dir'], img['filename'])
                with open(placeholder_path, 'w') as f:
                    f.write("placeholder")
                print(f"📝 Created placeholder at: {placeholder_path}")

    print("\n✨ Image generation complete!")

def main():
    asyncio.run(generate_therapy_images())

if __name__ == "__main__":
    main()