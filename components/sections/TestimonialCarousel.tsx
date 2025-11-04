'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, Heart } from 'lucide-react'
import { useRef } from 'react'

const testimonials = [
  {
    id: 1,
    content: "Jordan gave us the roadmap we desperately needed. We're not just surviving—we're closer than ever.",
    author: 'M.S.',
    role: 'Couples Client',
    rating: 5,
    highlight: 'Closer than ever',
  },
  {
    id: 2,
    content: "He was the only one who could get through to my husband. Firm, but kind. Exactly what we needed.",
    author: 'L.B.',
    role: 'Couples Client',
    rating: 5,
    highlight: 'Got through to my husband',
  },
  {
    id: 3,
    content: "I thought trust was gone for good. Jordan showed us how to rebuild it, step by step.",
    author: 'J.P.',
    role: 'Couples Client',
    rating: 5,
    highlight: 'Rebuilt trust',
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section ref={containerRef} className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-deepTeal-700" />

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-turquoise-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5"
            initial={{
              x: Math.random() * 100 + "%",
              y: "100vh",
            }}
            animate={{
              y: "-100px",
              x: Math.random() * 200 - 100 + "%",
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              delay: Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Heart className="w-8 h-8 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 mb-6"
          >
            <Quote className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-display font-light text-white mb-6">
            Stories of
            <span className="block text-5xl lg:text-6xl font-normal italic bg-gradient-to-r from-lime-300 to-turquoise-300 bg-clip-text text-transparent mt-2">
              Hope & Healing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-heading">
            Real couples who have walked this path and found their way back to each other.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="max-w-5xl mx-auto">
          <div className="relative">
            {/* 3D Carousel Container */}
            <div className="relative h-[400px] lg:h-[450px]">
              <AnimatePresence mode="popLayout">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === currentIndex
                  const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length
                  const isNext = index === (currentIndex + 1) % testimonials.length

                  if (!isActive && !isPrev && !isNext) return null

                  return (
                    <motion.div
                      key={testimonial.id}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotateY: isNext ? 45 : isPrev ? -45 : 0,
                        x: isNext ? 300 : isPrev ? -300 : 0,
                        z: isActive ? 100 : 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: isActive ? 1 : 0.85,
                        rotateY: isNext ? 15 : isPrev ? -15 : 0,
                        x: isNext ? 200 : isPrev ? -200 : 0,
                        z: isActive ? 100 : 0,
                        filter: isActive ? "blur(0px)" : "blur(2px)",
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        rotateY: isPrev ? 45 : -45,
                        x: isPrev ? 300 : -300,
                      }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                        transformPerspective: 1200,
                      }}
                    >
                      <div
                        className={`rounded-3xl p-8 lg:p-12 max-w-3xl w-full mx-4 border ${
                          isActive
                            ? 'bg-white border-gray-200 shadow-2xl'
                            : 'bg-white border-gray-200 shadow-lg'
                        } transition-all duration-500`}
                        onClick={() => !isActive && goToTestimonial(index)}
                        style={{ cursor: !isActive ? 'pointer' : 'default' }}
                      >
                        {/* Quote Icon */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center shadow-lg">
                          <Quote className="w-6 h-6 text-white" />
                        </div>

                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star className="w-5 h-5 fill-lime-400 text-lime-400" />
                            </motion.div>
                          ))}
                        </div>

                        {/* Content */}
                        <blockquote className="text-lg lg:text-xl text-deepTeal-800 mb-8 italic leading-relaxed font-medium">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-deepTeal-900 text-lg">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-deepTeal-700 font-medium">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-8 mt-12">
              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={previousTestimonial}
                className="w-12 h-12 rounded-full glass backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center text-deepTeal-800 hover:bg-white/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className="relative"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full transition-all duration-300`}
                      animate={{
                        width: index === currentIndex ? 32 : 8,
                        backgroundColor: index === currentIndex ? "#F29B88" : "#ffffff60",
                      }}
                    />
                    {index === currentIndex && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-lime-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ opacity: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center text-deepTeal-800 hover:bg-white/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Auto-play indicator */}
            <div className="text-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-white/60 text-sm hover:text-white/80 transition-colors"
              >
                {isAutoPlaying ? '⏸ Pause' : '▶ Resume'} auto-play
              </button>
            </div>
          </div>

          {/* More Success Stories Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="/testimonials"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-deepTeal-800 rounded-full font-semibold hover:bg-lime-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileTap={{ scale: 0.98 }}
            >
              More Success Stories
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}