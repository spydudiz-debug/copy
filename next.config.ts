import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/blog/scopmedia-iptv", destination: "/blog/iptv-uk-tv", permanent: true },
      { source: "/scopmedia-iptv", destination: "/iptv-uk-tv", permanent: true },
      { source: "/pricing", destination: "/#subscription", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
