'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import type { Post, Category } from '@/lib/payload'

interface BlogListProps {
  initialPosts: Post[]
  categories: Category[]
}

// Image mapping for blog post categories/themes
// All available unique blog images (29 total - ensuring variety)
const ALL_BLOG_IMAGES = [
  // Couple/Relationship Images
  '/images/sections/couple-hero-healing.webp',
  '/images/sections/hero-couple-portrait.webp',
  '/images/sections/feature-couple-beach.webp',
  '/images/couples/beach-conversation.webp',

  // Metaphor/Abstract Images
  '/images/metaphor/metaphor-journey.webp',
  '/images/metaphor/metaphor-calm-waters.webp',
  '/images/metaphor/metaphor-connection.webp',

  // San Diego Beach Scenes
  '/images/sections/beach-la-jolla-cove.webp',
  '/images/sections/beach-torrey-pines.webp',
  '/images/sections/beach-sunset-cliffs.webp',
  '/images/sections/beach-coronado.webp',
  '/images/sections/beach-del-mar.webp',
  '/images/sections/beach-windansea.webp',
  '/images/sections/beach-tide-pools.webp',
  '/images/sections/beach-zen-stones.webp',
  '/images/sections/beach-driftwood-heart.webp',
  '/images/sections/beach-sage-plants.webp',
  '/images/beach/windansea-couple-walk.webp',
  '/images/beach/torrey-pines-sunset.webp',

  // Feature/Transformation Images
  '/images/sections/feature-transformation.webp',
  '/images/sections/feature-zen-garden.webp',
  '/images/sections/section-marble-texture.webp',

  // Parallax/Abstract
  '/images/parallax/hero-parallax-ocean.webp',
  '/images/parallax/hero-abstract-journey.webp',
]

// Track which images have been used to ensure uniqueness
const usedImages = new Set<string>()

const getPostImage = (post: Post): string => {
  // Hash the post ID to get a consistent index for this specific post
  const postIdHash = post.id ?
    String(post.id).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) :
    Math.floor(Math.random() * ALL_BLOG_IMAGES.length)

  // Start with the hash-based index
  let index = postIdHash % ALL_BLOG_IMAGES.length
  let attempts = 0

  // Find an unused image, cycling through the array if needed
  while (usedImages.has(ALL_BLOG_IMAGES[index]) && attempts < ALL_BLOG_IMAGES.length) {
    index = (index + 1) % ALL_BLOG_IMAGES.length
    attempts++
  }

  const selectedImage = ALL_BLOG_IMAGES[index]
  usedImages.add(selectedImage)

  return selectedImage
}

export function BlogList({ initialPosts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [visiblePosts, setVisiblePosts] = useState(6)

  // Build category options with "All" prepended
  const categoryOptions = useMemo(() => {
    return ["All", ...categories.map(c => c.name)]
  }, [categories])

  // Helper to get category slug from post
  const getCategorySlug = (post: Post): string => {
    if (typeof post.category === 'string') {
      return post.category
    }
    return post.category.slug
  }

  // Helper to get category name from post
  const getCategoryName = (post: Post): string => {
    if (typeof post.category === 'string') {
      // Legacy: try to find matching category by slug
      const found = categories.find(c => c.slug === post.category)
      return found?.name || post.category
    }
    return post.category.name
  }

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let filtered = initialPosts

    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => {
        const categoryName = getCategoryName(post)
        return categoryName === selectedCategory
      })
    }

    if (searchQuery) {
      filtered = filtered.filter(post => {
        const categoryText = getCategoryName(post)
        return (
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          categoryText.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })
    }

    return filtered
  }, [initialPosts, selectedCategory, searchQuery, categories])

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

  const getCategoryLabel = (post: Post): string => {
    return getCategoryName(post)
  }

  return (
    <>
      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12"
      >
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
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
            {categoryOptions.map(category => (
              <option key={category} value={category} className="bg-deepTeal-800 text-white">
                {category}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Category Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-3 justify-center mb-12"
      >
        {categoryOptions.map((category) => (
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
            <BlogPostCard key={post.id} post={post} index={index} formatDate={formatDate} getCategoryLabel={() => getCategoryLabel(post)} />
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
          <Button
            onClick={loadMore}
            variant="secondary"
            size="lg"
            className="group"
          >
            Load More Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
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
    </>
  )
}

// Blog Post Card Component
function BlogPostCard({ post, index, formatDate, getCategoryLabel }: {
  post: Post
  index: number
  formatDate: (date: string) => string
  getCategoryLabel: () => string
}) {
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
            <Image
              src={getPostImage(post)}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/60 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs font-medium text-white">
                <Tag className="w-3 h-3" />
                {getCategoryLabel()}
              </span>
            </div>

            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-3 right-3 z-10">
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
                {formatDate(post.publishedDate)}
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </div>
              )}
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
