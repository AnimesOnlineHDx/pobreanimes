/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.appanimeplus.tk",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
