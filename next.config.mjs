/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "**",
      },
    ],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: '/mango-details/:id',
  //       destination: '/mangoes/:id',
  //       permanent: true,
  //     },
  //   ]
  // },
};

export default nextConfig;
