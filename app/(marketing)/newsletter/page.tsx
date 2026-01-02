'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, AlertCircle, Loader2, Shield, Heart, Sparkles } from 'lucide-react'
import { PremiumCard } from '@/components/ui/PremiumCard'
import Link from 'next/link'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, source: 'newsletter-page', honeypot }),
      })

      const data = await response.json()

      setResult({
        success: data.success,
        message: data.message || (data.success ? 'Successfully subscribed!' : 'Failed to subscribe'),
      })

      if (data.success) {
        setEmail('')
        setFirstName('')
      }
    } catch (error) {
      setResult({
        success: false,
        message: 'Network error. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-deepTeal-600 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-turquoise mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Newsletter Signup</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-display font-light text-white mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-lime to-turquoise bg-clip-text text-transparent">
              Healing Community
            </span>
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get evidence-based insights, practical tools, and hope delivered to your inbox. Join hundreds of couples on their recovery journey.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <PremiumCard variant="glass" className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                  First Name <span className="text-white/50">(optional)</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jordan"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-turquoise/50 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-turquoise/50 transition-all"
                />
              </div>

              {/* Honeypot - hidden field for spam protection */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full py-4 px-6 bg-gradient-to-r from-lime to-turquoise text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Subscribe to Newsletter
                  </>
                )}
              </button>

              {/* Result Message */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-start gap-3 ${
                    result.success
                      ? 'bg-green-500/10 border border-green-500/20'
                      : 'bg-red-500/10 border border-red-500/20'
                  }`}
                >
                  {result.success ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className={result.success ? 'text-green-100' : 'text-red-100'}>
                    {result.message}
                  </p>
                </motion.div>
              )}

              {/* Privacy Notice */}
              <p className="text-sm text-white/60 text-center">
                By subscribing, you agree to receive emails from Affair Recovery Center. We respect your privacy and will never spam or sell your information. Unsubscribe anytime.
              </p>
            </form>
          </PremiumCard>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Sparkles className="w-8 h-8 text-turquoise" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">
              Evidence-Based Insights
            </h3>
            <p className="text-white/70">
              Neuroscience-backed strategies for healing from betrayal trauma
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Heart className="w-8 h-8 text-lime" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">
              Practical Tools
            </h3>
            <p className="text-white/70">
              Actionable exercises you can use immediately in your recovery
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Shield className="w-8 h-8 text-turquoise" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">
              Privacy Protected
            </h3>
            <p className="text-white/70">
              Your email is safe with us. No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            Or explore our blog
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
