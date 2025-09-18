const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    // Force client-side navigation for static export
    clientRouterFilter: false,
  },
};

module.exports = nextConfig;
