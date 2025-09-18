const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    strictNextHead: false,
  },
  // Force Next.js to generate all pages as separate HTML files
  generateBuildId: async () => {
    // This can help with route detection
    return "static-build";
  },
};

module.exports = nextConfig;
