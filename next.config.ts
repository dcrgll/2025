import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.discordapp.com'
      },
      {
        hostname: 'i.scdn.co'
      }
    ]
  }
}

export default nextConfig
