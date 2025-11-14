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

  // Extract category name from string or Category object
  const categoryName = typeof post.category === 'string'
    ? post.category
    : post.category?.name || 'recovery'

  return {
    title: `${metaTitle} | Affair Recovery Center`,
    description: metaDescription,
    keywords: post.seo?.keywords || [categoryName, 'affair recovery', 'betrayal trauma'],
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

// Component to render Lexical content with enhanced visual design
function LexicalContent({ content }: { content: any }) {
  if (!content || !content.root) {
    return (
      <div className="text-white/60 italic">
        Content is being prepared. Please check back soon.
      </div>
    )
  }

  let sectionCount = 0

  // Helper to detect if text contains statistics
  const isStatistic = (text: string): boolean => {
    return /\d+%|\d+-\d+%|\d+ (months?|years?|weeks?|days?)/.test(text)
  }

  // Helper to extract and highlight statistics
  const highlightStatistics = (text: string): React.ReactNode => {
    const statRegex = /(\d+%|\d+-\d+%|\d+ (?:months?|years?|weeks?|days?))/g
    const parts = text.split(statRegex)

    return parts.map((part, i) => {
      if (statRegex.test(part)) {
        return (
          <span key={i} className="inline-block px-2 py-0.5 bg-turquoise/20 border border-turquoise/30 rounded text-turquoise font-semibold">
            {part}
          </span>
        )
      }
      return <span key={i}>{part}</span>
    })
  }

  // Helper to detect if paragraph contains table markdown
  const isTableRow = (text: string): boolean => {
    return text.trim().startsWith('|') && text.trim().endsWith('|')
  }

  // Helper to parse and render markdown tables
  const renderTable = (rows: string[]): React.ReactNode => {
    if (rows.length < 3) return null // Need at least header, separator, and one data row

    const parseRow = (row: string): string[] => {
      return row.split('|').map(cell => cell.trim()).filter(cell => cell)
    }

    const headers = parseRow(rows[0])
    const dataRows = rows.slice(2).map(parseRow) // Skip separator row

    return (
      <div className="my-10 overflow-x-auto">
        <table className="w-full border-collapse bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-turquoise/20 border-b border-white/20">
              {headers.map((header, i) => (
                <th key={i} className="px-6 py-4 text-left text-white font-semibold border-r border-white/10 last:border-r-0">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors">
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-6 py-4 text-white/90 border-r border-white/10 last:border-r-0">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const renderNode = (node: any, depth: number = 0): React.ReactNode => {
    if (!node) return null

    switch (node.type) {
      case 'root':
        // Collect consecutive table rows and render as table
        const children: React.ReactNode[] = []
        let tableBuffer: any[] = []

        node.children?.forEach((child: any, i: number) => {
          if (child.type === 'paragraph') {
            const text = child.children?.map((c: any) => c.text || '').join('').trim()
            if (isTableRow(text)) {
              tableBuffer.push(text)
              return
            }
          }

          // If we have accumulated table rows and current node is not a table row, render the table
          if (tableBuffer.length > 0) {
            children.push(<div key={`table-${i}`}>{renderTable(tableBuffer)}</div>)
            tableBuffer = []
          }

          children.push(<div key={i}>{renderNode(child, depth + 1)}</div>)
        })

        // Render any remaining table rows
        if (tableBuffer.length > 0) {
          children.push(<div key="table-final">{renderTable(tableBuffer)}</div>)
        }

        return <div className="space-y-8">{children}</div>

      case 'paragraph':
        const paragraphText = node.children?.map((c: any) => c.text || '').join('')
        const containsStats = isStatistic(paragraphText)

        // Render paragraph with stat highlighting if needed
        const paragraphContent = node.children?.map((child: any, i: number) => {
          if (child.type === 'text' && containsStats) {
            return <span key={i}>{highlightStatistics(child.text || '')}</span>
          }
          return renderNode(child, depth + 1)
        })

        return (
          <p className="text-white/90 leading-[1.8] text-lg mb-6">
            {paragraphContent}
          </p>
        )

      case 'heading':
        const HeadingTag = `h${node.tag}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        const isH2 = node.tag === 'h2'

        sectionCount++

        const headingClasses = {
          h1: 'text-5xl font-heading font-bold text-white mt-16 mb-8 pb-4 border-b-2 border-turquoise/30',
          h2: 'text-3xl font-heading font-bold text-white mt-14 mb-6 relative',
          h3: 'text-2xl font-heading font-semibold text-turquoise mt-10 mb-4',
          h4: 'text-xl font-heading font-semibold text-white/90 mt-8 mb-3',
          h5: 'text-lg font-heading font-semibold text-white/80 mt-6 mb-2',
          h6: 'text-base font-heading font-semibold text-white/70 mt-4 mb-2',
        }

        return (
          <>
            {isH2 && sectionCount > 1 && (
              <div className="my-12 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="w-2 h-2 rounded-full bg-turquoise/50" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            )}
            <HeadingTag className={headingClasses[HeadingTag]}>
              {isH2 && (
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-turquoise to-lime rounded-full opacity-60" />
              )}
              {node.children?.map((child: any, i: number) => renderNode(child, depth + 1))}
            </HeadingTag>
          </>
        )

      case 'list':
        const ListTag = node.tag === 'ol' ? 'ol' : 'ul'
        return (
          <div className="my-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <ListTag className={`${node.tag === 'ol' ? 'list-decimal' : 'list-disc'} list-inside text-white/90 space-y-3 text-lg leading-relaxed`}>
              {node.children?.map((child: any, i: number) => renderNode(child, depth + 1))}
            </ListTag>
          </div>
        )

      case 'listitem':
        return (
          <li className="ml-2 pl-2">
            {node.children?.map((child: any, i: number) => {
              // For list items, render children directly without extra paragraph wrapper
              if (child.type === 'paragraph') {
                return <span key={i} className="inline">{child.children?.map((c: any, j: number) => renderNode(c, depth + 1))}</span>
              }
              return renderNode(child, depth + 1)
            })}
          </li>
        )

      case 'text':
        let textContent = node.text || ''
        let className = 'text-white/90'

        // Check for bold formatting (bit flag 1 for bold in Lexical)
        if (node.format && Array.isArray(node.format)) {
          if (node.format.includes('bold')) {
            className += ' font-bold text-white'
          }
          if (node.format.includes('italic')) {
            className += ' italic'
          }
          if (node.format.includes('underline')) {
            className += ' underline'
          }
        } else if (typeof node.format === 'number') {
          if (node.format & 1) className += ' font-bold text-white' // Bold
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
            className="text-turquoise hover:text-lime underline decoration-turquoise/50 hover:decoration-lime/50 transition-all font-medium"
          >
            {node.children?.map((child: any, i: number) => renderNode(child, depth + 1))}
          </a>
        )

      case 'quote':
        return (
          <blockquote className="my-10 p-6 bg-gradient-to-br from-turquoise/10 to-lime/5 border-l-4 border-turquoise rounded-r-xl">
            <div className="flex gap-4">
              <svg className="w-8 h-8 text-turquoise/40 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <div className="italic text-white/90 text-lg leading-relaxed">
                {node.children?.map((child: any, i: number) => renderNode(child, depth + 1))}
              </div>
            </div>
          </blockquote>
        )

      default:
        // Fallback for unknown node types
        if (node.children) {
          return <>{node.children.map((child: any, i: number) => renderNode(child, depth + 1))}</>
        }
        return null
    }
  }

  return <div className="blog-content">{renderNode(content.root)}</div>
}
