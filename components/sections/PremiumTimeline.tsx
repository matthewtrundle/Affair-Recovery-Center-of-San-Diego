'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'

interface TimelineItem {
  phase: string
  title: string
  description: string
  duration: string
  tasks: string[]
  icon?: React.ReactNode
}

interface PremiumTimelineProps {
  items: TimelineItem[]
  title?: string
  subtitle?: string
}

export function PremiumTimeline({
  items,
  title = "Your Journey to Healing",
  subtitle = "A structured approach to rebuilding trust and connection"
}: PremiumTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-alabaster to-white" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-ocean mb-4">
            {title}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Progress Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-coral via-sage to-ocean"
            />
          </div>

          {/* Timeline Items */}
          {items.map((item, index) => (
            <TimelineCard
              key={index}
              item={item}
              index={index}
              isLast={index === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineCard({
  item,
  index,
  isLast
}: {
  item: TimelineItem
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center mb-12 lg:mb-20 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Card */}
      <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative bg-white rounded-2xl shadow-lg p-8 group hover:shadow-xl transition-shadow"
        >
          {/* Phase Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-coral to-sage rounded-full"
          >
            <span className="text-white text-sm font-medium">{item.phase}</span>
          </motion.div>

          {/* Content */}
          <div className="mt-4">
            <h3 className="text-2xl font-heading font-semibold text-ocean mb-2">
              {item.title}
            </h3>
            <p className="text-charcoal/70 mb-4">
              {item.description}
            </p>

            {/* Duration */}
            <div className="flex items-center gap-2 text-sm text-sage mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{item.duration}</span>
            </div>

            {/* Tasks */}
            <ul className="space-y-2">
              {item.tasks.map((task, taskIndex) => (
                <motion.li
                  key={taskIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + taskIndex * 0.05 }}
                  className="flex items-start gap-2 text-sm text-charcoal/60"
                >
                  <CheckCircle className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                  <span>{task}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Hover Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coral/5 to-sage/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          />
        </motion.div>
      </div>

      {/* Timeline Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="relative">
          <div className="w-16 h-16 bg-white rounded-full border-4 border-sage shadow-lg flex items-center justify-center">
            <span className="text-ocean font-bold text-lg">{index + 1}</span>
          </div>
          {/* Pulse Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-sage/30"
          />
        </div>
      </motion.div>

      {/* Spacer for opposite side */}
      <div className="hidden lg:block lg:w-5/12" />

      {/* Connection Arrow (not on last item) */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 top-16"
        >
          <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
        </motion.div>
      )}
    </motion.div>
  )
}

// Interactive Journey Map Component
export function InteractiveJourneyMap() {
  const phases: TimelineItem[] = [
    {
      phase: "Phase 1",
      title: "Crisis Stabilization",
      description: "Creating safety and managing the immediate trauma response",
      duration: "Sessions 1-3",
      tasks: [
        "Establish emotional safety",
        "Process initial shock and trauma",
        "Set boundaries and agreements",
        "Begin trauma education"
      ]
    },
    {
      phase: "Phase 2",
      title: "Understanding & Assessment",
      description: "Exploring what happened and why, without judgment",
      duration: "Sessions 4-8",
      tasks: [
        "Uncover relationship patterns",
        "Identify underlying issues",
        "Process emotions safely",
        "Build communication skills"
      ]
    },
    {
      phase: "Phase 3",
      title: "Rebuilding Trust",
      description: "Structured exercises to restore connection and security",
      duration: "Sessions 9-15",
      tasks: [
        "Trust-building exercises",
        "Transparency practices",
        "Repair conversations",
        "Intimacy restoration"
      ]
    },
    {
      phase: "Phase 4",
      title: "Creating Your Future",
      description: "Building a stronger, more authentic relationship",
      duration: "Sessions 16-20",
      tasks: [
        "Define new relationship vision",
        "Establish ongoing practices",
        "Prevent future crises",
        "Celebrate growth"
      ]
    }
  ]

  return <PremiumTimeline items={phases} />
}