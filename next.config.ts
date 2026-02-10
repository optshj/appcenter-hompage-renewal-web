import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'server.inuappcenter.kr',
        pathname: '/image/photo/**'
      }
    ],
    qualities: [75, 100]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb'
    }
  }
};

export default nextConfig;
