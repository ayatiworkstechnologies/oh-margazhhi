/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export", // very important
  images: {
    unoptimized: true, // if you're using next/image on static hosting
  },
};

export default nextConfig;
