/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          
          {
            protocol: 'https',
            hostname: 'example.com',
          },
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },
          {
            protocol: 'https',
            hostname: 'eleven-website.s3.il-central-1.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },

        ]
    }
};

export default nextConfig;
