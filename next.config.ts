import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compilerOptions: {
    paths: {
      "@/*": ["./*"],
    },
  },
};

export default nextConfig;
