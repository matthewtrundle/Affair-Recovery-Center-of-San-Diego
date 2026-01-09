import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
// import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob' // Disabled - version incompatibility
import { buildConfig } from 'payload'

// Import collections
import { Users } from './src/collections/Users'
import { Posts } from './src/collections/Posts'
import { Media } from './src/collections/Media'
import { Subscribers } from './src/collections/Subscribers'
import { Categories } from './src/collections/Categories'
import { Newsletters } from './src/collections/Newsletters'

export default buildConfig({
  // Editor configuration - using Lexical rich text editor
  editor: lexicalEditor(),

  // Collections
  collections: [Users, Posts, Media, Subscribers, Categories, Newsletters],

  // Secret key for encrypting data - must be set in environment
  secret: process.env.PAYLOAD_SECRET || '',

  // Database adapter - Neon Postgres (Vercel-managed)
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  // Image processing with Sharp
  sharp,

  // TypeScript configuration
  typescript: {
    outputFile: 'payload-types.ts',
  },

  // Admin panel configuration
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- ARC Admin',
      description: 'Affair Recovery Center - Content Management',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/favicon.png',
        },
      ],
    },
    theme: 'light',
    components: {
      graphics: {
        Logo: '@/components/admin/Logo',
        Icon: '@/components/admin/Icon',
      },
      beforeDashboard: ['@/components/admin/DashboardWelcome'],
      providers: ['@/components/admin/AdminHelpProvider'],
    },
  },

  // Server URL configuration
  // In development, use empty string to allow Payload to use relative URLs
  // In production, use the actual site URL from environment
  serverURL: process.env.NODE_ENV === 'production'
    ? (process.env.NEXT_PUBLIC_SITE_URL || '')
    : '',

  // Plugins - Cloud storage disabled temporarily due to version incompatibility
  // TODO: Re-enable when @payloadcms/storage-vercel-blob is updated
  // Media will use local storage for now
  plugins: [],
})
