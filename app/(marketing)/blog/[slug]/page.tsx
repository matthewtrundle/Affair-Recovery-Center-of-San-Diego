import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowLeft, User } from 'lucide-react'
import { getPostBySlug, getPosts } from '@/lib/payload'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Props = {
  params: Promise<{ slug: string }>
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Affair Recovery Center',
    }
  }

  const metaTitle = post.seo?.metaTitle || post.title
  const metaDescription = post.seo?.metaDescription || post.excerpt

  return {
    title: `${metaTitle} | Affair Recovery Center`,
    description: metaDescription,
    keywords: post.seo?.keywords || [post.category, 'affair recovery', 'betrayal trauma'],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryLabel = (category: string | any) => {
    // Handle both string (legacy) and relationship object
    if (typeof category === 'string') {
      const map: Record<string, string> = {
        'recovery': 'Recovery',
        'trust-building': 'Trust Building',
        'communication': 'Communication',
        'self-care': 'Self-Care',
      }
      return map[category] || category
    }
    return category.name
  }

  return (
    <article className="min-h-screen bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-deepTeal-600 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-turquoise text-sm font-medium">
              <Tag className="w-3 h-3" />
              {getCategoryLabel(post.category)}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mt-8 rounded-2xl overflow-hidden">
              {/* Placeholder - implement image rendering based on your Media collection */}
              <div className="w-full h-96 bg-gradient-to-br from-deepTeal-600 to-deepTeal-800 flex items-center justify-center">
                <span className="text-white/30 text-6xl">📖</span>
              </div>
            </div>
          )}

          {/* Excerpt */}
          <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <p className="text-xl text-white/80 leading-relaxed italic">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <LexicalContent content={post.content} />
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-white/60 text-sm font-medium mb-4">Tagged with:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-turquoise/20 to-lime/20 backdrop-blur-sm border border-white/20 rounded-2xl text-center">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            Schedule a consultation to learn how I can help you recover from betrayal and rebuild trust.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lime to-turquoise text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Related Posts - Coming Soon */}
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold text-white mb-6">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Placeholder for related posts */}
            <Link
              href="/blog"
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
            >
              <p className="text-white/60 text-sm mb-2">Explore More</p>
              <h3 className="text-xl font-heading font-semibold text-white group-hover:text-turquoise transition-colors">
                View All Articles
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

// Component to render Lexical content
function LexicalContent({ content }: { content: any }) {
  if (!content || !content.root) {
    return (
      <div className="text-white/60 italic">
        Content is being prepared. Please check back soon.
      </div>
    )
  }

  // Simple renderer for Lexical content
  // This is a basic implementation - you may want to enhance it with more node types
  const renderNode = (node: any): React.ReactNode => {
    if (!node) return null

    switch (node.type) {
      case 'root':
        return <div className="space-y-4">{node.children?.map((child: any, i: number) => <div key={i}>{renderNode(child)}</div>)}</div>

      case 'paragraph':
        return <p className="text-white/90 leading-relaxed">{node.children?.map((child: any, i: number) => renderNode(child))}</p>

      case 'heading':
        const HeadingTag = `h${node.tag}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        const headingClasses = {
          h1: 'text-4xl font-heading font-bold text-white mt-8 mb-4',
          h2: 'text-3xl font-heading font-bold text-white mt-6 mb-3',
          h3: 'text-2xl font-heading font-semibold text-white mt-5 mb-2',
          h4: 'text-xl font-heading font-semibold text-white mt-4 mb-2',
          h5: 'text-lg font-heading font-semibold text-white mt-3 mb-2',
          h6: 'text-base font-heading font-semibold text-white mt-2 mb-1',
        }
        return <HeadingTag className={headingClasses[HeadingTag]}>{node.children?.map((child: any, i: number) => renderNode(child))}</HeadingTag>

      case 'list':
        const ListTag = node.listType === 'number' ? 'ol' : 'ul'
        return <ListTag className={`${node.listType === 'number' ? 'list-decimal' : 'list-disc'} list-inside text-white/90 space-y-2 my-4`}>{node.children?.map((child: any, i: number) => renderNode(child))}</ListTag>

      case 'listitem':
        return <li className="ml-4">{node.children?.map((child: any, i: number) => renderNode(child))}</li>

      case 'text':
        let textContent = node.text || ''
        let className = ''

        if (node.format) {
          if (node.format & 1) className += ' font-bold' // Bold
          if (node.format & 2) className += ' italic' // Italic
          if (node.format & 8) className += ' underline' // Underline
        }

        return <span className={className}>{textContent}</span>

      case 'link':
        return (
          <a
            href={node.url}
            target={node.newTab ? '_blank' : undefined}
            rel={node.newTab ? 'noopener noreferrer' : undefined}
            className="text-turquoise hover:text-lime underline transition-colors"
          >
            {node.children?.map((child: any, i: number) => renderNode(child))}
          </a>
        )

      case 'quote':
        return (
          <blockquote className="border-l-4 border-turquoise pl-6 my-6 italic text-white/80">
            {node.children?.map((child: any, i: number) => renderNode(child))}
          </blockquote>
        )

      default:
        // Fallback for unknown node types
        if (node.children) {
          return <>{node.children.map((child: any, i: number) => renderNode(child))}</>
        }
        return null
    }
  }

  return <div>{renderNode(content.root)}</div>
}
