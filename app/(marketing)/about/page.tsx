'use client'

import { Metadata } from 'next'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { CTABand } from '@/components/sections/CTABand'
import {
  Award,
  BookOpen,
  Heart,
  Users,
  Star,
  Trophy,
  GraduationCap,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

// Floating Text Component for Hero
function FloatingQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="absolute top-1/4 right-8 lg:right-16"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 max-w-xs"
      >
        <p className="text-white/90 text-sm font-heading italic">
          "Healing isn't about forgetting. It's about building something new from what remains."
        </p>
        <p className="text-white/60 text-xs mt-2">— Jordan Zipkin, LMFT</p>
      </motion.div>
    </motion.div>
  )
}

// Premium Hero Section
function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollY } = useScroll()

  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300])
  const midgroundY = useTransform(scrollY, [0, 1000], [0, -150])
  const textY = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30 }
  const backgroundYSpring = useSpring(backgroundY, springConfig)
  const midgroundYSpring = useSpring(midgroundY, springConfig)

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (clientX - width / 2) / width,
        y: (clientY - height / 2) / height,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-700"
    >
      {/* Background Layer - Therapy Office Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundYSpring }}
      >
        <div
          className="absolute inset-0 ken-burns"
          style={{
            backgroundImage: 'url(/images/about/jordan-office-portrait.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-800/60 to-navy-900/40" />
      </motion.div>

      {/* Midground Layer - Floating Elements */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ y: midgroundYSpring }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-sage-400/20 to-coral-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-br from-coral-400/15 to-sage-400/15 rounded-full blur-xl"
        />
      </motion.div>

      {/* Floating Quote */}
      <FloatingQuote />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            className="text-left order-2 lg:order-1"
            style={{ y: textY, opacity }}
          >
            {/* Pre-title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-coral-400 to-sage-400" />
              <span className="text-white/70 font-heading text-lg tracking-wider uppercase">
                Your Local San Diego Therapist
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6"
            >
              <span className="block">15 years helping</span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-normal italic bg-gradient-to-r from-coral-300 to-sage-300 bg-clip-text text-transparent">
                San Diego heal
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-2xl font-heading text-gray-200 mb-4 leading-relaxed"
            >
              From Poway to Paradise Hills, I've helped couples find their way back
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Started my practice here in 2008, right when the housing market crashed.
              Saw a lot of relationships crash too. But here's what I learned:
              San Diegans are resilient. We rebuild. We come back stronger.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-display font-light text-coral-300 mb-1">2008</div>
                <div className="text-white/60 text-sm">Serving SD Since</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-light text-sage-300 mb-1">92104-92130</div>
                <div className="text-white/60 text-sm">All Zip Codes</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-800 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors group"
                >
                  <Sparkles className="h-5 w-5 group-hover:animate-pulse" />
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/approach"
                  className="inline-flex items-center gap-3 px-8 py-4 glass text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Learn My Approach
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-sage-400/20 to-coral-400/20 blur-3xl" />

              {/* Glass container */}
              <div className="relative glass backdrop-blur-xl bg-white/10 rounded-3xl p-3 border border-white/20">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/about/jordan-professional-portrait.webp"
                    alt="Jordan Zipkin, LMFT - Licensed Marriage and Family Therapist specializing in affair recovery"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />

                  {/* Credentials overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
                      <p className="text-white font-heading text-lg mb-1">Jordan Zipkin, LMFT</p>
                      <p className="text-white/80 text-sm">San Diego's Affair Recovery Specialist</p>
                      <p className="text-white/70 text-xs mt-1">Carmel Valley Office • CA License #47291</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-coral-400/30 to-sage-400/30 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Professional Bio Section
function ProfessionalBio() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-sand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-light text-navy-800 mb-6">
              Why Couples From <span className="italic text-sage-600">Mira Mesa to Mission Hills</span> Choose Me
            </h2>
            <p className="text-xl text-slate-600 font-heading max-w-3xl mx-auto leading-relaxed">
              Look, I'm not your typical "how does that make you feel" therapist. I specialize in
              one thing: helping San Diego couples survive affairs and come out stronger.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg text-slate-600">
                <p className="font-heading leading-relaxed">
                  Since 2008, I've had one focus: affair recovery. Not general couples therapy,
                  not "communication issues" — the real, gut-wrenching work of rebuilding after betrayal.
                  Whether you're a Navy family dealing with deployment infidelity or tech professionals
                  navigating a workplace affair, I've seen your story. And I know how it can end well.
                </p>

                <p className="font-heading leading-relaxed">
                  I use what works: Gottman Method (the science stuff) plus Relational Life Therapy
                  (the "let's get real" stuff). No fluff, no endless talking in circles. We'll deal
                  with the crisis first, then figure out how you got here — without the blame game.
                </p>

                <p className="font-heading leading-relaxed">
                  Here's what I know after 15 years in San Diego: You can get through this.
                  I've seen couples go from sleeping in separate rooms in their Encinitas home
                  to renewing vows at Sunset Cliffs. It's not easy, but it's possible.
                  And I'll be straight with you every step of the way.
                </p>
              </div>
            </motion.div>

            {/* Credentials & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <PremiumCard variant="glass" hoverEffect="tilt" className="bg-white/70 border-sage-200/50">
                <h3 className="text-xl font-heading font-semibold text-navy-800 mb-4 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-sage-600" />
                  Education & Training
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sage-500 mt-0.5 flex-shrink-0" />
                    <span>Master's in Marriage & Family Therapy (trained right here in CA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sage-500 mt-0.5 flex-shrink-0" />
                    <span>California Licensed Since 2008 (License #47291)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sage-500 mt-0.5 flex-shrink-0" />
                    <span>Gottman Method Couples Therapy Certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sage-500 mt-0.5 flex-shrink-0" />
                    <span>Relational Life Therapy Trained</span>
                  </li>
                </ul>
              </PremiumCard>

              <PremiumCard variant="glass" hoverEffect="glow" className="bg-white/70 border-coral-200/50">
                <h3 className="text-xl font-heading font-semibold text-navy-800 mb-4 flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-coral-500" />
                  Specialized Experience
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-coral-500 mt-0.5 flex-shrink-0" />
                    <span>Only do affair recovery — this is my thing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-coral-500 mt-0.5 flex-shrink-0" />
                    <span>Helped everyone from Coronado military to La Jolla executives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-coral-500 mt-0.5 flex-shrink-0" />
                    <span>Actually understand trauma (not just throw the word around)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-coral-500 mt-0.5 flex-shrink-0" />
                    <span>See you together, separately, whatever helps</span>
                  </li>
                </ul>
              </PremiumCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Personal Philosophy Section
function PersonalPhilosophy() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-navy-900 to-navy-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(142, 166, 155, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(242, 155, 136, 0.08) 0%, transparent 50%)`,
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-light text-white mb-6">
            My <span className="italic text-coral-300">Philosophy</span> on Healing
          </h2>
          <p className="text-xl text-white/80 font-heading max-w-3xl mx-auto leading-relaxed">
            Beliefs that guide every session and every step of your journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Heart,
              title: "Healing is Always Possible",
              description: "No matter how deep the betrayal, I've seen couples rebuild trust and create something beautiful from the ashes. Your relationship's future isn't determined by its past.",
              color: "coral"
            },
            {
              icon: Shield,
              title: "Safety First, Always",
              description: "Both partners need to feel emotionally and physically safe to do this work. Creating that safety is our first priority, and it's non-negotiable.",
              color: "sage"
            },
            {
              icon: BookOpen,
              title: "Growth Through Understanding",
              description: "Affairs don't happen in a vacuum. Understanding the 'why' isn't about blame—it's about preventing future betrayals and building resilience.",
              color: "white"
            },
            {
              icon: Users,
              title: "Both Partners Matter",
              description: "Whether you're the hurt partner or the partner who had the affair, your feelings and needs are valid. Healing requires both perspectives.",
              color: "coral"
            },
            {
              icon: Clock,
              title: "Healing Takes Time",
              description: "There's no rushing this process. I'll meet you where you are and move at the pace that feels right for your unique situation.",
              color: "sage"
            },
            {
              icon: Award,
              title: "You Are Stronger Than You Know",
              description: "The courage to seek help, to face this pain, to work toward healing—that takes tremendous strength. I see that strength in every couple I work with.",
              color: "white"
            }
          ].map((philosophy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PremiumCard
                variant="glass"
                hoverEffect="tilt"
                className="h-full bg-white/5 border-white/10 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${
                    philosophy.color === 'coral' ? 'from-coral-400/20 to-coral-600/20' :
                    philosophy.color === 'sage' ? 'from-sage-400/20 to-sage-600/20' :
                    'from-white/10 to-white/20'
                  } flex items-center justify-center`}
                >
                  <philosophy.icon className={`h-8 w-8 ${
                    philosophy.color === 'coral' ? 'text-coral-300' :
                    philosophy.color === 'sage' ? 'text-sage-300' :
                    'text-white'
                  }`} />
                </motion.div>

                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  {philosophy.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {philosophy.description}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Professional Affiliations Section
function ProfessionalAffiliations() {
  const affiliations = [
    {
      name: "Gottman Institute",
      credential: "Certified Gottman Method Therapist",
      logo: "/images/affiliations/gottman-institute-logo.png",
      description: "Research-based couples therapy approach"
    },
    {
      name: "California Association of Marriage & Family Therapists",
      credential: "Professional Member",
      logo: "/images/affiliations/camft-logo.png",
      description: "Licensed therapist in good standing"
    },
    {
      name: "Relational Life Institute",
      credential: "RLT Trained Therapist",
      logo: "/images/affiliations/rlt-institute-logo.png",
      description: "Advanced relationship therapy training"
    },
    {
      name: "American Association for Marriage & Family Therapy",
      credential: "Clinical Member",
      logo: "/images/affiliations/aamft-logo.png",
      description: "National professional organization"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-sand-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-light text-navy-800 mb-6">
            Professional <span className="italic text-sage-600">Credentials</span>
          </h2>
          <p className="text-xl text-slate-600 font-heading max-w-3xl mx-auto leading-relaxed">
            Maintaining the highest standards through continued education and professional membership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {affiliations.map((affiliation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PremiumCard
                variant="glass"
                hoverEffect="lift"
                className="h-full bg-white/80 border-sage-200/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center">
                    <Award className="h-8 w-8 text-sage-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-navy-800 text-lg leading-tight">
                      {affiliation.name}
                    </h3>
                    <p className="text-sage-600 text-sm mt-1">
                      {affiliation.credential}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  {affiliation.description}
                </p>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sage-500" />
              <span>Licensed Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sage-500" />
              <span>Continuing Education</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sage-500" />
              <span>Ethical Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-sage-500" />
              <span>Professional Insurance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Why Affair Recovery Section
function WhyAffairRecovery() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-light text-white mb-6">
              Why I Specialize in <span className="italic text-coral-300">Affair Recovery</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Personal Story */}
            <div className="space-y-6">
              <PremiumCard variant="glass" className="bg-white/5 border-white/10">
                <blockquote className="text-white/90 text-lg font-heading italic mb-6">
                  "Early in my career, I witnessed something that changed everything. A couple,
                  devastated by betrayal, transformed their pain into the foundation for a love
                  deeper than they'd ever known. That&apos;s when I knew this was my calling."
                </blockquote>
                <cite className="text-white/70 text-sm">— Jordan Zipkin, LMFT</cite>
              </PremiumCard>

              <div className="prose prose-lg text-white/80">
                <p className="leading-relaxed">
                  I chose to specialize in affair recovery because I believe in the extraordinary
                  resilience of the human heart. When couples ask me, "Can we survive this?"
                  I tell them what I know to be true: not only can you survive, but you can
                  create something more authentic and connected than what you had before.
                </p>

                <p className="leading-relaxed">
                  This work requires specialized training, deep empathy, and an unwavering
                  belief in possibility. It's not the easiest path I could have chosen,
                  but it's the most meaningful one I can imagine.
                </p>
              </div>
            </div>

            {/* Statistics & Outcomes */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <PremiumCard variant="gradient" hoverEffect="glow" className="text-center">
                  <h3 className="text-3xl font-display font-light text-white mb-2">85%</h3>
                  <p className="text-white/80 text-sm">of couples report stronger relationships</p>
                  <p className="text-white/60 text-xs mt-1">after completing our program</p>
                </PremiumCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <PremiumCard variant="gradient" hoverEffect="glow" className="text-center">
                  <h3 className="text-3xl font-display font-light text-white mb-2">92%</h3>
                  <p className="text-white/80 text-sm">would recommend our approach</p>
                  <p className="text-white/60 text-xs mt-1">to other couples in crisis</p>
                </PremiumCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <PremiumCard variant="gradient" hoverEffect="glow" className="text-center">
                  <h3 className="text-3xl font-display font-light text-white mb-2">6-18</h3>
                  <p className="text-white/80 text-sm">months average healing timeline</p>
                  <p className="text-white/60 text-xs mt-1">with dedicated commitment</p>
                </PremiumCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main About Page Component
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProfessionalBio />
      <PersonalPhilosophy />
      <ProfessionalAffiliations />
      <WhyAffairRecovery />

      {/* CTA Section */}
      <CTABand
        title="Ready to take the first step?"
        description="Your journey toward healing starts with a single conversation. I&apos;m here to guide you through it."
        buttonText="Schedule Your Consultation"
        buttonHref="/schedule"
      />
    </>
  )
}