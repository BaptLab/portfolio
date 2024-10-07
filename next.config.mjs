/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true, // Ensures images work when exported
  },
};

export default nextConfig;
