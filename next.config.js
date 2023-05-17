/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.paypalobjects.com', 'www.mastercard.us'],
  },
}

module.exports = nextConfig
