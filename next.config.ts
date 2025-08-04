import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "imagekit.io" }],
  },
};

export default nextConfig;
