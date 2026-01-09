'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

// Video paths and quotes - only load what's needed
const videos = [
  {
    src: '/video/Firefly Aerial cinematic shot of a convertible car driving along the Pacific Coast Highway near San .mp4',
    quote: "The journey forward begins with a single step",
    poster: '/images/video-posters/hero-1.webp'
  },
  {
    src: '/video/Firefly Cinematic shot of a couple walking side by side down a quiet San Diego street at dusk, warm .mp4',
    quote: "Healing happens when we walk together",
    poster: '/images/video-posters/hero-2.webp'
  },
  {
    src: '/video/Firefly Medium shot of a couple sitting close together on a bench in a quiet San Diego park, late af.mp4',
    quote: "Trust can be rebuilt, stronger than before",
    poster: '/images/video-posters/hero-3.webp'
  },
  {
    src: '/video/Firefly Wide cinematic shot of a couple walking slowly along a San Diego beach at sunset, seen from .mp4',
    quote: "Your story isn't over—it's transforming",
    poster: '/images/video-posters/hero-4.webp'
  }
]

export function PremiumHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0]))
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Preload next video when current one plays
  useEffect(() => {
    const nextIndex = (currentVideoIndex + 1) % videos.length
    if (!loadedVideos.has(nextIndex)) {
      setLoadedVideos(prev => new Set([...prev, nextIndex]))
    }
  }, [currentVideoIndex, loadedVideos])

  // Auto-rotate videos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Play active video, pause others when slide changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play().catch(() => {}) // Catch autoplay policy errors
        } else {
          video.pause()
        }
      }
    })
  }, [currentVideoIndex])

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden bg-gradient-to-b from-deepTeal-900 via-deepTeal-800 to-deepTeal-700">
      {/* Background Layer - San Diego Skyline (Subtle) - Using Next.js Image for optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background/SD.jpeg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/80 via-deepTeal-800/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 min-h-[600px] lg:min-h-[700px]">
        <div className="flex flex-col h-full">
          {/* Top Section - Grid with Text and Video */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center flex-1">
            {/* Left Content */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading - Direct, SEO-optimized */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-6">
                Affair Recovery Therapy in San Diego &mdash; Rebuild Trust and Feel Secure Again
              </h1>

              {/* Supporting Subhead - Trauma-aware, accessible */}
              <p className="text-xl md:text-2xl font-heading text-white/90 max-w-2xl leading-relaxed mb-8">
                When infidelity shakes your world, it feels impossible to move forward. With the right guidance, you can rebuild trust, find calm, and create a relationship that&apos;s stronger than before.
              </p>

              {/* CTA Buttons - Below text on left */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="px-8 py-4"
                  asChild
                >
                  <Link href="/contact">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Begin Your Healing
                  </Link>
                </Button>

                <Button
                  variant="pill-outline"
                  size="lg"
                  className="px-8 py-4 border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                  asChild
                >
                  <Link href="/approach">
                    Learn How We Help
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lightGray-400 rounded-full" />
                  <span>Gottman Level 3 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-turquoise-300 rounded-full" />
                  <span>Published Clinical Researcher</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lime-400 rounded-full" />
                  <span>UCSD Clinical Faculty</span>
                </div>
              </div>
            </motion.div>

          {/* Right Side Video Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-turquoise-400/30 to-lime-400/30 blur-2xl" />

              {/* Glass box container */}
              <div className="relative glass backdrop-blur-xl bg-white/10 rounded-3xl p-2 border border-white/20">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  {/* Render videos with lazy loading - only load current and next */}
                  {videos.map((video, index) => {
                    const isActive = index === currentVideoIndex
                    const shouldLoad = loadedVideos.has(index)

                    return (
                      <motion.video
                        key={index}
                        ref={el => { videoRefs.current[index] = el }}
                        src={shouldLoad ? video.src : undefined}
                        poster={video.poster}
                        autoPlay={isActive}
                        muted
                        playsInline
                        loop
                        preload={shouldLoad ? 'auto' : 'none'}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          zIndex: isActive ? 1 : 0
                        }}
                        transition={{ duration: 0.8 }}
                        onEnded={() => {
                          if (isActive) {
                            setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
                          }
                        }}
                      />
                    )
                  })}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/30 via-transparent to-transparent" />

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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-white/90 text-lg font-heading italic">
                        "{videos[currentVideoIndex].quote}"
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
