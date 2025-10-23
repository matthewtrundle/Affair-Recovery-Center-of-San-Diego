'use client'

import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { OceanShader } from './shaders/OceanShader'
import { FloatingParticles, SeaFoamParticles } from './effects/FloatingParticles'
import { MorphingText } from './effects/RotatingText'
import { ParallaxLayer, TideParallax, DepthLayers } from './effects/ParallaxLayers'
import { PerformanceOptimizer } from './effects/PerformanceOptimizer'
import { sanDiegoTheme, locations } from '@/lib/san-diego-theme'

interface SanDiegoHeroProps {
  className?: string
}

export function SanDiegoHero({ className = '' }: SanDiegoHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [timeOfDay, setTimeOfDay] = useState<'dawn' | 'day' | 'sunset' | 'night'>('day')
  const [performanceLevel, setPerformanceLevel] = useState<'high' | 'medium' | 'low'>('high')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Transform values based on scroll
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const sceneRotation = useTransform(scrollYProgress, [0, 1], [0, 5])

  // Dynamic theme based on time
  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 6) setTimeOfDay('night')
    else if (hour < 8) setTimeOfDay('dawn')
    else if (hour < 18) setTimeOfDay('day')
    else setTimeOfDay('sunset')
  }, [])

  // Track scroll for WebGL scene
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track mouse for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const rotatingWords = ['through', 'forward', 'to heal', 'to hope', 'back home']

  // Get La Jolla Cove theme
  const theme = locations.laJollaCove

  return (
    <div
      ref={containerRef}
      className={`relative h-screen overflow-hidden ${className}`}
      style={{
        background: sanDiegoTheme.gradients.oceanDepth
      }}
    >
      {/* Depth layers for 3D parallax */}
      <DepthLayers scrollY={scrollY} />

      {/* Tide parallax effect */}
      <TideParallax scrollY={scrollY} />

      {/* WebGL Ocean Scene */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          scale: sceneScale,
          y: sceneY,
          rotateX: sceneRotation
        }}
      >
        <PerformanceOptimizer enableLOD enableInstancing>
          <Canvas
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            camera={{ position: [0, 0, 5], fov: 75 }}
            gl={{
              antialias: performanceLevel === 'high',
              powerPreference: 'high-performance',
              alpha: true,
              premultipliedAlpha: false
            }}
          >
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />

              {/* Dynamic lighting based on time of day */}
              <ambientLight
                intensity={timeOfDay === 'night' ? 0.2 : 0.4}
                color={timeOfDay === 'sunset' ? sanDiegoTheme.colors.sunset.golden : sanDiegoTheme.colors.sky.day}
              />
              <directionalLight
                position={[5, 5, 5]}
                intensity={timeOfDay === 'night' ? 0.3 : 0.8}
                color={timeOfDay === 'sunset' ? sanDiegoTheme.colors.sunset.coral : sanDiegoTheme.colors.ocean.turquoise}
                castShadow={performanceLevel !== 'low'}
              />
              <pointLight
                position={[-5, 2, 2]}
                intensity={0.5}
                color={sanDiegoTheme.colors.ocean.turquoise}
              />

              {/* Ocean shader */}
              <OceanShader scrollY={scrollY} />

              {/* Adaptive particle count based on performance */}
              <FloatingParticles
                scrollY={scrollY}
                count={performanceLevel === 'high' ? 800 : performanceLevel === 'medium' ? 400 : 200}
              />
              <SeaFoamParticles scrollY={scrollY} />

              {/* Environment for reflections */}
              <Environment preset={timeOfDay === 'sunset' ? 'sunset' : timeOfDay === 'night' ? 'night' : 'dawn'} />
            </Suspense>
          </Canvas>
        </PerformanceOptimizer>
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

            {/* Left column - Main content (60%) */}
            <motion.div
              className="lg:col-span-3 space-y-8"
              style={{
                y: textY,
                opacity: textOpacity
              }}
            >
              {/* Main headline with rotating text */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <MorphingText
                    staticText="There is a way"
                    rotatingWords={rotatingWords}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
                    interval={3500}
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed"
                >
                  Evidence-based help to heal from betrayal and rebuild trust in the heart of San Diego.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: sanDiegoTheme.gradients.goldenHour,
                    boxShadow: sanDiegoTheme.shadows.sunsetGlow
                  }}
                >
                  Schedule a Consult
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 text-white hover:text-blue-900 font-semibold px-8 py-4 text-lg transition-all duration-300"
                  style={{
                    borderColor: sanDiegoTheme.colors.ocean.foam,
                    color: sanDiegoTheme.colors.ocean.foam,
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = sanDiegoTheme.colors.ocean.foam
                    e.currentTarget.style.color = sanDiegoTheme.colors.ocean.deep
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = sanDiegoTheme.colors.ocean.foam
                  }}
                >
                  How I Work
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap items-center gap-6"
                style={{ color: sanDiegoTheme.colors.ocean.foam }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: sanDiegoTheme.gradients.goldenHour }}
                  ></div>
                  <span className="text-sm font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: sanDiegoTheme.gradients.goldenHour }}
                  ></div>
                  <span className="text-sm font-medium">Gottman Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: sanDiegoTheme.gradients.goldenHour }}
                  ></div>
                  <span className="text-sm font-medium">San Diego Based</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - Framed image/scene (40%) */}
            <motion.div
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`
              }}
            >
              {/* Decorative frame */}
              <div className="relative">
                {/* Glowing backdrop */}
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl transform scale-110"
                  style={{
                    background: `linear-gradient(45deg, ${sanDiegoTheme.colors.sunset.golden}40, ${sanDiegoTheme.colors.sunset.coral}30)`,
                    boxShadow: sanDiegoTheme.shadows.sunsetGlow
                  }}
                ></div>

                {/* Main frame */}
                <div
                  className="relative backdrop-blur-sm rounded-2xl p-1 shadow-2xl"
                  style={{
                    backgroundColor: `${sanDiegoTheme.colors.ocean.foam}10`,
                    borderColor: `${sanDiegoTheme.colors.ocean.foam}20`,
                    border: `1px solid ${sanDiegoTheme.colors.ocean.foam}20`
                  }}
                >
                  <div
                    className="rounded-xl p-8 h-96 flex flex-col justify-center items-center text-center"
                    style={{
                      background: `linear-gradient(135deg, ${sanDiegoTheme.colors.ocean.primary}50, transparent)`
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={sanDiegoTheme.animations.drift}
                      className="text-6xl mb-4"
                    >
                      🌊
                    </motion.div>
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: sanDiegoTheme.colors.ocean.foam }}
                    >
                      Healing by the Sea
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: sanDiegoTheme.colors.ocean.foam }}
                    >
                      Find peace and renewal in San Diego's therapeutic environment
                    </p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60"
                  style={{ background: sanDiegoTheme.gradients.goldenHour }}
                ></motion.div>

                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 rounded-full opacity-40"
                  style={{
                    background: `linear-gradient(45deg, ${sanDiegoTheme.colors.ocean.turquoise}, ${sanDiegoTheme.colors.ocean.bright})`
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={sanDiegoTheme.animations.drift}
          className="flex flex-col items-center"
          style={{ color: `${sanDiegoTheme.colors.ocean.foam}60` }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div
            className="w-1 h-8 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${sanDiegoTheme.colors.ocean.foam}60, transparent)`
            }}
          ></div>
        </motion.div>
      </motion.div>

      {/* Ambient sound toggle (optional) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute top-8 right-8 z-20 p-3 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: `${sanDiegoTheme.colors.ocean.foam}10`,
          border: `1px solid ${sanDiegoTheme.colors.ocean.foam}20`,
          color: sanDiegoTheme.colors.ocean.foam,
          boxShadow: sanDiegoTheme.shadows.softLight
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = `${sanDiegoTheme.colors.ocean.foam}20`
          e.currentTarget.style.boxShadow = sanDiegoTheme.shadows.oceanGlow
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = `${sanDiegoTheme.colors.ocean.foam}10`
          e.currentTarget.style.boxShadow = sanDiegoTheme.shadows.softLight
        }}
        title="Toggle ambient ocean sounds"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.824L4.236 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.236l4.147-3.824zM12 8a1 1 0 011.414 0L15 9.586l1.586-1.586a1 1 0 011.414 1.414L16.414 11l1.586 1.586a1 1 0 01-1.414 1.414L15 12.414l-1.586 1.586a1 1 0 01-1.414-1.414L13.586 11 12 9.414a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </motion.button>
    </div>
  )
}