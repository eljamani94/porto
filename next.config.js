/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/porto',
  assetPrefix: '/porto',
  images: {
    unoptimized: true,
    remotePatterns: []
  },
  // Add public directory assets to the base path
  publicRuntimeConfig: {
    basePath: '/porto',
  }
};

module.exports = nextConfig;
