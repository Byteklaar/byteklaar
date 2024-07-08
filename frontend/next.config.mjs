/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['committed-dogs-011f71267c.strapiapp.com'],
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
        ],
    },
};

export default nextConfig;