/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  // ✅ Thêm cấu hình redirect ở đây
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.dschool.vn/',
        permanent: true, // ⚠️ quan trọng: chuyển thành redirect 301
      },
    ];
  },
};

module.exports = nextConfig;
