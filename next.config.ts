import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ottimizzazioni per velocizzare il build
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Ottimizzazioni per le immagini
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },
  // Ottimizzazioni per il build
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
