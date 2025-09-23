'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ParallaxLayerProps {
  children: React.ReactNode
  speed: number
  className?: string
  offset?: number
}

export function ParallaxLayer({ children, speed, className = '', offset = 0 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, offset + speed * 100])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: smoothY }}
    >
      {children}
    </motion.div>
  )
}

// Multi-layer parallax container
export function ParallaxContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      {children}
    </div>
  )
}

// Tide effect for ocean scene
export function TideParallax({ scrollY }: { scrollY: number }) {
  const tideOffset = Math.sin(scrollY * 0.001) * 20
  const waveOffset = Math.cos(scrollY * 0.0005) * 10

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        transform: `translateY(${tideOffset}px) translateX(${waveOffset}px)`,
        opacity: 0.6
      }}
    >
      {/* Animated wave patterns */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 to-transparent">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-400/30 to-transparent"
          animate={{
            scaleX: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </motion.div>
  )
}

// Floating elements with parallax
export function FloatingElements({ scrollY }: { scrollY: number }) {
  const elements = [
    { x: 10, y: 20, size: 'w-2 h-2', color: 'bg-orange-400/40', speed: 0.3 },
    { x: 80, y: 40, size: 'w-3 h-3', color: 'bg-cyan-400/30', speed: 0.5 },
    { x: 30, y: 70, size: 'w-1 h-1', color: 'bg-amber-400/50', speed: 0.2 },
    { x: 90, y: 15, size: 'w-2 h-2', color: 'bg-blue-400/30', speed: 0.4 },
    { x: 60, y: 85, size: 'w-1 h-1', color: 'bg-orange-300/40', speed: 0.6 },
  ]

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full blur-sm`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translateY(${scrollY * element.speed * -0.1}px) translateX(${Math.sin(scrollY * 0.001 + index) * 20}px)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </>
  )
}

// Depth layers for 3D effect
export function DepthLayers({ scrollY }: { scrollY: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Background layer - slowest */}
      <ParallaxLayer speed={-0.5} className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-800/20" />
      </ParallaxLayer>

      {/* Middle layer - medium speed */}
      <ParallaxLayer speed={-0.3} className="absolute inset-0">
        <div className="w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-orange-400/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-radial from-cyan-400/10 to-transparent rounded-full blur-2xl" />
        </div>
      </ParallaxLayer>

      {/* Foreground layer - fastest */}
      <ParallaxLayer speed={-0.1} className="absolute inset-0">
        <FloatingElements scrollY={scrollY} />
      </ParallaxLayer>
    </div>
  )
}

// Scroll-triggered animations
export function ScrollTriggeredEffects() {
  const { scrollYProgress } = useScroll()

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 5])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: backgroundOpacity,
        filter: `blur(${blur}px)`
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-900/10 to-blue-800/20" />
    </motion.div>
  )
}