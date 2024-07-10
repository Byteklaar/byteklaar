/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            net: false,
            dns: false,
            child_process: false,
            tls: false,
        };

        return config;
    },
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
            {
                protocol: 'https',
                hostname: 'committed-dogs-011f71267c.media.strapiapp.com',
                port: ''
            }
        ],
    },
};

export default nextConfig;