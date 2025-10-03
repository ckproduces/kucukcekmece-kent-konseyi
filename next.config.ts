import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.**.**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.**.**.**",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**.**.**.**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
      },
      {
        protocol: "http",
        hostname: "**.**.**",
        port: "",
      },
    ],
  },
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
