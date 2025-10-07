/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/porto',
  assetPrefix: '/porto',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
