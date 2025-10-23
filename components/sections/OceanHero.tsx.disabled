'use client'

import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

// Floating Orb Component
function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#4A7C9E"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  )
}

// Ocean Particles
function OceanParticles() {
  const points = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={new Float32Array(500 * 3).map(() => (Math.random() - 0.5) * 10)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#E8F5F2"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// 3D Scene Component
function OceanScene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.z = 5
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#FFB347" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0A4F63" />

      <FloatingOrb />
      <OceanParticles />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

export function OceanHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -500])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[200vh] overflow-hidden">
      {/* 3D Canvas Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ opacity, scale }}
      >
        {mounted && (
          <Suspense fallback={
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A4F63] to-[#4A7C9E]" />
          }>
            <Canvas className="absolute inset-0">
              <OceanScene />
            </Canvas>
          </Suspense>
        )}
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A4F63]/20 to-[#0A4F63]/60 z-10" />

      {/* Content Layer */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <motion.div
          className="text-center"
          style={{ y }}
        >
          {/* Vertical Text */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <motion.h1
              className="text-[#E8F5F2] text-8xl md:text-9xl font-thin tracking-[0.3em] vertical-text opacity-80"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              HEAL
            </motion.h1>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-7xl font-thin text-[#E8F5F2] mb-4">
                where the ocean
              </h2>
              <h3 className="text-6xl md:text-8xl font-light text-[#FFB347] italic">
                meets your soul
              </h3>
            </motion.div>

            <motion.h1
              className="text-[#E8F5F2] text-8xl md:text-9xl font-thin tracking-[0.3em] vertical-text opacity-80"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              FLOW
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-[#E8F5F2]/80 max-w-3xl mx-auto mb-12 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Couples therapy for betrayal recovery • La Jolla, San Diego
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <button className="group relative px-12 py-5 overflow-hidden rounded-full">
              <span className="absolute inset-0 bg-[#FFB347]/20 backdrop-blur-sm border border-[#FFB347]/50 rounded-full" />
              <span className="relative z-10 text-[#E8F5F2] text-lg tracking-widest uppercase font-light group-hover:text-[#FFB347] transition-colors duration-500">
                Begin Your Journey
              </span>
              <span className="absolute inset-0 bg-[#FFB347]/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-700" />
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#E8F5F2]/50"
            >
              <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#E8F5F2]/50 to-transparent mx-auto mb-2" />
              <p className="text-xs tracking-[0.3em] uppercase">Scroll to dive deeper</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }
      `}</style>
    </section>
  )
}