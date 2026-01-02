'use client'

import { motion } from 'framer-motion'
import { Shield, Compass, Heart, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Stabilize',
    description: `Create safety and contain the crisis. We'll establish boundaries, manage immediate emotions, and help you both feel grounded enough to begin the work.`,
    icon: Shield,
    gradient: 'from-deepTeal-600 to-deepTeal-400',
  },
  {
    number: '02',
    title: 'Structure',
    description: `Understand what happened and why. Through guided conversations, we'll explore the factors that led to the affair and begin processing the impact on both partners.`,
    icon: Compass,
    gradient: 'from-turquoise-600 to-turquoise-400',
  },
  {
    number: '03',
    title: 'Rebuild',
    description: `Create a new relationship together. Using proven techniques, we'll help you rebuild trust, deepen intimacy, and create a stronger bond than you had before.`,
    icon: Heart,
    gradient: 'from-lime-500 to-lime-300',
  },
]

export function ProcessSteps() {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Static background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lightGray-50 via-white to-turquoise-50" />

      {/* Static decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-turquoise-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-lime-200/20 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-turquoise-400 to-turquoise-500 mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-display font-light text-deepTeal mb-6">
            Your Journey to
            <span className="block text-5xl lg:text-6xl font-normal italic gradient-text mt-2">
              Recovery
            </span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto font-heading">
            Every couple's path is unique, but the process follows a proven framework
            designed to guide you from crisis to connection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glass card */}
                <div className="relative h-full">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10 rounded-2xl transition-opacity duration-300 group-hover:opacity-20`} />

                  {/* Glass effect */}
                  <div className="relative glass backdrop-blur-xl rounded-2xl p-8 lg:p-10 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1">
                    {/* Static number */}
                    <div className="absolute -top-6 -right-6 text-8xl font-display font-light text-gray-200/50">
                      {step.number}
                    </div>

                    {/* Icon with gradient background */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} mb-6 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-display font-medium text-deepTeal-700 mb-4">
                      {step.title}
                    </h3>

                    <p className="text-base text-slate leading-relaxed">
                      {step.description}
                    </p>

                    {/* Static accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </div>

                {/* Static connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-gray-300 transform -translate-y-1/2 z-20" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate mb-6">
            Ready to take the first step on your journey?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-deepTeal-600 to-deepTeal-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:bg-white hover:text-deepTeal-700 hover:shadow-xl border-2 border-transparent hover:border-deepTeal-700"
            whileTap={{ scale: 0.98 }}
          >
            Begin Your Recovery Journey
            <Sparkles className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}