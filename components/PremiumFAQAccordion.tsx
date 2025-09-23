'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, Filter, BookOpen, Clock, CreditCard, MessageCircle, User, X } from 'lucide-react'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { RevealOnScroll } from '@/components/sections/ParallaxSection'

interface FAQ {
  question: string
  answer: string
  tags?: string[]
}

interface FAQCategory {
  category: string
  icon: React.ReactNode
  description: string
  questions: FAQ[]
}

interface PremiumFAQAccordionProps {
  categories: FAQCategory[]
}

const categoryIcons = {
  'About Recovery': BookOpen,
  'About Therapy': MessageCircle,
  'Practical Matters': CreditCard,
  'Getting Started': User,
  'Logistics & Scheduling': Clock,
  'Insurance & Payment': CreditCard,
}

export function PremiumFAQAccordion({ categories }: PremiumFAQAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showSearch, setShowSearch] = useState(false)

  const toggleItem = (question: string) => {
    setOpenItems(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    )
  }

  const filteredCategories = useMemo(() => {
    return categories
      .map(category => ({
        ...category,
        questions: category.questions.filter(faq => {
          const matchesSearch = !searchQuery ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

          const matchesCategory = !selectedCategory || category.category === selectedCategory

          return matchesSearch && matchesCategory
        })
      }))
      .filter(category => category.questions.length > 0)
  }, [categories, searchQuery, selectedCategory])

  const totalQuestions = filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0)

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <RevealOnScroll>
        <PremiumCard variant="glass" className="p-6">
          <div className="flex flex-col space-y-4">
            {/* Search Toggle and Category Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSearch(!showSearch)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    showSearch || searchQuery
                      ? 'bg-sage text-white'
                      : 'bg-white/20 text-navy hover:bg-white/30'
                  }`}
                >
                  <Search className="h-4 w-4" />
                  Search FAQs
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(null)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    selectedCategory
                      ? 'bg-coral text-white'
                      : 'bg-white/20 text-navy hover:bg-white/30'
                  }`}
                >
                  <Filter className="h-4 w-4" />
                  {selectedCategory ? 'Clear Filter' : 'All Categories'}
                </motion.button>
              </div>

              <div className="text-sm text-navy/70">
                {totalQuestions} question{totalQuestions !== 1 ? 's' : ''} found
              </div>
            </div>

            {/* Search Input */}
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-navy/40" />
                    <input
                      type="text"
                      placeholder="Search questions, answers, or topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage/50 transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-navy/40 hover:text-navy transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.category ? null : category.category
                  )}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category.category
                      ? 'bg-sage text-white shadow-lg'
                      : 'bg-white/20 text-navy hover:bg-white/30'
                  }`}
                >
                  {category.icon}
                  {category.category}
                </motion.button>
              ))}
            </div>
          </div>
        </PremiumCard>
      </RevealOnScroll>

      {/* FAQ Categories */}
      <AnimatePresence>
        {filteredCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <RevealOnScroll delay={categoryIndex * 0.1}>
              <div className="mb-8">
                {/* Category Header */}
                <PremiumCard variant="gradient" hoverEffect="glow" className="mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-white/20 rounded-lg"
                    >
                      {category.icon}
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-heading font-semibold text-white mb-2">
                        {category.category}
                      </h2>
                      <p className="text-white/70">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </PremiumCard>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <motion.div
                      key={faq.question}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: questionIndex * 0.05 }}
                    >
                      <PremiumCard
                        variant="glass"
                        hoverEffect="lift"
                        className="overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(faq.question)}
                          className="w-full px-6 py-4 text-left flex items-start justify-between hover:bg-white/5 transition-colors group"
                          aria-expanded={openItems.includes(faq.question)}
                        >
                          <span className="font-semibold text-navy pr-4 group-hover:text-sage transition-colors">
                            {faq.question}
                          </span>
                          <motion.div
                            animate={{
                              rotate: openItems.includes(faq.question) ? 180 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 mt-1"
                          >
                            <ChevronDown className="h-5 w-5 text-sage" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {openItems.includes(faq.question) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <motion.div
                                initial={{ y: -10 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="px-6 pb-6"
                              >
                                <div className="h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent mb-4" />
                                <p className="text-slate leading-relaxed whitespace-pre-wrap">
                                  {faq.answer}
                                </p>
                                {faq.tags && (
                                  <div className="flex flex-wrap gap-2 mt-4">
                                    {faq.tags.map((tag, tagIndex) => (
                                      <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: tagIndex * 0.05 }}
                                        className="px-2 py-1 bg-sage/10 text-sage text-xs rounded-full"
                                      >
                                        {tag}
                                      </motion.span>
                                    ))}
                                  </div>
                                )}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </PremiumCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* No Results State */}
      {filteredCategories.length === 0 && (
        <RevealOnScroll>
          <PremiumCard variant="glass" className="text-center py-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Search className="h-12 w-12 text-sage/50 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                No questions found
              </h3>
              <p className="text-slate mb-6">
                Try adjusting your search terms or clearing the filters.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory(null)
                  setShowSearch(false)
                }}
                className="px-6 py-2 bg-sage text-white rounded-lg hover:bg-sage/90 transition-colors"
              >
                Clear All Filters
              </motion.button>
            </motion.div>
          </PremiumCard>
        </RevealOnScroll>
      )}
    </div>
  )
}