import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'color'],
    group: 'Content',
    description: 'Categories organize blog posts by topic. Each post must belong to one category. Categories appear as filter options on the blog page and as colored badges on post cards.',
    // Only show to admins (editors can select categories but don't need to manage them)
    hidden: ({ user }) => !user?.roles?.includes('admin'),
  },
  access: {
    read: () => true, // Public read access for blog
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL-friendly version of the name',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.name) {
              return data.name
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
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of this category',
      },
    },
    {
      name: 'color',
      type: 'select',
      required: true,
      defaultValue: 'turquoise',
      options: [
        { label: 'Turquoise', value: 'turquoise' },
        { label: 'Lime', value: 'lime' },
        { label: 'Deep Teal', value: 'deepTeal' },
        { label: 'Olive', value: 'olive' },
      ],
      admin: {
        description: 'Badge color for this category',
      },
    },
  ],
  timestamps: true,
}
