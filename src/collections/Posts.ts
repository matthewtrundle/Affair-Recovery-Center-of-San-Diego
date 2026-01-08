import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Blog Post',
    plural: 'Blog Posts',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', '_status', 'category', 'featured', 'publishedDate'],
    group: 'Content',
    description: 'Blog posts appear on the /blog page. Published posts are visible to visitors. Featured posts appear on the homepage.',
    listSearchableFields: ['title', 'excerpt', 'author'],
    preview: (doc) => {
      if (doc?.slug) {
        return `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${doc.slug}`
      }
      return null
    },
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.roles?.includes('admin'),
  },
  fields: [
    // Main content tab
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          description: 'Main post content',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              maxLength: 100,
              admin: {
                placeholder: 'Enter a compelling title...',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'slug',
                  type: 'text',
                  required: true,
                  unique: true,
                  index: true,
                  admin: {
                    width: '50%',
                    description: 'Auto-generated from title. Edit to customize URL.',
                  },
                  hooks: {
                    beforeValidate: [
                      ({ value, data }) => {
                        if (!value && data?.title) {
                          return data.title
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)/g, '')
                        }
                        return value
                      },
                    ],
                  },
                },
                {
                  name: 'author',
                  type: 'text',
                  required: true,
                  defaultValue: 'Jordan Zipkin, LMFT',
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              maxLength: 200,
              admin: {
                placeholder: 'Write a brief summary that appears in blog listings...',
                description: 'Max 200 characters. Shows on blog cards.',
              },
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [...defaultFeatures],
              }),
              admin: {
                description: 'The main body of your post. Use headings, lists, and formatting.',
              },
            },
          ],
        },
        {
          label: 'Media & Settings',
          description: 'Images and post settings',
          fields: [
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'Main image for blog cards and post header (recommended: 1200x675)',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'category',
                  type: 'relationship',
                  relationTo: 'categories',
                  required: true,
                  admin: {
                    width: '50%',
                    description: 'Select a category',
                  },
                },
                {
                  name: 'tags',
                  type: 'text',
                  hasMany: true,
                  admin: {
                    width: '50%',
                    description: 'Add tags for search',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'publishedDate',
                  type: 'date',
                  required: true,
                  defaultValue: () => new Date().toISOString(),
                  admin: {
                    width: '33%',
                    description: 'Publication date',
                    date: {
                      pickerAppearance: 'dayAndTime',
                    },
                  },
                },
                {
                  name: 'readTime',
                  type: 'number',
                  required: false,
                  admin: {
                    width: '33%',
                    description: 'Minutes to read',
                    placeholder: '5',
                  },
                },
                {
                  name: 'featured',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    width: '33%',
                    description: 'Show on homepage',
                    style: {
                      paddingTop: '24px',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          description: 'Search engine optimization',
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'metaTitle',
                  label: 'SEO Title',
                  type: 'text',
                  maxLength: 60,
                  admin: {
                    placeholder: 'Defaults to post title if empty',
                    description: 'Max 60 characters for search results',
                  },
                },
                {
                  name: 'metaDescription',
                  label: 'SEO Description',
                  type: 'textarea',
                  maxLength: 160,
                  admin: {
                    placeholder: 'Defaults to excerpt if empty',
                    description: 'Max 160 characters for search results',
                  },
                },
                {
                  name: 'keywords',
                  label: 'SEO Keywords',
                  type: 'text',
                  hasMany: true,
                  admin: {
                    description: 'Keywords help search engines understand your content',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
  versions: {
    drafts: true,
  },
}
