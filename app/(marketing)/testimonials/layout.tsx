import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Testimonials - Real Stories of Hope & Healing | Affair Recovery Center',
  description: 'Read inspiring stories from couples who have successfully rebuilt their relationships after betrayal. Evidence-based affair recovery with proven results in San Diego.',
  keywords: [
    'affair recovery testimonials',
    'betrayal trauma success stories',
    'couples therapy results San Diego',
    'relationship healing stories',
    'marriage recovery testimonials',
    'Gottman Method success',
    'infidelity recovery stories'
  ],
})

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}