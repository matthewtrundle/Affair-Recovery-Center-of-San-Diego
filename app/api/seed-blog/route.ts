import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

// Sample blog posts data (from the current hardcoded blog page)
const blogPosts = [
  {
    slug: 'understanding-betrayal-trauma-brain-perspective',
    title: "Understanding Betrayal Trauma: A Brain-Based Perspective",
    excerpt: "Explore how betrayal trauma affects the brain and nervous system, and why traditional therapy approaches may fall short in the initial stages of recovery.",
    category: "recovery",
    publishedDate: "2024-09-15",
    readTime: 8,
    featured: true,
    author: "Jordan Zipkin, LMFT",
    status: "published",
  },
  {
    slug: 'first-90-days-after-discovery',
    title: "The First 90 Days After Discovery",
    excerpt: "A comprehensive guide to navigating the immediate aftermath of discovering infidelity, including what to expect and how to stabilize during crisis.",
    category: "recovery",
    publishedDate: "2024-09-10",
    readTime: 12,
    featured: true,
    author: "Jordan Zipkin, LMFT",
    status: "published",
  },
  {
    slug: 'rebuilding-trust-roadmap',
    title: "Rebuilding Trust: A Roadmap",
    excerpt: "Trust doesn't rebuild overnight. Learn the essential steps, realistic timelines, and practical strategies for reconstructing safety in your relationship.",
    category: "trust-building",
    publishedDate: "2024-09-05",
    readTime: 10,
    featured: true,
    author: "Jordan Zipkin, LMFT",
    status: "published",
  },
  {
    slug: 'breaking-cycle-hypervigilance',
    title: "Breaking the Cycle of Hypervigilance",
    excerpt: "Understanding how hypervigilance develops after betrayal and evidence-based techniques to calm your nervous system and regain emotional balance.",
    category: "self-care",
    publishedDate: "2024-08-28",
    readTime: 6,
    featured: false,
    author: "Jordan Zipkin, LMFT",
    status: "published",
  },
  {
    slug: 'when-partner-wont-do-work',
    title: "When Your Partner Won't Do the Work",
    excerpt: "Navigating recovery when you're the only one committed to healing. Strategies for protecting yourself while maintaining hope for your relationship.",
    category: "recovery",
    publishedDate: "2024-08-20",
    readTime: 9,
    featured: false,
    author: "Jordan Zipkin, LMFT",
    status: "published",
  },
  {
    slug: 'gottman-method-affair-recovery',
    title: "The Gottman Method for Affair Recovery",
    excerpt: "How research-backed Gottman techniques specifically address the unique challenges of rebuilding after infidelity and betrayal.",
    category: "communication",
    publishedDate: "2024-08-15",
    readTime: 7,
    featured: false,
    author: "Jordan Zipkin, LMFT",
    status: "published",
  },
  {
    slug: 'creating-safety-conversations',
    title: "Creating Safety in Conversations",
    excerpt: "Essential communication skills for discussing difficult topics without triggering defensiveness or emotional flooding.",
    category: "communication",
    publishedDate: "2024-08-10",
    readTime: 8,
    featured: false,
    author: "Jordan Zipkin, LMFT",
    status: "published",
  },
  {
    slug: 'self-compassion-during-recovery',
    title: "Self-Compassion During Recovery",
    excerpt: "Learning to be kind to yourself while healing from betrayal. Why self-criticism hinders recovery and how to develop a nurturing inner voice.",
    category: "self-care",
    publishedDate: "2024-08-05",
    readTime: 5,
    featured: false,
    author: "Jordan Zipkin, LMFT",
    status: "published",
  },
  {
    slug: 'when-trust-feels-impossible',
    title: "When Trust Feels Impossible",
    excerpt: "Working through the fear that you'll never be able to trust again. Understanding the difference between realistic caution and trauma-based fear.",
    category: "trust-building",
    publishedDate: "2024-07-30",
    readTime: 11,
    featured: false,
    author: "Jordan Zipkin, LMFT",
    status: "published",
  }
]

export async function POST(request: Request) {
  try {
    const payload = await getPayload({ config })

    // Check if posts already exist
    const existing = await payload.find({
      collection: 'posts',
      limit: 1,
    })

    if (existing.docs.length > 0) {
      return NextResponse.json({
        success: false,
        message: 'Posts already exist. Delete them first if you want to re-seed.',
        count: existing.totalDocs,
      })
    }

    // Fetch all categories to map slugs to IDs
    const categories = await payload.find({
      collection: 'categories',
      limit: 100,
    })

    // Create a map of slug -> ID
    const categoryMap = new Map(
      categories.docs.map((cat: any) => [cat.slug, cat.id])
    )

    const createdPosts = []

    for (const post of blogPosts) {
      // Get the category ID from the slug
      const categoryId = categoryMap.get(post.category)

      if (!categoryId) {
        console.warn(`Category "${post.category}" not found for post "${post.title}"`)
        continue
      }

      const created = await payload.create({
        collection: 'posts',
        data: {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      text: post.excerpt,
                    },
                  ],
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      text: 'Full content coming soon. This post was migrated from the original static data.',
                    },
                  ],
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          category: categoryId,
          author: post.author,
          publishedDate: post.publishedDate,
          readTime: post.readTime,
          featured: post.featured,
          status: post.status as 'draft' | 'published',
          seo: {
            metaTitle: post.title,
            metaDescription: post.excerpt,
          },
        },
      })

      createdPosts.push(created)
    }

    return NextResponse.json({
      success: true,
      message: `Successfully created ${createdPosts.length} blog posts`,
      posts: createdPosts.map((p) => ({ id: p.id, title: p.title, slug: p.slug })),
    })
  } catch (error: any) {
    console.error('Seed error:', error)
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to seed blog posts',
    }, { status: 500 })
  }
}

// GET endpoint to check status
export async function GET() {
  try {
    const payload = await getPayload({ config })

    const posts = await payload.find({
      collection: 'posts',
      limit: 100,
    })

    return NextResponse.json({
      success: true,
      count: posts.totalDocs,
      posts: posts.docs.map((p: any) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        status: p.status,
        featured: p.featured,
      })),
    })
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 })
  }
}
