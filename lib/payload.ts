import { getPayload } from 'payload'
import config from '@/payload.config'

// Helper to get Payload instance
export async function getPayloadClient() {
  return await getPayload({ config })
}

// Fetch all published posts
export async function getPosts(options?: {
  limit?: number
  category?: string
  featured?: boolean
}) {
  const payload = await getPayloadClient()

  const where: any = { status: { equals: 'published' } }

  if (options?.category) {
    where.category = { equals: options.category }
  }

  if (options?.featured !== undefined) {
    where.featured = { equals: options.featured }
  }

  const posts = await payload.find({
    collection: 'posts',
    where,
    limit: options?.limit || 100,
    sort: '-publishedDate',
  })

  return posts.docs
}

// Fetch single post by slug
export async function getPostBySlug(slug: string) {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  return result.docs[0] || null
}

// Fetch all categories
export async function getCategories() {
  const payload = await getPayloadClient()

  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
    sort: 'name',
  })

  return categories.docs
}

// Type for category data
export type Category = {
  id: string
  name: string
  slug: string
  description?: string
  color: 'turquoise' | 'lime' | 'deepTeal' | 'olive'
  createdAt: string
  updatedAt: string
}

// Type for post data
export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: any
  featuredImage?: any
  category: string | Category  // Can be string (old posts) or relationship object
  tags?: string[]
  author: string
  publishedDate: string
  readTime?: number
  featured: boolean
  status: 'draft' | 'published'
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
  createdAt: string
  updatedAt: string
}
