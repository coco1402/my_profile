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
};

export default nextConfig;
