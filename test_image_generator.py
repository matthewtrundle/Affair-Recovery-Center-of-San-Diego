#!/usr/bin/env python3
"""
Test script to verify the image generator tool is working correctly
before running the full San Diego beach asset generation.
"""

import sys
import asyncio
from pathlib import Path

# Add the image generator tool to path
sys.path.append('/Users/mattrundle/Documents/image-generator-tool')

try:
    from gemini_image_sdk import ImageGenerator, Config
    print("✅ Successfully imported image generator SDK")
except ImportError as e:
    print(f"❌ Failed to import SDK: {e}")
    sys.exit(1)

async def test_generator():
    """Test the image generator with a simple San Diego beach image"""
    try:
        # Load config
        config = Config.from_env(env_file='/Users/mattrundle/Documents/image-generator-tool/.env')
        print("✅ Successfully loaded config")

        # Create test output directory
        test_dir = Path('/Users/mattrundle/Documents/Affair Recovery Center of San Diego/public/images/test')
        test_dir.mkdir(parents=True, exist_ok=True)

        # Initialize generator
        generator = ImageGenerator(config)
        print("✅ Successfully initialized generator")

        async with generator:
            print("\n🏖️  Testing with simple San Diego beach image...")

            # Test generation
            result = await generator.generate_single(
                prompt="Simple view of La Jolla Cove, turquoise water and sandy beach, professional photography, peaceful and healing atmosphere",
                filename="test-la-jolla-simple.webp",
                output_dir=str(test_dir)
            )

            if result.success:
                print(f"✅ Test successful! Generated: {result.path}")
                print(f"📁 Test image saved to: {test_dir}")
                return True
            else:
                print(f"❌ Test failed: {result.error}")
                return False

    except Exception as e:
        print(f"❌ Test error: {e}")
        return False

async def main():
    """Run the test"""
    print("🧪 Testing San Diego Beach Image Generator")
    print("=" * 40)

    success = await test_generator()

    if success:
        print("\n🎉 Image generator test passed!")
        print("You can now run the full asset generation:")
        print("  python3 generate_sd_beach_assets.py")
    else:
        print("\n❌ Image generator test failed!")
        print("Please check your configuration and try again.")

if __name__ == "__main__":
    asyncio.run(main())