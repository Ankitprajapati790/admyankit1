/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,

  // ✅ Allow images from external domains (customize as needed)
  images: {
    domains: [
      'your-image-domain.com' // ⛔ Replace this with the actual domain you're loading images from
    ],
  },

  // ✅ Custom Webpack aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, './'),
      '@components': path.resolve(__dirname, 'components'),
      '@lib': path.resolve(__dirname, 'lib'),
    };

    return config;
  },
};

module.exports = nextConfig;
