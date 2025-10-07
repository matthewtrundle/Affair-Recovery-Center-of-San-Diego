import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'Affair Recovery Testimonials | San Diego Couples Counseling',
  description: 'Real client testimonials about affair recovery therapy in San Diego—how couples rebuilt trust, calmed emotions, and reconnected.',
  url: '/testimonials',
})

const testimonials = [
  {
    quote: "Jordan gave us the roadmap we desperately needed. We're not just surviving—we're closer than ever.",
    author: "M.S.",
    role: "Couples Client"
  },
  {
    quote: "He was the only one who could get through to my husband. Firm, but kind. Exactly what we needed.",
    author: "L.B.",
    role: "Couples Client"
  },
  {
    quote: "I thought trust was gone for good. Jordan showed us how to rebuild it, step by step.",
    author: "J.P.",
    role: "Couples Client"
  },
  {
    quote: "Jordan doesn't just listen—he teaches you real tools.",
    author: "C.W.",
    role: "Couples Client"
  },
  {
    quote: "For the first time, I felt like a therapist understood both of us.",
    author: "A.K.",
    role: "Couples Client"
  },
  {
    quote: "He made me feel safe and held my partner accountable without shaming him.",
    author: "R.T.",
    role: "Couples Client"
  },
  {
    quote: "Jordan gave us structure, hope, and confidence we could make it through.",
    author: "E.B.",
    role: "Couples Client"
  },
  {
    quote: "We walked in doubting everything. We walked out with hope—and over time, trust.",
    author: "D.L.",
    role: "Couples Client"
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lightGray-100 via-white to-turquoise-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6">
            Affair Recovery Testimonials
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl mx-auto">
            Real stories from clients who've walked this path and found healing.
          </p>
        </div>
      </section>

      {/* What Clients Say */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-12 text-center">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-lightGray-50 rounded-lg p-8 border border-turquoise-100"
              >
                <p className="text-lg text-slate italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-deepTeal-600">
                      — {testimonial.author}
                    </p>
                    <p className="text-sm text-slate/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Start Your Own Success Story"
        description="Join the clients who have found hope, healing, and renewed connection."
        buttonText="Schedule Your Consultation"
        buttonHref="/schedule"
      />
    </>
  )
}
