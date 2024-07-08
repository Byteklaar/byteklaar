/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**/*",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
            },
            {
                protocol: 'https',
                hostname: 'committed-dogs-011f71267c.strapiapp.com',
                port: ''
            },
        ],
    },
};

export default nextConfig;