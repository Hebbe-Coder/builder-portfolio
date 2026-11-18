import type { NextConfig } from "next";
const config: NextConfig = { poweredByHeader: false, reactStrictMode: true, ...(process.env.NEXT_STATIC_EXPORT === "1" ? { output: "export" } : {}) };
export default config;
