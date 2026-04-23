import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(process.cwd(), "../../"),
  },
};

export default nextConfig;
