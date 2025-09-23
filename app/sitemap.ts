import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://affairrecoverysandiego.com'

  const routes = [
    '',
    '/about',
    '/services/betrayal-recovery',
    '/approach',
    '/testimonials',
    '/faq',
    '/contact',
    '/schedule',
    '/blog',
    '/privacy',
    '/terms',
    '/hipaa',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/schedule' ? 0.9 : 0.8,
  }))
}