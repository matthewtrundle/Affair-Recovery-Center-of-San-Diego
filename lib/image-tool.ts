import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import fs from 'fs/promises'

const execAsync = promisify(exec)

const IMAGE_TOOL_PATH = process.env.IMAGE_TOOL_PATH || '/Users/mattrundle/Documents/image-generator-tool'

export interface ImageGenerationOptions {
  prompt: string
  output: string
  width?: number
  height?: number
  style?: 'realistic' | 'abstract' | 'minimal'
}

export async function generateImage({
  prompt,
  output,
  width = 1200,
  height = 630,
  style = 'abstract'
}: ImageGenerationOptions): Promise<void> {
  // Ensure the output directory exists
  const outputDir = path.dirname(output)
  await fs.mkdir(outputDir, { recursive: true })

  // Build the command
  const stylePrompt = getStylePrompt(style)
  const fullPrompt = `${prompt}. ${stylePrompt}`

  const command = `${IMAGE_TOOL_PATH} --prompt "${fullPrompt}" --output "${output}" --width ${width} --height ${height}`

  try {
    console.log(`Generating image: ${path.basename(output)}`)
    const { stdout, stderr } = await execAsync(command)

    if (stderr) {
      console.error('Image generation warning:', stderr)
    }

    console.log(`✓ Generated: ${output}`)
  } catch (error) {
    console.error(`Failed to generate image ${output}:`, error)
    throw error
  }
}

function getStylePrompt(style: 'realistic' | 'abstract' | 'minimal'): string {
  switch (style) {
    case 'realistic':
      return 'Photorealistic, professional photography, high quality, 4k resolution'
    case 'abstract':
      return 'Abstract art, modern, sophisticated, muted navy and sage color palette, subtle gradients, professional design'
    case 'minimal':
      return 'Minimalist design, clean lines, simple shapes, elegant, professional'
    default:
      return ''
  }
}

export async function generateOGImage(
  pageName: string,
  title: string,
  description?: string
): Promise<void> {
  const prompt = `Open Graph social media preview image for a couples therapy website.
    Page: ${pageName}. Title text: "${title}".
    ${description ? `Subtitle: "${description}". ` : ''}
    Professional, trustworthy, calming. Navy and sage color scheme.
    Abstract background suggesting healing and connection.`

  const output = path.join(process.cwd(), 'public', 'og', `${pageName}.png`)

  await generateImage({
    prompt,
    output,
    width: 1200,
    height: 630,
    style: 'abstract'
  })
}

export async function generateHeroImage(
  pageName: string,
  theme: string
): Promise<void> {
  const prompt = `Hero section background image for couples therapy website.
    Theme: ${theme}.
    Warm, inviting, professional.
    Suggesting hope, healing, and human connection.
    Soft lighting, depth of field.`

  const output = path.join(process.cwd(), 'public', 'images', `hero-${pageName}.jpg`)

  await generateImage({
    prompt,
    output,
    width: 1920,
    height: 1080,
    style: 'realistic'
  })
}

export async function checkImageToolExists(): Promise<boolean> {
  try {
    await fs.access(IMAGE_TOOL_PATH, fs.constants.X_OK)
    return true
  } catch {
    console.warn(`Image tool not found at ${IMAGE_TOOL_PATH}`)
    return false
  }
}