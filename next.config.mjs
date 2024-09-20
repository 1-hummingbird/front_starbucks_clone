/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "simg.ssgcdn.com",
      },
      {
        protocol: "https",
        hostname: "sitem.ssgcdn.com",
      },
      { protocol: "https", hostname: "image.istarbucks.co.kr" },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
    ],
  },
};

export default nextConfig;
