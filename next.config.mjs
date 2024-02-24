/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: [
  //     "i.imgur.com",
  //     "placeimg.com",
  //     "example.com",
  //     "api.escuelajs.co",
  //     "unsplash.com",
  //     "images.unsplash.com",
  //     "cdn.pixabay.com",
  //     "next.config.js"
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
