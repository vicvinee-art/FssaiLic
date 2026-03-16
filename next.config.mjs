/** @type {import('next').NextConfig} */

const repo = "FssaiLic"; // your GitHub repository name

const nextConfig = {
  output: "export", // required for GitHub Pages static export
  images: {
    unoptimized: true, // fixes next/image export error
  },
  basePath: "/FssaiLic", // repository name
  assetPrefix: "/FssaiLic/", // ensures assets load correctly
};

export default nextConfig;
