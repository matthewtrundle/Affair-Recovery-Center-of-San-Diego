'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PremiumCard } from '@/components/ui/PremiumCard'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  preferredContact: 'email' | 'phone' | 'either'
  sessionType: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    sessionType: '',
  })

  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredContact: 'email',
        sessionType: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Success state
  if (status === 'success') {
    return (
      <PremiumCard
        variant="gradient"
        hoverEffect="lift"
        className="bg-gradient-to-br from-turquoise-600 to-lime-600"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
          >
            <CheckCircle className="h-8 w-8 text-white" />
          </motion.div>
          <h3 className="text-2xl font-heading font-semibold text-white mb-3">
            Message Sent Successfully!
          </h3>
          <p className="text-white/90 mb-6 max-w-md mx-auto">
            Thank you for reaching out. I'll get back to you within 24-48 hours.
          </p>
          <Button
            onClick={() => setStatus('idle')}
            variant="secondary"
            className="bg-white text-turquoise-700 hover:bg-gray-50"
          >
            Send Another Message
          </Button>
        </motion.div>
      </PremiumCard>
    )
  }

  // Form state
  return (
    <PremiumCard
      variant="glass"
      hoverEffect="lift"
      className="bg-white/80 backdrop-blur-sm border border-turquoise-100"
    >
      <div className="flex items-start space-x-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
          className="p-3 rounded-xl bg-turquoise-100 flex-shrink-0"
        >
          <Mail className="h-6 w-6 text-turquoise-700" />
        </motion.div>

        <div className="flex-1">
          <h3 className="text-xl lg:text-2xl font-heading font-semibold mb-3 text-navy">
            Send Me a Message
          </h3>
          <p className="text-base lg:text-lg mb-6 leading-relaxed text-slate">
            Need to write it all out? Have specific questions? Not ready to talk yet? This form works great.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                Name <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-turquoise-200 focus:border-turquoise-500 focus:ring-2 focus:ring-turquoise-200 outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                Email <span className="text-coral">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-turquoise-200 focus:border-turquoise-500 focus:ring-2 focus:ring-turquoise-200 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
                Phone <span className="text-slate-400 text-xs">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-turquoise-200 focus:border-turquoise-500 focus:ring-2 focus:ring-turquoise-200 outline-none transition-all"
                placeholder="(619) 555-0123"
              />
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium text-navy mb-2">
                Preferred Contact Method
              </label>
              <div className="flex gap-4">
                {[
                  { value: 'email', label: 'Email', icon: Mail },
                  { value: 'phone', label: 'Phone', icon: Phone },
                  { value: 'either', label: 'Either', icon: Mail },
                ].map(({ value, label, icon: Icon }) => (
                  <label
                    key={value}
                    className={`flex-1 flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.preferredContact === value
                        ? 'border-turquoise-500 bg-turquoise-50 text-navy'
                        : 'border-gray-200 hover:border-turquoise-200 text-slate'
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferredContact"
                      value={value}
                      checked={formData.preferredContact === value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Session Type */}
            <div>
              <label htmlFor="sessionType" className="block text-sm font-medium text-navy mb-1">
                Session Type Interest
              </label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-turquoise-200 focus:border-turquoise-500 focus:ring-2 focus:ring-turquoise-200 outline-none transition-all bg-white"
              >
                <option value="">Select an option...</option>
                <option value="in-person">In-Person Sessions</option>
                <option value="online">Online (Telehealth) Sessions</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                Message <span className="text-coral">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg border border-turquoise-200 focus:border-turquoise-500 focus:ring-2 focus:ring-turquoise-200 outline-none transition-all resize-none"
                placeholder="Tell me what's on your mind. What brings you here? What are you hoping for?"
              />
              <p className="text-xs text-slate-500 mt-1">
                Your message is confidential and secure.
              </p>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 p-3 bg-coral-50 border border-coral-200 rounded-lg"
              >
                <AlertCircle className="h-5 w-5 text-coral-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-coral-900">
                    {errorMessage || 'Failed to send message'}
                  </p>
                  <p className="text-xs text-coral-700 mt-1">
                    Please try again or email directly at jordan@affairrecoverysd.com
                  </p>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-turquoise-600 hover:bg-turquoise-700 text-white font-semibold py-3"
              size="lg"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>

            <p className="text-xs text-slate-500 text-center">
              I'll respond within 24-48 hours
            </p>
          </form>
        </div>
      </div>
    </PremiumCard>
  )
}
