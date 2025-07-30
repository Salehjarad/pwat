import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
};

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
});

export default withPWA(nextConfig);
