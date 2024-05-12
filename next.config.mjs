/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "jobanwebsitepic.s3-website-us-east-1.amazonaws.com/",
            }
        ]
    }
};

export default nextConfig;
