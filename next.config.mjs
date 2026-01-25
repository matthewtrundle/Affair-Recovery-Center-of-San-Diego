import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [60, 75, 85, 100],
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
