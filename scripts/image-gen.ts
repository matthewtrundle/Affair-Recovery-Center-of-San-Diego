#!/usr/bin/env tsx

import { generateOGImage, generateHeroImage, checkImageToolExists } from '../lib/image-tool'
import path from 'path'
import fs from 'fs/promises'

const OG_IMAGES = [
  { name: 'home', title: 'Affair Recovery Center of San Diego', description: 'Evidence-based couples therapy for healing and rebuilding trust' },
  { name: 'about', title: 'About Jordan Zipkin, LMFT', description: 'Experienced therapist specializing in affair recovery' },
  { name: 'services', title: 'Betrayal Recovery Services', description: 'Specialized therapy for couples healing from infidelity' },
  { name: 'approach', title: 'Our Therapeutic Approach', description: 'Gottman Method and Relational Life Therapy' },
  { name: 'schedule', title: 'Schedule Your Consultation', description: 'Book a free 15-minute consultation' },
  { name: 'contact', title: 'Contact Us', description: 'Get in touch to start your recovery journey' },
  { name: 'faq', title: 'Frequently Asked Questions', description: 'Common questions about affair recovery' },
  { name: 'blog', title: 'Blog & Resources', description: 'Insights on healing and rebuilding relationships' },
]

const HERO_IMAGES = [
  { name: 'home', theme: 'Couple holding hands on beach at sunset, back view, hopeful and peaceful' },
  { name: 'about', theme: 'Professional therapy office, warm and inviting, books and plants' },
  { name: 'services', theme: 'Two paths converging in nature, symbolizing coming together' },
  { name: 'approach', theme: 'Bridge over calm water, metaphor for connection and crossing difficulties' },
]

async function generateAllImages() {
  console.log('🎨 Starting image generation...\n')

  // Check if image tool exists
  const toolExists = await checkImageToolExists()
  if (!toolExists) {
    console.log('⚠️  Image generation tool not found.')
    console.log('   Please ensure the tool is installed at the path specified in IMAGE_TOOL_PATH')
    console.log('   Skipping image generation.\n')

    // Create placeholder images instead
    await createPlaceholders()
    return
  }

  // Create directories
  await fs.mkdir(path.join(process.cwd(), 'public', 'og'), { recursive: true })
  await fs.mkdir(path.join(process.cwd(), 'public', 'images'), { recursive: true })

  // Generate OG images
  console.log('📱 Generating Open Graph images...')
  for (const image of OG_IMAGES) {
    try {
      await generateOGImage(image.name, image.title, image.description)
    } catch (error) {
      console.error(`Failed to generate OG image for ${image.name}:`, error)
    }
  }

  // Generate hero images
  console.log('\n🖼️  Generating hero background images...')
  for (const image of HERO_IMAGES) {
    try {
      await generateHeroImage(image.name, image.theme)
    } catch (error) {
      console.error(`Failed to generate hero image for ${image.name}:`, error)
    }
  }

  console.log('\n✅ Image generation complete!')
}

async function createPlaceholders() {
  console.log('Creating placeholder images...')

  // Create directories
  await fs.mkdir(path.join(process.cwd(), 'public', 'og'), { recursive: true })
  await fs.mkdir(path.join(process.cwd(), 'public', 'images'), { recursive: true })

  // Create a simple SVG placeholder for OG images
  const ogPlaceholder = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#0C1B2A"/>
    <text x="600" y="315" font-family="Arial" font-size="48" fill="#8EA69B" text-anchor="middle">
      Affair Recovery Center
    </text>
  </svg>`

  // Create a simple SVG placeholder for hero images
  const heroPlaceholder = `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
    <rect width="1920" height="1080" fill="#E9E2D0"/>
    <text x="960" y="540" font-family="Arial" font-size="72" fill="#0C1B2A" text-anchor="middle">
      Hero Image Placeholder
    </text>
  </svg>`

  // Write OG placeholders
  for (const image of OG_IMAGES) {
    const filepath = path.join(process.cwd(), 'public', 'og', `${image.name}.svg`)
    await fs.writeFile(filepath, ogPlaceholder)
    console.log(`✓ Created placeholder: ${filepath}`)
  }

  // Write hero placeholders
  for (const image of HERO_IMAGES) {
    const filepath = path.join(process.cwd(), 'public', 'images', `hero-${image.name}.svg`)
    await fs.writeFile(filepath, heroPlaceholder)
    console.log(`✓ Created placeholder: ${filepath}`)
  }

  console.log('\n✅ Placeholder images created!')
}

// Run the script
generateAllImages().catch(console.error)