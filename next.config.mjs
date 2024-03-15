/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/redirectRoute",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
