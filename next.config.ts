import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // More granular responsive widths reduce oversized downloads in some breakpoints.
    deviceSizes: [360, 420, 560, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384, 420, 560],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
