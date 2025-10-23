import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// This would typically come from your CMS or MDX files
// For now, we'll create a simple structure for individual blog posts
const blogPosts = [
  {
    slug: 'understanding-betrayal-trauma-brain-perspective',
    title: 'Understanding Betrayal Trauma: A Brain-Based Perspective',
    content: `
      <h2>Understanding Betrayal Trauma</h2>
      <p>Betrayal trauma represents one of the most profound psychological injuries a person can experience. When someone we trust deeply violates that trust through infidelity or other forms of betrayal, the impact goes far beyond emotional hurt—it fundamentally alters how our brain processes safety, relationships, and our sense of reality.</p>

      <h3>The Neurobiological Impact</h3>
      <p>Recent neuroscience research reveals that betrayal trauma affects multiple brain systems simultaneously. The amygdala, our brain's alarm system, becomes hyperactive, constantly scanning for threats. The hippocampus, responsible for memory formation, can become impaired, leading to fragmented memories of the traumatic discovery.</p>

      <h3>Why Traditional Approaches May Fall Short</h3>
      <p>Many traditional therapy approaches focus primarily on communication and relationship skills. While these are important, they often miss the crucial first step: stabilizing the nervous system. When someone is in a state of betrayal trauma, their capacity for higher-order thinking and emotional regulation is significantly compromised.</p>

      <h3>A Brain-Informed Approach</h3>
      <p>Understanding the neurobiology of betrayal trauma informs every aspect of how I work with couples in recovery. We begin with nervous system regulation, helping both partners understand what's happening in their brains and bodies. Only when there's a foundation of safety can we begin the deeper work of rebuilding trust and intimacy.</p>
    `,
    excerpt: 'Explore how betrayal trauma affects the brain and nervous system, and why traditional therapy approaches may fall short in the initial stages of recovery.',
    date: '2024-09-15',
    readTime: 8,
    category: 'Recovery',
    author: 'Jordan Zipkin, LMFT'
  },
  {
    slug: 'first-90-days-after-discovery',
    title: 'The First 90 Days After Discovery',
    content: `
      <h2>Navigating the Immediate Aftermath</h2>
      <p>The first 90 days after discovering infidelity are often described as the most difficult period in a person's life. The world as you knew it has been shattered, and it can feel impossible to imagine ever feeling stable again. This guide will help you understand what to expect and how to navigate this crisis period.</p>

      <h3>What's Normal in the First 90 Days</h3>
      <ul>
        <li>Intense emotional swings that can change by the hour</li>
        <li>Obsessive thoughts about the betrayal</li>
        <li>Difficulty sleeping, eating, or concentrating</li>
        <li>Physical symptoms like nausea, headaches, or chest pain</li>
        <li>Hypervigilance and constant need for reassurance</li>
      </ul>

      <h3>Stabilization Strategies</h3>
      <p>During this phase, the focus should be on stabilization rather than major relationship decisions. This includes establishing safety, managing crisis symptoms, and beginning to process the trauma in a contained way.</p>

      <h3>When to Seek Professional Help</h3>
      <p>If you're experiencing thoughts of self-harm, inability to function at work or with family, or if symptoms aren't beginning to stabilize after several weeks, professional support is crucial. A therapist trained in betrayal trauma can provide specialized interventions to help you navigate this crisis.</p>
    `,
    excerpt: 'A comprehensive guide to navigating the immediate aftermath of discovering infidelity, including what to expect and how to stabilize during crisis.',
    date: '2024-09-10',
    readTime: 12,
    category: 'Recovery',
    author: 'Jordan Zipkin, LMFT'
  },
  {
    slug: 'rebuilding-trust-roadmap',
    title: 'Rebuilding Trust: A Roadmap',
    content: `
      <h2>The Trust Rebuilding Process</h2>
      <p>Trust doesn't rebuild overnight, and there's no magic timeline for healing. However, there are specific, research-backed steps that can guide couples toward rebuilding a foundation of safety and trust in their relationship.</p>

      <h3>Phase 1: Stabilization (Months 1-6)</h3>
      <p>The initial phase focuses on stopping harmful behaviors, establishing safety protocols, and beginning to understand the impact of the betrayal. This includes full disclosure, cutting contact with affair partners, and implementing transparency measures.</p>

      <h3>Phase 2: Processing (Months 6-18)</h3>
      <p>Once basic safety is established, couples can begin deeper work on understanding how the betrayal occurred, processing the trauma, and learning new relationship skills. This phase involves significant emotional work for both partners.</p>

      <h3>Phase 3: Integration (Months 18+)</h3>
      <p>The final phase involves integrating the lessons learned, creating new relationship patterns, and building a stronger foundation than existed before the betrayal. Many couples report their relationship is ultimately stronger than it was before the affair.</p>

      <h3>Key Milestones</h3>
      <p>While every couple's journey is unique, there are certain milestones that indicate progress: decreased intrusive thoughts, ability to be physically intimate again, spontaneous positive interactions, and hope for the future.</p>
    `,
    excerpt: 'Trust doesn\'t rebuild overnight. Learn the essential steps, realistic timelines, and practical strategies for reconstructing safety in your relationship.',
    date: '2024-09-05',
    readTime: 10,
    category: 'Trust Building',
    author: 'Jordan Zipkin, LMFT'
  }
]

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Affair Recovery Center of San Diego`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-deepTeal-600">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sage mb-6">
              <span className="text-sm font-medium">{post.category}</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-white/60 text-sm">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Blog */}
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}