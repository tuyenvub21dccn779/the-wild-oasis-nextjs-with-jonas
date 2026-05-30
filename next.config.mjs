/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qklvotdnxcxnlijugeyh.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["next-auth"],
  },
  // output: "export",
};

export default nextConfig;
