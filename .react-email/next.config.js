/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    externalDir: true, // compile files that are located next to the .react-email directory
  },
  typescript: {
    // @see https://github.com/resendlabs/react-email/issues/987
    // Type error: An import path cannot end with a '.tsx' extension. Consider importing '../../emails/raycast-job-email.js' instead.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
