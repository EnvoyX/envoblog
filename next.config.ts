import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "i.redd.it",
        protocol: "https",
        port: "",
      },
      {
        hostname: "external-preview.redd.it",
        protocol: "https",
        port: "",
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "assetsio.gnwcdn.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
