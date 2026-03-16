/** @type {import('next').NextConfig} */

const repo = "FssaiLic"; // replace with your repo name

const nextConfig = {
  output: "export",            // required for static export
  images: {
    unoptimized: true,         // prevents next/image error
  },
  basePath: `/${repo}`,        // required for GitHub Pages
  assetPrefix: `/${repo}/`,    // ensures assets load correctly
};

module.exports = nextConfig;
