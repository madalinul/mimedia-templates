/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    externalDir: true, // compile files that are located next to the .react-email directory
  },
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
  typescript: {
    // @see https://github.com/resendlabs/react-email/issues/987
    // Type error: An import path cannot end with a '.tsx' extension. Consider importing '../../emails/raycast-job-email.js' instead.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
