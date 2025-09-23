'use client'

import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Smooth scroll behavior for the entire document
    document.documentElement.style.scrollBehavior = 'smooth'

    // Lenis-like smooth scrolling (simplified version)
    let scrollTimeout: NodeJS.Timeout

    const smoothScroll = () => {
      clearTimeout(scrollTimeout)
      document.body.style.pointerEvents = 'none'

      scrollTimeout = setTimeout(() => {
        document.body.style.pointerEvents = 'auto'
      }, 150)
    }

    window.addEventListener('scroll', smoothScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', smoothScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-400 via-coral-400 to-navy-600 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      {/* Smooth scroll wrapper */}
      <div className="smooth-scroll-container">
        {children}
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-navy-800/90 backdrop-blur-md text-white rounded-full shadow-lg flex items-center justify-center hover:bg-navy-700 transition-colors z-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </motion.button>
    </>
  )
}