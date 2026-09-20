/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions ? "/Tadbir-Tejarat" : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGithubActions ? "/Tadbir-Tejarat/" : "",
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

export default nextConfig;