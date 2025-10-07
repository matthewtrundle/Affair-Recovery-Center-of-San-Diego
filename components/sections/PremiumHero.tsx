'use client'

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

// Video paths and quotes
const videos = [
  {
    src: '/video/Firefly Aerial cinematic shot of a convertible car driving along the Pacific Coast Highway near San .mp4',
    quote: "The journey forward begins with a single step"
  },
  {
    src: '/video/Firefly Cinematic shot of a couple walking side by side down a quiet San Diego street at dusk, warm .mp4',
    quote: "Healing happens when we walk together"
  },
  {
    src: '/video/Firefly Medium shot of a couple sitting close together on a bench in a quiet San Diego park, late af.mp4',
    quote: "Trust can be rebuilt, stronger than before"
  },
  {
    src: '/video/Firefly Wide cinematic shot of a couple walking slowly along a San Diego beach at sunset, seen from .mp4',
    quote: "Your story isn't over—it's transforming"
  }
]

// Rotating Text Component
function RotatingText() {
  const words = ['Rebuild Trust', 'Feel Secure Again', 'Heal Together', 'Find Your Way', 'Start Fresh']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative inline-block">
      {/* Background card for visibility */}
      <div className="absolute inset-0 -inset-x-4 -inset-y-2 bg-white/10 backdrop-blur-sm rounded-2xl" />
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="relative block text-5xl md:text-6xl lg:text-7xl font-normal italic px-4 py-2"
          style={{
            background: 'linear-gradient(135deg, #8EA69B 0%, #4A9D9E 50%, #7A9E7E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 2px 10px rgba(142, 166, 155, 0.3)'
          }}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 90 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // Auto-rotate videos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }, 5000) // Change video every 5 seconds to match video length
    return () => clearInterval(interval)
  }, [])

  const { scrollY } = useScroll()

  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300])
  const midgroundY = useTransform(scrollY, [0, 1000], [0, -150])
  const foregroundY = useTransform(scrollY, [0, 1000], [0, -50])
  const textY = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30 }
  const backgroundYSpring = useSpring(backgroundY, springConfig)
  const midgroundYSpring = useSpring(midgroundY, springConfig)

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (clientX - width / 2) / width,
        y: (clientY - height / 2) / height,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-deepTeal-900 via-deepTeal-800 to-deepTeal-700"
    >
      {/* Background Layer - Clean Ocean Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/beach/torrey-pines-sunset.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/80 via-deepTeal-800/40 to-transparent" />
      </div>


      {/* Floating Particles */}
      <div className="absolute inset-0 z-15">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>


      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            className="text-left"
            style={{ y: textY, opacity }}
          >
            {/* Main Heading with Rotating Text */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-6"
            >
              <span className="block mb-2">Affair Recovery Therapy in San Diego –</span>
              <RotatingText />
            </motion.h1>

          {/* Subheading with typewriter effect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl font-heading text-gray-200 mb-8 max-w-2xl"
          >
            When infidelity shakes your world, it feels impossible to move forward. With the right guidance,
            you can rebuild trust, find calm, and create a relationship that's stronger than before.
          </motion.p>

            {/* CTA Buttons with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <MagneticButton>
                <Button
                  size="lg"
                  className="glass-dark text-white border-white/20 hover:bg-white/10 px-8 py-4 group"
                  asChild
                >
                  <Link href="/schedule">
                    <Sparkles className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Start Healing Today
                  </Link>
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10 px-8 py-4 group"
                  asChild
                >
                  <Link href="/approach">
                    How I Work
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Trust Indicators with Beach Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 flex flex-wrap gap-6 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-lightGray-400 rounded-full animate-pulse" />
                <span>Gottman Level 3 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-turquoise-300 rounded-full animate-pulse" />
                <span>Published Clinical Researcher</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                <span>UCSD Clinical Faculty</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Video Box */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-turquoise-400/30 to-lime-400/30 blur-2xl" />

              {/* Glass box container */}
              <div className="relative glass backdrop-blur-xl bg-white/10 rounded-3xl p-2 border border-white/20">
                <div className="relative overflow-hidden rounded-2xl aspect-[1/1]">
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={currentVideoIndex}
                      src={videos[currentVideoIndex].src}
                      autoPlay
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    />
                  </AnimatePresence>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/50 via-transparent to-transparent" />

                  {/* Video indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentVideoIndex
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Go to video ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Floating text overlay with changing quotes */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVideoIndex}
                      className="absolute bottom-6 left-6 right-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-white/90 text-lg font-heading italic">
                        "{videos[currentVideoIndex].quote}"
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-lime-400/20 to-turquoise-400/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Magnetic Button Component
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  )
}