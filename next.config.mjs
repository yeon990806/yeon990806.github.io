/** @type {import('next').NextConfig} */

const assetPrefix = process.env.NODE_ENV === 'production' ? 'https://yeon990806.github.io/' : ''

const nextConfig = {
  output: 'export',
  assetPrefix,
};

export default nextConfig;
