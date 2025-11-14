import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer }) => {
    // Disable CSS minimization due to syntax error in generated CSS at line 2488
    // TODO: Fix CSS syntax error and re-enable for better performance
    if (!isServer && config.optimization) {
      config.optimization.minimize = false;
    }
    return config;
  },
}

export default withPayload(nextConfig)
