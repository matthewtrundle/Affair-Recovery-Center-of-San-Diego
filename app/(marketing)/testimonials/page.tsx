import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'Client Success Stories | Couples Therapy Reviews',
  description: 'Read how couples have successfully rebuilt after affairs. Real stories of healing and trust restoration through therapy.',
  keywords: ['couples therapy reviews san diego', 'marriage counseling testimonials'],
  url: '/testimonials',
})

const testimonials = [
  {
    quote: "We are so happy we connected with Jordan. We were reluctant to try therapy at first but after meeting him, we felt confident and comfortable.",
    author: "Nichole A.",
    role: "Couples Client"
  },
  {
    quote: "I didn't really notice how [anxiety] was impacting my life until my wife told me she was worried about our marriage and my overall well being. She suggested I tried therapy, but I was hesitant... Jordan helped me work through everything and our marriage is stronger than ever.",
    author: "Peter C.",
    role: "Couples Client"
  },
  {
    quote: "Jordan has helped so much with dealing with my husband. I would highly recommend.",
    author: "Darlene A.",
    role: "Couples Client"
  },
  {
    quote: "He's helped me immensely with ways to manage and improve my anxiety with various coping mechanisms. He helps me spread my thoughts out and rationalize and realize. He's easy to talk to as well as patient and kind. Highly recommend.",
    author: "Joseph F.",
    role: "Individual Client"
  },
  {
    quote: "After a traumatic accident, I started therapy with Jordan. Jordan was easy to talk to, and helped me process what was going on, and help me cope with the trauma.",
    author: "Kevin M.",
    role: "Individual Client"
  },
  {
    quote: "Jordan has been so helpful to me! He has been able to provide me honest and constructive feedback in a way that has truly made a positive impact on me. Jordan has a fantastic ability to really listen to what you are saying.",
    author: "V.S.",
    role: "Individual Client"
  },
  {
    quote: "Changed my life! He has made a huge impact. I struggle with severe trauma and depression, he has helped me deal through hard moments. He gets me and not only does he give me guidance, he meets me where I'm at and helps me get back up.",
    author: "Ale V.",
    role: "Individual Client"
  },
  {
    quote: "Jordan is incredibly welcoming, warm, intelligent, intuitive and compassionate. I have witnessed his kind hearted approach. He is great in making you feel comfortable and safe.",
    author: "Alex G.",
    role: "Colleague Recommendation"
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
