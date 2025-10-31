import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

// Initial categories for the blog
const categories = [
  {
    name: 'Recovery',
    slug: 'recovery',
    description: 'Resources and guidance for healing from betrayal and affair recovery',
    color: 'turquoise',
  },
  {
    name: 'Trust Building',
    slug: 'trust-building',
    description: 'Strategies and insights for rebuilding trust in relationships',
    color: 'lime',
  },
  {
    name: 'Communication',
    slug: 'communication',
    description: 'Tools and techniques for effective couple communication',
    color: 'deepTeal',
  },
  {
    name: 'Self-Care',
    slug: 'self-care',
    description: 'Self-care practices for individual healing and wellbeing',
    color: 'olive',
  },
]

export async function POST(request: Request) {
  try {
    const payload = await getPayload({ config })

    // Check if categories already exist
    const existing = await payload.find({
      collection: 'categories',
      limit: 1,
    })

    if (existing.docs.length > 0) {
      return NextResponse.json({
        success: false,
        message: 'Categories already exist. Delete them first if you want to re-seed.',
        count: existing.totalDocs,
      })
    }

    // Create all categories
    const createdCategories = []
    for (const category of categories) {
      const created = await payload.create({
        collection: 'categories',
        data: category,
      })
      createdCategories.push(created)
    }

    return NextResponse.json({
      success: true,
      message: `Successfully created ${createdCategories.length} categories`,
      categories: createdCategories.map(c => ({ id: c.id, name: c.name, slug: c.slug })),
    })
  } catch (error: any) {
    console.error('Category seeding error:', error)
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to seed categories',
    }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const payload = await getPayload({ config })

    const categories = await payload.find({
      collection: 'categories',
      limit: 100,
    })

    return NextResponse.json({
      success: true,
      count: categories.totalDocs,
      categories: categories.docs,
    })
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to fetch categories',
    }, { status: 500 })
  }
}
