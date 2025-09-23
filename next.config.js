/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  // Temporary workaround for CSS build issue
  swcMinify: false,
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer }) => {
    // Disable CSS minimization completely
    if (!isServer && config.optimization) {
      config.optimization.minimize = false;
    }
    return config;
  },
}

module.exports = nextConfig