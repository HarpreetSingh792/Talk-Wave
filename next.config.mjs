/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["uploadthing.com","utfs.io"]
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
