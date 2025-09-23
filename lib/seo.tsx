import type { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  keywords?: string[]
  noindex?: boolean
}

const siteConfig = {
  name: 'Affair Recovery Center of San Diego',
  description: 'Evidence-based couples therapy specializing in affair recovery, betrayal trauma, and rebuilding trust. Gottman Method and Relational Life Therapy approaches.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://affairrecoverysandiego.com',
  ogImage: '/og/home.png',
  author: 'Jordan Zipkin, LMFT',
  links: {
    twitter: 'https://twitter.com/affairrecoverysd',
  },
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords,
  noindex = false,
}: SEOProps): Metadata {
  const siteTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name

  const siteDescription = description || siteConfig.description
  const siteUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const siteImage = image || siteConfig.ogImage

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: keywords?.join(', '),
    authors: author ? [{ name: author }] : [{ name: siteConfig.author }],
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
      creator: '@affairrecoverysd',
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: siteUrl,
    },
  }
}

export function generateStructuredData(type: string, data: any) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseData),
      }}
    />
  )
}

export function generateOrganizationSchema() {
  return generateStructuredData('Organization', {
    name: 'Affair Recovery Center of San Diego',
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-619-555-0123',
      contactType: 'customer service',
      availableLanguage: ['en'],
    },
    sameAs: [
      siteConfig.links.twitter,
    ],
  })
}

export function generateLocalBusinessSchema() {
  return generateStructuredData('LocalBusiness', {
    '@type': 'MedicalBusiness',
    name: 'Affair Recovery Center of San Diego',
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: '+1-619-555-0123',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'San Diego',
      addressRegion: 'CA',
      postalCode: '92101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.7157,
      longitude: -117.1611,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
  })
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return generateStructuredData('FAQPage', {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  })
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  })
}

export function generateArticleSchema(article: {
  title: string
  description: string
  author: string
  publishedTime: string
  modifiedTime?: string
  image?: string
}) {
  return generateStructuredData('Article', {
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    image: article.image ? `${siteConfig.url}${article.image}` : undefined,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/brand/logo.png`,
      },
    },
  })
}