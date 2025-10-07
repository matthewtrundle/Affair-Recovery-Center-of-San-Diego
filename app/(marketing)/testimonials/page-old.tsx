'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  Quote,
  Star,
  Heart,
  Filter,
  Play,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  ChevronDown
} from 'lucide-react'
import { CTABand } from '@/components/sections/CTABand'

// Extended testimonials data with categories
const testimonials = [
  {
    id: 1,
    content: "Jordan helped us navigate the darkest period of our marriage. Her direct but compassionate approach gave us the tools we needed to rebuild trust. We're actually stronger now than we were before.",
    author: 'Sarah M.',
    role: 'After 18 months of therapy',
    rating: 5,
    highlight: 'Stronger than before',
    category: 'rebuilding-trust',
    timeframe: '18 months',
    beforeAfter: {
      before: "We couldn't even be in the same room without fighting. Trust felt impossible to rebuild.",
      after: "We communicate openly and honestly now. Our intimacy has returned in ways we never expected."
    }
  },
  {
    id: 2,
    content: "I didn't think we could survive the affair, but Jordan showed us a path forward. The Gottman Method exercises helped us communicate in ways we never had before. We're grateful for her guidance.",
    author: 'Mark & Jennifer T.',
    role: 'Married 15 years',
    rating: 5,
    highlight: 'Path forward',
    category: 'finding-hope',
    timeframe: '12 months',
    beforeAfter: {
      before: "We were ready to file for divorce. The betrayal felt like the end of everything.",
      after: "We've learned to fight for our marriage instead of against each other."
    }
  },
  {
    id: 3,
    content: "Jordan's understanding of betrayal trauma was exactly what we needed. She helped my partner understand my pain while also helping me see their perspective. The brain science explanations made everything make sense.",
    author: 'Anonymous',
    role: '6 months post-discovery',
    rating: 5,
    highlight: 'Understanding trauma',
    category: 'finding-hope',
    timeframe: '8 months',
    beforeAfter: {
      before: "I felt like I was going crazy. The triggers, the hypervigilance - I thought I was broken.",
      after: "Understanding the science helped me realize my reactions were normal. Now I have tools to cope."
    }
  },
  {
    id: 4,
    content: "We were skeptical that therapy could help after such a devastating betrayal. Jordan's structured approach and evidence-based methods gave us hope. Six months later, we have a marriage we never thought possible.",
    author: 'David & Lisa R.',
    role: 'Together 20 years',
    rating: 5,
    highlight: 'Never thought possible',
    category: 'starting-over',
    timeframe: '6 months',
    beforeAfter: {
      before: "We were living like roommates, completely disconnected and resentful.",
      after: "We're dating again, falling in love all over, but with more wisdom this time."
    }
  },
  {
    id: 5,
    content: "The individual sessions Jordan recommended were crucial for my healing. She helped me understand my own patterns and gave me the strength to do the hard work of rebuilding our relationship.",
    author: 'Michael S.',
    role: 'Betrayed partner',
    rating: 5,
    highlight: 'Personal growth',
    category: 'rebuilding-trust',
    timeframe: '14 months',
    beforeAfter: {
      before: "I blamed myself and couldn't see my own worth. The shame was overwhelming.",
      after: "I've learned to set boundaries and communicate my needs. Our relationship is more authentic now."
    }
  },
  {
    id: 6,
    content: "Jordan created a safe space for both of us to be vulnerable. Her expertise in affair recovery is evident in every session. We learned not just to survive, but to create something beautiful from the ashes.",
    author: 'Rachel & Tom K.',
    role: 'High school sweethearts',
    rating: 5,
    highlight: 'Beautiful from ashes',
    category: 'starting-over',
    timeframe: '10 months',
    beforeAfter: {
      before: "25 years together felt meaningless. We didn't know who we were anymore.",
      after: "We've rediscovered ourselves and each other. Our love is deeper and more intentional."
    }
  },
  {
    id: 7,
    content: "The homework assignments and practical tools Jordan gave us were game-changers. We practice the Gottman exercises daily and our emotional intimacy has grown tremendously.",
    author: 'Amanda L.',
    role: 'Mother of two',
    rating: 5,
    highlight: 'Daily practice',
    category: 'rebuilding-trust',
    timeframe: '9 months',
    beforeAfter: {
      before: "We barely spoke except about the kids and logistics. Emotional connection felt impossible.",
      after: "We have daily check-ins and weekly date nights. We're a team again."
    }
  },
  {
    id: 8,
    content: "Jordan's approach is both scientific and deeply human. She helped us understand the neuroscience of betrayal while also honoring our pain. We've not just healed - we've grown.",
    author: 'Carlos & Maria V.',
    role: 'Married 8 years',
    rating: 5,
    highlight: 'Science meets heart',
    category: 'finding-hope',
    timeframe: '15 months',
    beforeAfter: {
      before: "We were stuck in cycles of blame and defensiveness. Every conversation became a fight.",
      after: "We can talk about difficult topics with curiosity instead of judgment."
    }
  },
  {
    id: 9,
    content: "I thought I was the only one who could never get past this. Jordan helped me understand that healing is possible, even when it feels impossible. We're proof that love can triumph.",
    author: 'Emma R.',
    role: 'After discovering affair',
    rating: 5,
    highlight: 'Love triumphs',
    category: 'starting-over',
    timeframe: '11 months',
    beforeAfter: {
      before: "I couldn't eat, sleep, or focus. The betrayal consumed every thought.",
      after: "I've found peace and joy again. Our relationship has new boundaries and deeper respect."
    }
  },
  {
    id: 10,
    content: "The group workshops Jordan recommended were incredibly healing. Knowing we weren't alone in this journey made all the difference. We found community in our healing.",
    author: 'Multiple Couples',
    role: 'Workshop participants',
    rating: 5,
    highlight: 'Community healing',
    category: 'finding-hope',
    timeframe: '6 months',
    beforeAfter: {
      before: "We felt isolated and ashamed. Nobody understood what we were going through.",
      after: "We've built friendships with other couples who 'get it.' We support each other's growth."
    }
  }
]

