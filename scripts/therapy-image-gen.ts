#!/usr/bin/env ts-node

import { execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

// Configuration
const IMAGE_TOOL_PATH = '/Users/mattrundle/Documents/image-generator-tool';
const OPENROUTER_API_KEY = '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';
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'images');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

interface ImageRequest {
  prompt: string;
  filename: string;
  size?: '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
  altText: string;
  category: 'hero' | 'background' | 'social' | 'blog' | 'metaphor';
}

class TherapyImageGenerator {
  private apiKey: string;
  private toolPath: string;

  constructor() {
    this.apiKey = OPENROUTER_API_KEY;
    this.toolPath = IMAGE_TOOL_PATH;
  }

  /**
   * Generate a single image using the OpenRouter API
   */
  async generateImage(request: ImageRequest): Promise<void> {
    const outputPath = path.join(OUTPUT_DIR, request.category, request.filename);

    // Ensure category directory exists
    const categoryDir = path.join(OUTPUT_DIR, request.category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    const command = `
      cd "${this.toolPath}" && \\
      node index.js generate \\
        --api-key "${this.apiKey}" \\
        --model "dall-e-3" \\
        --prompt "${request.prompt}" \\
        --size "${request.size || '1792x1024'}" \\
        --quality "${request.quality || 'hd'}" \\
        --output "${outputPath}"
    `.trim();

    console.log(`\n🎨 Generating: ${request.filename}`);
    console.log(`   Category: ${request.category}`);
    console.log(`   Alt text: ${request.altText}`);

    try {
      execSync(command, { stdio: 'inherit' });
      console.log(`✅ Generated successfully: ${outputPath}`);

      // Save metadata
      this.saveMetadata(request, outputPath);
    } catch (error) {
      console.error(`❌ Failed to generate ${request.filename}:`, error);
    }
  }

  /**
   * Save image metadata for reference
   */
  private saveMetadata(request: ImageRequest, outputPath: string): void {
    const metadataPath = outputPath.replace(/\.(png|jpg|jpeg)$/i, '.json');
    const metadata = {
      prompt: request.prompt,
      altText: request.altText,
      category: request.category,
      size: request.size || '1792x1024',
      quality: request.quality || 'hd',
      generatedAt: new Date().toISOString(),
      filename: request.filename
    };

    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  }

  /**
   * Generate batch of images for the therapy practice
   */
  async generateBatch(images: ImageRequest[]): Promise<void> {
    console.log(`\n🚀 Starting batch generation of ${images.length} images...\n`);

    for (const image of images) {
      await this.generateImage(image);
      // Small delay between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log(`\n✨ Batch generation complete!`);
  }
}

// Predefined image sets for the therapy practice
const therapyPracticeImages: ImageRequest[] = [
  // Hero Images
  {
    prompt: "A serene, professional therapy office with two comfortable sage green armchairs positioned for intimate conversation, warm natural light filtering through sheer white curtains, a small wooden side table with a succulent plant, soft cream walls with subtle texture, cozy yet professional atmosphere, photorealistic style, depth of field focusing on the seating area",
    filename: "hero-home.png",
    size: "1792x1024",
    quality: "hd",
    altText: "Warm and inviting therapy office with comfortable seating",
    category: "hero"
  },
  {
    prompt: "Abstract watercolor painting with gentle flowing shapes in sage green (#8EA69B), soft coral (#F29B88), and sand (#E9E2D0) tones, calming organic movement suggesting healing and growth, suitable for website header, high resolution artistic texture",
    filename: "hero-services.png",
    size: "1792x1024",
    quality: "hd",
    altText: "Abstract watercolor in calming sage and coral tones",
    category: "hero"
  },

  // Background Textures
  {
    prompt: "Subtle geometric pattern with overlapping circles in translucent sage green and sand tones, minimalist design suitable for website background, soft gradient overlay, professional and calming",
    filename: "pattern-circles.png",
    size: "1024x1024",
    quality: "standard",
    altText: "Geometric circle pattern in sage and sand tones",
    category: "background"
  },

  // Metaphorical Images
  {
    prompt: "Two mature trees with gently intertwined branches against a soft morning sky, symbolizing connection and mutual support, golden hour lighting, peaceful natural landscape, photorealistic nature photography",
    filename: "metaphor-connection.png",
    size: "1792x1024",
    quality: "hd",
    altText: "Two trees with intertwined branches symbolizing connection",
    category: "metaphor"
  },
  {
    prompt: "A peaceful garden path with smooth stepping stones leading through lush sage-colored foliage, morning light creating soft shadows, touches of coral flowers along the path, serene and hopeful atmosphere, depth perspective",
    filename: "metaphor-journey.png",
    size: "1792x1024",
    quality: "hd",
    altText: "Garden path with stepping stones representing healing journey",
    category: "metaphor"
  },
  {
    prompt: "Calm water surface with gentle ripples catching golden light, peaceful lake or pond setting, reflective and meditative quality, soft focus on the horizon, emotional regulation metaphor",
    filename: "metaphor-calm-waters.png",
    size: "1792x1024",
    quality: "hd",
    altText: "Calm water with gentle ripples symbolizing emotional peace",
    category: "metaphor"
  },

  // Blog Feature Images
  {
    prompt: "Open journal with handwritten notes on a warm wooden desk, cup of herbal tea nearby, soft window light, sage green accent elements, thoughtful and reflective mood, lifestyle photography style",
    filename: "blog-journaling.png",
    size: "1792x1024",
    quality: "hd",
    altText: "Journal and tea on desk for self-reflection",
    category: "blog"
  },
  {
    prompt: "Hands holding a small growing plant in rich soil, symbolizing growth and nurture, soft natural lighting, warm skin tones showing diversity, hopeful and caring gesture, close-up photography",
    filename: "blog-growth.png",
    size: "1024x1024",
    quality: "hd",
    altText: "Hands nurturing a growing plant symbolizing personal growth",
    category: "blog"
  },

  // Social Media
  {
    prompt: "Inspirational quote background with soft watercolor wash in sage and coral, subtle texture, space for text overlay, Instagram square format, calming and uplifting",
    filename: "social-quote-bg-1.png",
    size: "1024x1024",
    quality: "standard",
    altText: "Watercolor background for inspirational quotes",
    category: "social"
  }
];

// CLI Interface
async function main() {
  const generator = new TherapyImageGenerator();

  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--batch') {
    // Generate all predefined images
    await generator.generateBatch(therapyPracticeImages);
  } else if (args[0] === '--custom') {
    // Custom image generation
    if (args.length < 4) {
      console.error('Usage: --custom "prompt" "filename" "alt text" [category]');
      process.exit(1);
    }

    const customImage: ImageRequest = {
      prompt: args[1],
      filename: args[2],
      altText: args[3],
      category: (args[4] as any) || 'hero'
    };

    await generator.generateImage(customImage);
  } else if (args[0] === '--help') {
    console.log(`
Therapy Office Image Generator
==============================

Usage:
  ts-node therapy-image-gen.ts [options]

Options:
  --batch                    Generate all predefined therapy practice images
  --custom <args>           Generate a custom image
                           Args: "prompt" "filename" "alt text" [category]
  --help                    Show this help message

Categories:
  hero       - Homepage and main section heroes
  background - Patterns and textures for backgrounds
  metaphor   - Metaphorical imagery (trees, paths, water)
  blog       - Blog post feature images
  social     - Social media post backgrounds

Examples:
  ts-node therapy-image-gen.ts --batch
  ts-node therapy-image-gen.ts --custom "Peaceful office" "office.png" "Therapy office" hero
    `);
  }
}

// Run the generator
if (require.main === module) {
  main().catch(console.error);
}

export { TherapyImageGenerator };
export type { ImageRequest };