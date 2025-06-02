import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
    ],
  },
  serverActions: {
    bodySizeLimit: '5mb'
  }
};

export default nextConfig;
