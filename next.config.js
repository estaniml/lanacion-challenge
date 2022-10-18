/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com', 'static.glanacion.com'],
    
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
