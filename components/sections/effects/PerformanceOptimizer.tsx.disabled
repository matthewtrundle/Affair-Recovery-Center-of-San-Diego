import { useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useInView } from 'react-intersection-observer'

interface PerformanceOptimizerProps {
  children: React.ReactNode
  enableLOD?: boolean
  enableInstancing?: boolean
  targetFPS?: number
}

export function PerformanceOptimizer({
  children,
  enableLOD = true,
  enableInstancing = true,
  targetFPS = 60
}: PerformanceOptimizerProps) {
  const [performanceLevel, setPerformanceLevel] = useState<'high' | 'medium' | 'low'>('high')
  const [isVisible, setIsVisible] = useState(true)
  const { gl, camera } = useThree()

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '100px'
  })

  // Performance monitoring
  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()

    const measurePerformance = () => {
      frameCount++
      const currentTime = performance.now()

      if (currentTime - lastTime >= 1000) {
        const fps = frameCount
        frameCount = 0
        lastTime = currentTime

        // Adjust performance level based on FPS
        if (fps < targetFPS * 0.7) {
          setPerformanceLevel('low')
        } else if (fps < targetFPS * 0.85) {
          setPerformanceLevel('medium')
        } else {
          setPerformanceLevel('high')
        }
      }

      requestAnimationFrame(measurePerformance)
    }

    measurePerformance()
  }, [targetFPS])

  // Visibility culling
  useEffect(() => {
    setIsVisible(inView)
  }, [inView])

  // Adaptive quality settings
  useFrame(() => {
    if (!gl) return

    // Adjust pixel ratio based on performance
    const pixelRatio = window.devicePixelRatio
    switch (performanceLevel) {
      case 'low':
        gl.setPixelRatio(Math.min(pixelRatio, 1))
        break
      case 'medium':
        gl.setPixelRatio(Math.min(pixelRatio, 1.5))
        break
      case 'high':
        gl.setPixelRatio(Math.min(pixelRatio, 2))
        break
    }

    // Enable/disable shadows based on performance
    gl.shadowMap.enabled = performanceLevel !== 'low'
  })

  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0.5 }}>
      {isVisible && children}
    </div>
  )
}

// Level of Detail component
export function LODGroup({
  children,
  distances = [0, 50, 100],
  performanceLevel
}: {
  children: React.ReactNode[]
  distances?: number[]
  performanceLevel: 'high' | 'medium' | 'low'
}) {
  const [currentLOD, setCurrentLOD] = useState(0)
  const { camera } = useThree()

  useFrame(() => {
    // Simple LOD based on performance level
    switch (performanceLevel) {
      case 'high':
        setCurrentLOD(0)
        break
      case 'medium':
        setCurrentLOD(1)
        break
      case 'low':
        setCurrentLOD(2)
        break
    }
  })

  return <>{children[Math.min(currentLOD, children.length - 1)]}</>
}

// Particle count reducer based on performance
export function AdaptiveParticleCount({
  baseCount,
  performanceLevel
}: {
  baseCount: number
  performanceLevel: 'high' | 'medium' | 'low'
}) {
  switch (performanceLevel) {
    case 'high':
      return baseCount
    case 'medium':
      return Math.floor(baseCount * 0.6)
    case 'low':
      return Math.floor(baseCount * 0.3)
    default:
      return baseCount
  }
}