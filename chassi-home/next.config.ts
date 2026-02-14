import type { NextConfig } from "next";
const { PERFIL_URL } = process.env;
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/perfil",
        destination: `${PERFIL_URL}/perfil`
      },
      {
        source: "/perfil/:path*",
        destination: `${PERFIL_URL}/perfil/:path*`,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
