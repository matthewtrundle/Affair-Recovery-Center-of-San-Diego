'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ {
  question: string
  answer: string
}

interface FAQCategory {
  category: string
  questions: FAQ[]
}

interface FAQAccordionProps {
  categories: FAQCategory[]
}

export function FAQAccordion({ categories }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (question: string) => {
    setOpenItems(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    )
  }

  return (
    <>
      {categories.map((category) => (
        <div key={category.category} className="mb-12">
          <h2 className="text-2xl font-heading font-semibold text-navy mb-6">
            {category.category}
          </h2>
          <div className="space-y-4">
            {category.questions.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.question)}
                  className="w-full px-6 py-4 text-left flex items-start justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openItems.includes(faq.question)}
                >
                  <span className="font-semibold text-navy pr-4">
                    {faq.question}
                  </span>
                  {openItems.includes(faq.question) ? (
                    <ChevronUp className="h-5 w-5 text-sage flex-shrink-0 mt-1" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-sage flex-shrink-0 mt-1" />
                  )}
                </button>
                <AnimatePresence>
                  {openItems.includes(faq.question) && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-slate whitespace-pre-wrap">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}