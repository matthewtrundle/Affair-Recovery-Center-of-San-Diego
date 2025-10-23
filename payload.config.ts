import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

export default buildConfig({
  // Editor configuration - using Lexical rich text editor
  editor: lexicalEditor(),

  // Collections - we'll add these in the next phase
  collections: [],

  // Secret key for encrypting data - must be set in environment
  secret: process.env.PAYLOAD_SECRET || '',

  // Database adapter - Supabase Postgres
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
    user: 'users', // We'll create this collection later
    meta: {
      titleSuffix: '- Affair Recovery Center',
    },
  },

  // Server URL configuration
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
})
