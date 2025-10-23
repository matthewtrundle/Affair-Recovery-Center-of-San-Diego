import { useRef, useMemo } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

const OceanMaterial = shaderMaterial(
  {
    uTime: 0,
    uScrollY: 0,
    uResolution: new THREE.Vector2(1, 1),
    uColor1: new THREE.Color('#1e3a8a'), // Deep ocean blue
    uColor2: new THREE.Color('#0ea5e9'), // Bright blue
    uColor3: new THREE.Color('#22d3ee'), // Cyan
    uColor4: new THREE.Color('#fbbf24'), // Golden San Diego sun
    uWaveHeight: 0.3,
    uWaveSpeed: 0.5,
    uFoamColor: new THREE.Color('#ffffff'),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    uniform float uTime;
    uniform float uScrollY;
    uniform float uWaveHeight;
    uniform float uWaveSpeed;

    float noise(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    float smoothNoise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = noise(i);
      float b = noise(i + vec2(1.0, 0.0));
      float c = noise(i + vec2(0.0, 1.0));
      float d = noise(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 5; i++) {
        value += amplitude * smoothNoise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    void main() {
      vUv = uv;
      vPosition = position;

      vec3 pos = position;
      float time = uTime * uWaveSpeed;
      float scrollInfluence = uScrollY * 0.001;

      // Create multiple wave layers for realistic ocean motion
      float wave1 = sin(pos.x * 2.0 + time) * 0.1;
      float wave2 = sin(pos.z * 1.5 + time * 1.3) * 0.08;
      float wave3 = fbm(pos.xz * 0.5 + time * 0.2) * 0.15;

      // Add scroll-based tide effect
      float tideEffect = sin(time * 0.3 + scrollInfluence) * 0.2;

      pos.y += (wave1 + wave2 + wave3 + tideEffect) * uWaveHeight;

      // Calculate normal for lighting
      vec3 tangent = vec3(1.0, (wave1 + wave2 + wave3) * 0.1, 0.0);
      vec3 bitangent = vec3(0.0, (wave1 + wave2 + wave3) * 0.1, 1.0);
      vNormal = normalize(cross(tangent, bitangent));

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    uniform float uTime;
    uniform float uScrollY;
    uniform vec2 uResolution;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    uniform vec3 uFoamColor;

    float noise(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    void main() {
      vec2 uv = vUv;
      float time = uTime * 0.5;

      // Create depth-based color gradient
      float depth = 1.0 - uv.y;
      vec3 waterColor = mix(uColor1, uColor2, depth);
      waterColor = mix(waterColor, uColor3, smoothstep(0.0, 0.3, depth));

      // Add golden hour lighting effect
      float sunIntensity = 0.5 + 0.5 * sin(time * 0.1);
      vec3 sunColor = uColor4 * sunIntensity * 0.3;

      // Create foam effect near shores
      float foam = noise(uv * 20.0 + time);
      foam = smoothstep(0.7, 1.0, foam);
      foam *= smoothstep(0.0, 0.2, uv.y) * smoothstep(1.0, 0.8, uv.y);

      // Add scroll-based shimmer
      float scrollShimmer = sin(uv.x * 10.0 + uScrollY * 0.01) * 0.1;

      // Combine all effects
      vec3 finalColor = waterColor + sunColor + scrollShimmer;
      finalColor = mix(finalColor, uFoamColor, foam * 0.3);

      // Add some transparency for layering
      float alpha = 0.9 + foam * 0.1;

      gl_FragColor = vec4(finalColor, alpha);
    }
  `
)

extend({ OceanMaterial })

export function OceanShader({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)
  const { size } = useThree()

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime
      materialRef.current.uScrollY = scrollY
      materialRef.current.uResolution.set(size.width, size.height)
    }
  })

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(20, 12, 64, 64)
  }, [])

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, -2]}>
      <oceanMaterial ref={materialRef} />
    </mesh>
  )
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      oceanMaterial: any
    }
  }
}