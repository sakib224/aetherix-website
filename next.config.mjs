const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['placehold.co'],
  },
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ disables ESLint errors during build
  },
};

export default nextConfig;
