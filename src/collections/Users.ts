import type { CollectionConfig, AccessArgs } from 'payload'

// Helper to check if any users exist in the database
const isFirstUser = async ({ req }: AccessArgs): Promise<boolean> => {
  const users = await req.payload.find({
    collection: 'users',
    limit: 1,
    depth: 0,
  })
  return users.totalDocs === 0
}

// Check if user is admin
export const isAdmin = ({ req: { user } }: AccessArgs): boolean => {
  return user?.roles?.includes('admin') ?? false
}

// Check if user is editor or admin
export const isEditorOrAdmin = ({ req: { user } }: AccessArgs): boolean => {
  return user?.roles?.includes('admin') || user?.roles?.includes('editor') || false
}

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Admin User',
    plural: 'Admin Users',
  },
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'roles'],
    group: 'Settings',
    description: 'Admin users who can log in to this dashboard. Admins have full access. Editors can manage posts, subscribers, and newsletters.',
    // Only show to admins
    hidden: ({ user }) => !user?.roles?.includes('admin'),
  },
  access: {
    // Allow creating the first user, or require admin for subsequent users
    create: async (args) => {
      // If no users exist, allow creating the first one
      if (await isFirstUser(args)) return true
      // Otherwise, only admins can create users
      return isAdmin(args)
    },
    // Only admins can read, update, and delete users
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      required: true,
      defaultValue: ['admin'],
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
      hasMany: true,
      admin: {
        description: 'Admin: Full access. Editor: Can manage posts and media.',
      },
    },
  ],
  timestamps: true,
}
