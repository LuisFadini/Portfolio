import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  images: {
    domains: ["picsum.photos"],
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);

