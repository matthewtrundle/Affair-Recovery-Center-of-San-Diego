import { Metadata } from 'next'
import { CalendlyEmbed } from '@/components/CalendlyEmbed'
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Book Affair Recovery Therapy | San Diego & Virtual Sessions',
  description: 'Start healing today. Book affair recovery therapy in San Diego with Jordan Zipkin. Virtual counseling available for Los Angeles and all of California.',
  url: '/schedule',
})

export default function SchedulePage() {
  const scheduleSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Book Affair Recovery Therapy",
    "url": "https://YOUR-DOMAIN.com/book-a-session",
    "potentialAction": {
      "@type": "ScheduleAction",
      "target": "https://YOUR-BOOKING-LINK.com/",
      "name": "Book a Session"
    }
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scheduleSchema) }}
      />
      {generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Schedule Consultation', url: '/schedule' },
      ])}

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-lightGray-100 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-display text-deepTeal-600 mb-6">
              Book Affair Recovery Therapy
            </h1>
            <p className="text-xl text-slate leading-relaxed">
              Start healing today. Choose an in-person session in San Diego or a virtual session from
              anywhere in California, including Los Angeles. You'll get a clear first-step plan and a
              calm, structured environment to begin recovery.
            </p>
          </div>

          {/* What to Expect */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-turquoise-100">
              <h2 className="text-2xl font-heading font-semibold text-deepTeal-600 mb-6">
                What to Expect at Booking
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-turquoise text-2xl mr-3">•</span>
                  <span className="text-lg text-slate">
                    Select date/time that works for both (or for you individually).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-turquoise text-2xl mr-3">•</span>
                  <span className="text-lg text-slate">
                    Complete a brief intake (secure, HIPAA-compliant).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-turquoise text-2xl mr-3">•</span>
                  <span className="text-lg text-slate">
                    Receive confirmation and telehealth link (if virtual).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Calendly Embed */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <CalendlyEmbed />
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="max-w-4xl mx-auto mt-8 p-6 bg-lime-50 rounded-lg border border-lime-200">
            <p className="text-center text-slate">
              <strong>If you're experiencing a mental health emergency,</strong> please call 988
              (Suicide & Crisis Lifeline) or 911 immediately.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
