/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
        },
      ],
      domains: ['fakestoreapi.com'],  // Add fakestoreapi.com here too
    },
  };
  
  export default nextConfig;
  