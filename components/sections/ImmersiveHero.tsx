'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function ImmersiveHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], [0, -300])
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -150])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0])

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30 }
  const xSpring = useSpring(mouseX, springConfig)
  const ySpring = useSpring(mouseY, springConfig)

  // Canvas animation for floating particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        ctx.fillStyle = `rgba(232, 245, 242, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e
      const { width, height } = (currentTarget as HTMLElement).getBoundingClientRect()
      const x = (clientX / width - 0.5) * 20
      const y = (clientY / height - 0.5) * 20
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] overflow-hidden bg-gradient-to-b from-[#0A4F63] via-[#4A7C9E] to-[#FFB347]/20"
    >
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          scale,
          y: yImage
        }}
      >
        <Image
          src="/images/sections/beach-la-jolla-cove.webp"
          alt="La Jolla Cove at sunset"
          fill
          className="object-cover opacity-30"
          priority
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A4F63]/90 via-[#0A4F63]/40 to-transparent z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A4F63]/50 via-transparent to-[#0A4F63]/50 z-20" />

      {/* Content */}
      <motion.div
        className="relative z-30 min-h-screen flex items-center"
        style={{ opacity }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Vertical text sides */}
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Left vertical text */}
              <motion.div
                className="col-span-2 hidden lg:block"
                style={{ x: xSpring, y: ySpring }}
              >
                <h2 className="text-[#E8F5F2]/20 text-7xl font-thin tracking-[0.5em] vertical-lr">
                  TRUST
                </h2>
              </motion.div>

              {/* Center content */}
              <motion.div
                className="col-span-12 lg:col-span-8 text-center"
                style={{ y: yText }}
              >
                {/* Small intro */}
                <motion.p
                  className="text-[#FFB347] text-sm md:text-base uppercase tracking-[0.3em] mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  From Torrey Pines to Mission Bay • Serving all of San Diego
                </motion.p>

                {/* Main headline */}
                <motion.h1
                  className="mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="block text-4xl md:text-6xl lg:text-7xl font-thin text-[#E8F5F2] leading-tight">
                    When trust breaks like morning surf
                  </span>
                  <span className="block text-5xl md:text-7xl lg:text-8xl font-light text-[#FFB347] italic mt-2">
                    I'll help you rebuild stronger
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-xl md:text-2xl text-[#E8F5F2]/80 mb-12 font-light max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Hey, I'm Jordan. Been helping couples from Point Loma to Rancho Bernardo
                  work through the hardest stuff for 15+ years. When your world feels upside down,
                  I know how to help you find solid ground again.
                </motion.p>

                {/* Local touch */}
                <motion.p
                  className="text-lg text-[#E8F5F2]/60 mb-12 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  "My Carmel Valley office — right off the 5, easy parking, and yes, a ocean view that actually helps"
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <Link href="/schedule">
                    <motion.button
                      className="group relative px-10 py-5 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="absolute inset-0 bg-[#FFB347]/20 backdrop-blur-md rounded-full border border-[#FFB347]/50" />
                      <span className="relative z-10 text-[#E8F5F2] text-lg tracking-wide group-hover:text-[#FFB347] transition-colors">
                        Let's Talk • Free Consultation
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-[#FFB347]/10 rounded-full"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>

                  <Link href="#story">
                    <motion.button
                      className="group relative px-10 py-5"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 text-[#E8F5F2]/80 text-lg tracking-wide group-hover:text-[#E8F5F2] transition-colors">
                        Hear Our Stories ↓
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Trust signals */}
                <motion.div
                  className="flex flex-wrap gap-8 justify-center mt-12 text-[#E8F5F2]/50 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <span>Local SD Therapist Since 2008</span>
                  <span>•</span>
                  <span>Military Family Specialist</span>
                  <span>•</span>
                  <span>Weekends for Busy Professionals</span>
                </motion.div>
              </motion.div>

              {/* Right vertical text */}
              <motion.div
                className="col-span-2 hidden lg:block text-right"
                style={{ x: xSpring, y: ySpring }}
              >
                <h2 className="text-[#E8F5F2]/20 text-7xl font-thin tracking-[0.5em] vertical-lr">
                  HEAL
                </h2>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#E8F5F2]/30 to-transparent" />
              <span className="text-[#E8F5F2]/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .vertical-lr {
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  )
}