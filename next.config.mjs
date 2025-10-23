import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer }) => {
    // Disable CSS minimization completely
    if (!isServer && config.optimization) {
      config.optimization.minimize = false;
    }
    return config;
  },
}

export default withPayload(nextConfig)
