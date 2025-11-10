/** @type {import('next').NextConfig} */
const nextConfig = {
  // 在开发环境禁用缓存
  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      maxInactiveAge: 0,
      pagesBufferLength: 0,
    },
  }),
  // 指定 Turbopack 根目录
  turbopack: {
    root: process.cwd(),
  },
  // 禁用 ESLint 检查
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 图片优化配置
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
