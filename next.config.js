p/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // This will completely skip ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will completely skip TypeScript checks during builds
    ignoreBuildErrors: true,
  },
  // Add this to handle image optimization
  images: {
    domains: [], // Add any external image domains you use
    unoptimized: true, // Temporarily disable image optimization if needed
  },
}

module.exports = nextConfig
