'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RotatingTextProps {
  staticText: string
  rotatingWords: string[]
  className?: string
  interval?: number
}

export function RotatingText({
  staticText,
  rotatingWords,
  className = '',
  interval = 3000
}: RotatingTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, interval)

    return () => clearInterval(timer)
  }, [rotatingWords.length, interval])

  return (
    <div className={`relative ${className}`}>
      <span className="block">
        {staticText}{' '}
        <span className="relative inline-block min-w-[200px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.3 },
                y: { duration: 0.6 },
                rotateX: { duration: 0.6 }
              }}
              className="absolute left-0 top-0 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              {rotatingWords[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </div>
  )
}

// Enhanced version with character-by-character animation
export function MorphingText({
  staticText,
  rotatingWords,
  className = '',
  interval = 3000
}: RotatingTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsAnimating(false)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [rotatingWords.length, interval])

  const currentWord = rotatingWords[currentWordIndex]
  const nextWord = rotatingWords[(currentWordIndex + 1) % rotatingWords.length]

  return (
    <div className={`relative ${className}`}>
      <span className="block">
        {staticText}{' '}
        <span className="relative inline-block min-w-[200px] h-[1.2em] overflow-hidden">
          <AnimatePresence mode="wait">
            {!isAnimating ? (
              <motion.span
                key={`current-${currentWordIndex}`}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="absolute left-0 top-0 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent font-semibold"
              >
                {currentWord.split('').map((char, index) => (
                  <motion.span
                    key={`${currentWordIndex}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>
            ) : (
              <motion.div
                key={`morphing-${currentWordIndex}`}
                className="absolute left-0 top-0"
              >
                {/* Morphing effect */}
                <motion.span
                  initial={{ scaleY: 1, opacity: 1 }}
                  animate={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.15, ease: 'easeInOut' }}
                  className="inline-block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent font-semibold origin-center"
                >
                  {currentWord}
                </motion.span>
                <motion.span
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.15, ease: 'easeInOut' }}
                  className="absolute left-0 top-0 inline-block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent font-semibold origin-center"
                >
                  {nextWord}
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </span>
      </span>
    </div>
  )
}

// Typewriter effect variant
export function TypewriterRotatingText({
  staticText,
  rotatingWords,
  className = '',
  interval = 4000,
  typeSpeed = 100,
  deleteSpeed = 50
}: RotatingTextProps & { typeSpeed?: number; deleteSpeed?: number }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex]

    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, interval - 1000)
      return () => clearTimeout(waitTimer)
    }

    if (!isDeleting && currentText !== currentWord) {
      // Typing
      const typeTimer = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1))
      }, typeSpeed)
      return () => clearTimeout(typeTimer)
    } else if (!isDeleting && currentText === currentWord) {
      // Wait before deleting
      setIsWaiting(true)
    } else if (isDeleting && currentText !== '') {
      // Deleting
      const deleteTimer = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1))
      }, deleteSpeed)
      return () => clearTimeout(deleteTimer)
    } else if (isDeleting && currentText === '') {
      // Move to next word
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }
  }, [currentText, isDeleting, isWaiting, currentWordIndex, rotatingWords, typeSpeed, deleteSpeed, interval])

  return (
    <div className={`relative ${className}`}>
      <span className="block">
        {staticText}{' '}
        <span className="relative inline-block min-w-[200px]">
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent font-semibold">
            {currentText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            className="ml-1 inline-block w-0.5 h-[1em] bg-gradient-to-b from-orange-400 to-yellow-400"
          />
        </span>
      </span>
    </div>
  )
}