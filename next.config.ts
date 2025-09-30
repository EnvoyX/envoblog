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
        hostname: "assetsio.gnwcdn.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
