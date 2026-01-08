import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Image',
    plural: 'Media Library',
  },
  upload: {
    staticDir: 'public/images/blog',
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 800,
        height: 600,
        position: 'centre',
      },
      {
        name: 'feature',
        width: 1200,
        height: 675,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    formatOptions: {
      format: 'webp',
      options: {
        quality: 82,
      },
    },
  },
  admin: {
    group: 'Content',
    useAsTitle: 'alt',
    description: 'Upload images for blog posts and pages. Images are automatically optimized and resized for web performance. All images appear in the Media Library.',
    // Only show to admins (editors can still upload via Posts but don't need direct access)
    hidden: ({ user }) => !user?.roles?.includes('admin'),
  },
  access: {
    read: () => true, // Public can read media
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.roles?.includes('admin'),
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'Alternative text for accessibility and SEO',
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Optional caption displayed below image',
      },
    },
    {
      name: 'focalPoint',
      type: 'point',
      admin: {
        description: 'Important focal area for cropping (click on image)',
      },
    },
  ],
  timestamps: true,
}
