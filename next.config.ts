import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "fakestoreapi.com" },
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "placeimg.com" },
    ],
  },
};

export default nextConfig;
