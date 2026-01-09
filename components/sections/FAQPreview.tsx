'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Is staying together the right choice after an affair?',
    answer: 'Only you can decide. My role is to give you the clarity, skills, and structure you need to make that choice with confidence.',
  },
  {
    question: 'Should I ask every detail about the affair?',
    answer: "No. Reliving graphic details only adds pain. What helps is understanding why it happened and how your partner will ensure it doesn't happen again.",
  },
  {
    question: 'Can trust really be rebuilt?',
    answer: 'Yes. It feels impossible now, but with honesty, patience, and guided support, many couples rebuild—and even grow stronger.',
  },
]

export function FAQPreview() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deepTeal mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            You probably have many questions right now. Here are some I hear most often.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-lightGray-50 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-turquoise flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-deepTeal mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-slate">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button variant="pill-outline" size="lg" asChild>
              <Link href="/faq">
                View All FAQs
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}