const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['react-vant'],
}

module.exports = withPlugins([withImages], nextConfig)
