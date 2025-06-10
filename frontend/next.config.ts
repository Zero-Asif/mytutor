import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [
      'img.daisyui.com', 
      'images.unsplash.com', 
      'randomuser.me', 
      'localhost',
      'lh3.googleusercontent.com'
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',
      }
    ]
  }
}

export default nextConfig