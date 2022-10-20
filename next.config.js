/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    newNextLinkBehavior: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
