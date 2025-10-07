// Next.js configuration file
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Use the new static HTML export mode (replaces next export)
  output: 'export',
  // trailingSlash true can help with GitHub Pages serving nested routes
  trailingSlash: true,
  // When hosting on GitHub Pages under a repo (e.g. https://username.github.io/porto)
  basePath: '/porto',
  assetPrefix: '/porto',
}

module.exports = nextConfig
  // we must set basePath and assetPrefix so static assets and _next files are loaded from the repo path.
  basePath: '/aymen_portfolio',
  assetPrefix: '/aymen_portfolio/',
  // Disable Next.js' image optimization for static export on GitHub Pages (optional but safer)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
