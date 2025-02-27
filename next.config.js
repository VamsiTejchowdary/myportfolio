/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your Next.js configuration options here
  output: "standalone", // This can help with deployment issues
  reactStrictMode: true,
  swcMinify: true,
};

// Use CommonJS export syntax
module.exports = nextConfig;
