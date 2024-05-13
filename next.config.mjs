/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "www.freepik.com", "www.unsplash.com"],
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
