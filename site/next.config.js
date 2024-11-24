/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The unofficial store for Kasm supported workspaces.',
    icon: 'https://viandyg08.github.io/kasm-registry/1.0/sp2.png',
    listUrl: 'https://viandyg08.github.io/kasm-registry/',
    contactUrl: 'https://github.com/viandyg08',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
