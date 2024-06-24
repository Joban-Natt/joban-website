import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "jobanwebsitepics.s3.us-east-2.amazonaws.com",
            }
        ]
    }
};

export default withNextVideo(nextConfig);