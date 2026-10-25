import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page logs traffic and reads the JSON data files per request,
  // so the app uses request-time rendering rather than Cache Components.
  experimental: {
    globalNotFound: true,
  },

  // The parent folder has its own package-lock.json; pin the root to this project.
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,

  // Security headers previously set by .htaccess and send_security_headers().
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "interest-cohort=()" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },

  // Keep old PHP URLs working.
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      {
        source: "/course:ext(\\.php)?",
        has: [{ type: "query", key: "id", value: "(?<id>.+)" }],
        destination: "/courses/:id",
        permanent: true,
      },
      { source: "/admin/index:ext(\\.php)?", destination: "/admin", permanent: true },
      { source: "/admin/:page.php", destination: "/admin/:page", permanent: true },
      { source: "/:page.php", destination: "/:page", permanent: true },
    ];
  },
};

export default nextConfig;
