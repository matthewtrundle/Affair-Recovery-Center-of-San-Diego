import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingParticlesProps {
  count?: number
  scrollY: number
}

export function FloatingParticles({ count = 1000, scrollY }: FloatingParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate particle positions and properties
  const { positions, velocities, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Random positions across the screen
      positions[i3] = (Math.random() - 0.5) * 20 // x
      positions[i3 + 1] = (Math.random() - 0.5) * 12 // y
      positions[i3 + 2] = Math.random() * 5 - 2 // z

      // Random velocities for floating effect
      velocities[i3] = (Math.random() - 0.5) * 0.02 // x velocity
      velocities[i3 + 1] = Math.random() * 0.01 + 0.005 // y velocity (always upward)
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01 // z velocity

      // Random sizes for variety
      sizes[i] = Math.random() * 0.8 + 0.2
    }

    return { positions, velocities, sizes }
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return

    const positionsAttribute = pointsRef.current.geometry.attributes.position
    const positions = positionsAttribute.array as Float32Array
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Update positions based on velocities
      positions[i3] += velocities[i3] // x
      positions[i3 + 1] += velocities[i3 + 1] // y
      positions[i3 + 2] += velocities[i3 + 2] // z

      // Add subtle wave motion
      positions[i3] += Math.sin(time * 0.5 + i * 0.1) * 0.002
      positions[i3 + 2] += Math.cos(time * 0.3 + i * 0.15) * 0.001

      // Scroll influence - particles drift based on scroll
      positions[i3 + 1] -= scrollY * 0.0001
      positions[i3] += Math.sin(scrollY * 0.001 + i) * 0.001

      // Reset particles that go out of bounds
      if (positions[i3 + 1] > 6) {
        positions[i3 + 1] = -6
        positions[i3] = (Math.random() - 0.5) * 20
        positions[i3 + 2] = Math.random() * 5 - 2
      }

      if (positions[i3] > 10) {
        positions[i3] = -10
      } else if (positions[i3] < -10) {
        positions[i3] = 10
      }

      if (positions[i3 + 2] > 3) {
        positions[i3 + 2] = -3
      } else if (positions[i3 + 2] < -3) {
        positions[i3 + 2] = 3
      }
    }

    positionsAttribute.needsUpdate = true
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

// Sea foam particles with different behavior
export function SeaFoamParticles({ scrollY }: { scrollY: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 300

  const { positions, scales } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Concentrate foam near the "shore" (bottom of screen)
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = Math.random() * 3 - 6 // Lower on screen
      positions[i3 + 2] = Math.random() * 2

      scales[i] = Math.random() * 0.5 + 0.1
    }

    return { positions, scales }
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return

    const positionsAttribute = pointsRef.current.geometry.attributes.position
    const positions = positionsAttribute.array as Float32Array
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Foam bubbles up slowly
      positions[i3 + 1] += 0.01

      // Add wave-like motion
      positions[i3] += Math.sin(time * 0.8 + i * 0.2) * 0.003
      positions[i3 + 2] += Math.cos(time * 0.6 + i * 0.3) * 0.002

      // Scroll effect - foam responds to scroll
      positions[i3 + 1] -= scrollY * 0.0002

      // Reset foam that goes too high
      if (positions[i3 + 1] > 2) {
        positions[i3 + 1] = -6
        positions[i3] = (Math.random() - 0.5) * 20
        positions[i3 + 2] = Math.random() * 2
      }
    }

    positionsAttribute.needsUpdate = true
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#e0f2fe"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}