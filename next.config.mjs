/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['libsql'],
  },
  reactStrictMode: true,
};

export default nextConfig;
