'use client'

import { useState, useMemo } from 'react'
import { Metadata } from 'next'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Calendar, Clock, Tag, Mail, ArrowRight, BookOpen } from 'lucide-react'
import { PremiumCard } from '@/components/ui/PremiumCard'
import Link from 'next/link'

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    slug: 'understanding-betrayal-trauma-brain-perspective',
    title: "Understanding Betrayal Trauma: A Brain-Based Perspective",
    excerpt: "Explore how betrayal trauma affects the brain and nervous system, and why traditional therapy approaches may fall short in the initial stages of recovery.",
    category: "Recovery",
    date: "2024-09-15",
    readTime: 8,
    image: "/images/blog/betrayal-trauma-brain.jpg",
    featured: true,
    author: "Jordan Zipkin, LMFT"
  },
  {
    id: 2,
    slug: 'first-90-days-after-discovery',
    title: "The First 90 Days After Discovery",
    excerpt: "A comprehensive guide to navigating the immediate aftermath of discovering infidelity, including what to expect and how to stabilize during crisis.",
    category: "Recovery",
    date: "2024-09-10",
    readTime: 12,
    image: "/images/blog/first-90-days.jpg",
    featured: true,
    author: "Jordan Zipkin, LMFT"
  },
  {
    id: 3,
    slug: 'rebuilding-trust-roadmap',
    title: "Rebuilding Trust: A Roadmap",
    excerpt: "Trust doesn't rebuild overnight. Learn the essential steps, realistic timelines, and practical strategies for reconstructing safety in your relationship.",
    category: "Trust Building",
    date: "2024-09-05",
    readTime: 10,
    image: "/images/blog/rebuilding-trust.jpg",
    featured: true,
    author: "Jordan Zipkin, LMFT"
  },
  {
    id: 4,
    slug: 'breaking-cycle-hypervigilance',
    title: "Breaking the Cycle of Hypervigilance",
    excerpt: "Understanding how hypervigilance develops after betrayal and evidence-based techniques to calm your nervous system and regain emotional balance.",
    category: "Self-Care",
    date: "2024-08-28",
    readTime: 6,
    image: "/images/blog/hypervigilance.jpg",
    featured: false,
    author: "Jordan Zipkin, LMFT"
  },
  {
    id: 5,
    slug: 'when-partner-wont-do-work',
    title: "When Your Partner Won't Do the Work",
    excerpt: "Navigating recovery when you're the only one committed to healing. Strategies for protecting yourself while maintaining hope for your relationship.",
    category: "Recovery",
    date: "2024-08-20",
    readTime: 9,
    image: "/images/blog/partner-wont-work.jpg",
    featured: false,
    author: "Jordan Zipkin, LMFT"
  },
  {
    id: 6,
    slug: 'gottman-method-affair-recovery',
    title: "The Gottman Method for Affair Recovery",
    excerpt: "How research-backed Gottman techniques specifically address the unique challenges of rebuilding after infidelity and betrayal.",
    category: "Communication",
    date: "2024-08-15",
    readTime: 7,
    image: "/images/blog/gottman-method.jpg",
    featured: false,
    author: "Jordan Zipkin, LMFT"
  },
  {
    id: 7,
    slug: 'creating-safety-conversations',
    title: "Creating Safety in Conversations",
    excerpt: "Essential communication skills for discussing difficult topics without triggering defensiveness or emotional flooding.",
    category: "Communication",
    date: "2024-08-10",
    readTime: 8,
    image: "/images/blog/safe-conversations.jpg",
    featured: false,
    author: "Jordan Zipkin, LMFT"
  },
  {
    id: 8,
    slug: 'self-compassion-during-recovery',
    title: "Self-Compassion During Recovery",
    excerpt: "Learning to be kind to yourself while healing from betrayal. Why self-criticism hinders recovery and how to develop a nurturing inner voice.",
    category: "Self-Care",
    date: "2024-08-05",
    readTime: 5,
    image: "/images/blog/self-compassion.jpg",
    featured: false,
    author: "Jordan Zipkin, LMFT"
  },
  {
    id: 9,
    slug: 'when-trust-feels-impossible',
    title: "When Trust Feels Impossible",
    excerpt: "Working through the fear that you'll never be able to trust again. Understanding the difference between realistic caution and trauma-based fear.",
    category: "Trust Building",
    date: "2024-07-30",
    readTime: 11,
    image: "/images/blog/trust-impossible.jpg",
    featured: false,
    author: "Jordan Zipkin, LMFT"
  }
]

const categories = ["All", "Recovery", "Trust Building", "Communication", "Self-Care"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showLoadMore, setShowLoadMore] = useState(true)
  const [visiblePosts, setVisiblePosts] = useState(6)

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts

    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredPosts.length

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6)
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
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-deepTeal-900/90 to-deepTeal-700/90" />

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-turquoise mb-6"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Educational Resources</span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
              Resources for{' '}
              <span className="bg-gradient-to-r from-lime to-turquoise bg-clip-text text-transparent">
                Healing
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
              Evidence-based insights and practical guidance for your journey toward recovery and rebuilding trust.
            </p>

            {/* Search and Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
            >
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-turquoise/50 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-turquoise/50 transition-all appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-deepTeal-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-lime to-turquoise text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Load More Button */}
          {hasMorePosts && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={loadMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-lime to-turquoise text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Load More Articles
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-heading text-white mb-2">No articles found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </div>
  )
}

// Blog Post Card Component
function BlogPostCard({ post, index }: { post: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <PremiumCard
          variant="glass"
          hoverEffect="tilt"
          className="h-full group cursor-pointer overflow-hidden"
        >
          {/* Featured Image */}
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-turquoise/20 to-lime/20">
          {/* Placeholder for featured image */}
          <div className="absolute inset-0 bg-gradient-to-br from-deepTeal-600 to-deepTeal-800 flex items-center justify-center">
            <div className="text-white/30 text-4xl">📖</div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-xs font-medium text-white">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-lime/80 backdrop-blur-sm text-xs font-medium text-white">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading font-semibold text-white group-hover:text-turquoise transition-colors overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/70 text-sm leading-relaxed overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-white/50">By {post.author}</p>
          </div>

          {/* Read More Arrow */}
          <motion.div
            className="flex items-center gap-2 text-lime text-sm font-medium hover:text-turquoise transition-colors"
            whileHover={{ x: 5 }}
          >
            Read Article
            <ArrowRight className="w-4 h-4" />
          </motion.div>
          </div>
        </PremiumCard>
      </Link>
    </motion.div>
  )
}

// Newsletter CTA Component
function NewsletterCTA() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <PremiumCard variant="gradient" hoverEffect="glow" className="text-center">
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-lime"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Stay Connected</span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">
                Get the latest insights delivered to your inbox
              </h2>

              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join our community and receive evidence-based guidance, practical tools, and hope for your healing journey.
              </p>

              <motion.a
                href="mailto:hello@affairrecoverysd.com?subject=Newsletter Signup&body=I'd like to subscribe to your newsletter for healing resources and updates."
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-deepTeal-800 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="w-5 h-5" />
                Subscribe via Email
              </motion.a>

              <p className="text-sm text-white/60">
                No spam, ever. Unsubscribe anytime. Your email is safe with us.
              </p>
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </section>
  )
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}