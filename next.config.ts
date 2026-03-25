import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    cssChunking: "strict",
  },
};

export default nextConfig;
