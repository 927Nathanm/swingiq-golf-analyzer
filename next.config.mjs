/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    '@tensorflow/tfjs',
    '@tensorflow-models/pose-detection',
  ],
  turbopack: {
    resolveAlias: {
      '@mediapipe/pose': './lib/stubs/mediapipe-pose.js',
    },
  },
}

export default nextConfig
