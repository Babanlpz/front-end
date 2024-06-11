/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "www.freepik.com",
      "www.unsplash.com",
      "www.pexels.com",
      "www.pixabay.com",
    ],
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
