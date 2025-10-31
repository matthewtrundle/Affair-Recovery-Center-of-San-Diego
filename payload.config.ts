import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

// Import collections
import { Users } from './src/collections/Users'
import { Posts } from './src/collections/Posts'
import { Media } from './src/collections/Media'
import { Subscribers } from './src/collections/Subscribers'
import { Categories } from './src/collections/Categories'
import { Newsletters } from './src/collections/Newsletters'

// Import custom components
import { Dashboard } from './src/components/Dashboard'

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
      titleSuffix: '- ARC',
      favicon: '/favicon.ico',
    },
    theme: 'light', // Clean, professional light theme
    css: './styles/admin.scss',
    components: {
      views: {
        Dashboard,
      },
    },
  },

  // Server URL configuration
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
})
