/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()

const nextConfig = {
  output: 'export',
  distDir: 'build',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config, {  }) => {
      // Adjust the Webpack config for client-side bundling
      config.module.rules.push({
        test: /\.ics$/i, // Regex for .ics files
        type: 'asset/resource', // Uses asset modules, which handle emitting the file and returning the file path
        generator: {
          filename: 'static/chunks/[path][name].[hash][ext]', // Output directory and file naming
        },
      });

    return config;
  },
}

module.exports = withMDX(nextConfig)
