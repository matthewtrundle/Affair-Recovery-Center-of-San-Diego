import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { BookOpen, Mail } from 'lucide-react'
import { getPosts, getCategories } from '@/lib/payload'
import { BlogList } from '@/components/blog/BlogList'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Resources for Healing | Affair Recovery Center',
  description: 'Evidence-based insights and practical guidance for your journey toward recovery and rebuilding trust after infidelity and betrayal.',
  keywords: ['betrayal trauma', 'affair recovery', 'relationship healing', 'trust building', 'couples therapy San Diego'],
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  // Fetch all published posts and categories from Payload
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories(),
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-deepTeal-600">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-deepTeal-900/90 to-deepTeal-700/90" />

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-turquoise mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Educational Resources</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-display font-light text-white mb-6">
              Resources for{' '}
              <span className="bg-gradient-to-r from-lime to-turquoise bg-clip-text text-transparent">
                Healing
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed">
              Evidence-based insights and practical guidance for your journey toward recovery and rebuilding trust.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* BlogList component handles search, filters, and rendering */}
          <BlogList initialPosts={posts} categories={categories} />
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </div>
  )
}

// Newsletter CTA Component
function NewsletterCTA() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PremiumCard variant="gradient" hoverEffect="glow" className="text-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-lime">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Stay Connected</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-display font-light text-white">
                Get the latest insights delivered to your inbox
              </h2>

              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join our community and receive evidence-based guidance, practical tools, and hope for your healing journey.
              </p>

              <Button size="lg" asChild>
                <Link href="/newsletter">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe to Newsletter
                </Link>
              </Button>

              <p className="text-sm text-white/60">
                No spam, ever. Unsubscribe anytime. Your email is safe with us.
              </p>
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  )
}
