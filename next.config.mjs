/** /** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Tadbir-Tejarat",
  assetPrefix: "/Tadbir-Tejarat",
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  }
};

export default nextConfig;