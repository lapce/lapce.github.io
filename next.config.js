const withTM = require("next-transpile-modules")(["react-github-btn"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/n8tGJ6Rn6D',
        permanent: true,
      },
      {
        source: '/docs',
        destination: 'https://docs.lapce.dev/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['img.shields.io'],
  },
}

module.exports = withTM(nextConfig);
