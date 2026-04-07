import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Replace "inportgroup-landing" with your GitHub repo name when deploying
  basePath: isProd ? "/inportgroup-landing" : "",
  assetPrefix: isProd ? "/inportgroup-landing/" : "",
  images: {
    unoptimized: true, // required for static export (no Next.js image server)
  },
};

export default nextConfig;