const categories = [
  { id: 'all', label: 'All Stories', icon: Heart },
  { id: 'rebuilding-trust', label: 'Rebuilding Trust', icon: CheckCircle },
  { id: 'finding-hope', label: 'Finding Hope', icon: TrendingUp },
  { id: 'starting-over', label: 'Starting Over', icon: ArrowRight },
]

const stats = [
  { number: '95%', label: 'Success Rate', description: 'Couples report significant improvement' },
  { number: '14', label: 'Average Sessions', description: 'To achieve breakthrough results' },
  { number: '2.3x', label: 'Stronger Bonds', description: 'Couples report deeper intimacy than before' },
  { number: '89%', label: 'Stay Together', description: 'Choose to rebuild rather than separate' },
]

const videoTestimonials = [
  {
    id: 1,
    thumbnail: '/images/video-thumb-1.jpg',
    title: 'Sarah & Mike\'s Journey',
    duration: '3:42',
    description: 'From betrayal to breakthrough in 15 months'
  },
  {
    id: 2,
    thumbnail: '/images/video-thumb-2.jpg',
    title: 'The Science of Healing',
    duration: '5:18',
    description: 'Understanding trauma and recovery'
  },
  {
    id: 3,
    thumbnail: '/images/video-thumb-3.jpg',
    title: 'Hope After Betrayal',
    duration: '4:25',
    description: 'Three couples share their transformations'
  }
]

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null)
  const [showBeforeAfter, setShowBeforeAfter] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })

  const { scrollYProgress: statsScrollProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"]
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [100, -100])
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory)

  return (
    <>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-800" />

        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: heroOpacity }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sand-400/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Floating quote marks */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/5"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                rotate: Math.random() * 360,
                scale: 0.5 + Math.random() * 0.5,
              }}
              animate={{
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%"
                ],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%"
                ],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Quote className="w-8 h-8 fill-current" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
            style={{ y: heroY }}
          >
            {/* Floating quote icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.3 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-coral-400 to-coral-500 mb-8 shadow-2xl"
            >
              <Quote className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl lg:text-7xl font-display font-light text-white mb-6"
            >
              Stories of
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block text-6xl lg:text-8xl font-normal italic bg-gradient-to-r from-coral-300 to-sage-300 bg-clip-text text-transparent mt-4"
              >
                Hope & Healing
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-heading leading-relaxed mb-12"
            >
              Real couples who have walked this path and found their way back to each other—
              and forward to something even more beautiful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Read Their Stories
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Statistics */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-sage-50 to-sand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display text-navy mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-slate max-w-2xl mx-auto">
              Evidence-based outcomes from over 500 couples
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-100"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-display font-bold text-coral-500 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-slate">
                    {stat.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="testimonials" className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-coral-500 to-coral-600 text-white shadow-lg'
                      : 'bg-gray-100 text-slate hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.label}
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sage-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass backdrop-blur-xl bg-white/90 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                    {/* Floating quote mark */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-coral-400 to-coral-500 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-sage-100 to-coral-100 text-navy text-xs font-semibold rounded-full">
                        {categories.find(c => c.id === testimonial.category)?.label}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-coral-400 text-coral-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg text-slate mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Highlight */}
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-sage-100 to-coral-100 rounded-full mb-6">
                      <span className="text-sm font-semibold text-navy">
                        ✨ {testimonial.highlight}
                      </span>
                    </div>

                    {/* Author and controls */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-navy text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-slate/70">
                          {testimonial.role} • {testimonial.timeframe}
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowBeforeAfter(
                          showBeforeAfter === testimonial.id ? null : testimonial.id
                        )}
                        className="px-4 py-2 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        {showBeforeAfter === testimonial.id ? 'Hide' : 'Journey'}
                      </motion.button>
                    </div>

                    {/* Before/After Journey */}
                    <AnimatePresence>
                      {showBeforeAfter === testimonial.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-sage-200"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-red-50 p-4 rounded-xl">
                              <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                Before
                              </h4>
                              <p className="text-red-700 text-sm italic">
                                "{testimonial.beforeAfter.before}"
                              </p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl">
                              <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                After
                              </h4>
                              <p className="text-green-700 text-sm italic">
                                "{testimonial.beforeAfter.after}"
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Video Testimonials */}
      <section id="video-testimonials" className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-4">
              Video Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear directly from couples who have transformed their relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="glass backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                  {/* Video thumbnail placeholder */}
                  <div className="relative aspect-video bg-gradient-to-br from-coral-400/20 to-sage-400/20 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Play className="w-8 h-8 text-coral-500 ml-1" />
                    </motion.div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 italic">
              * Video testimonials coming soon. Couples sharing their stories with permission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABand
        title="Ready to write your own success story?"
        description="Join the hundreds of couples who have found hope and healing. Your journey starts with a single step."
        buttonText="Schedule Your Consultation"
        buttonHref="/schedule"
      />
    </>
  )
}