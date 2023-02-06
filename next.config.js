/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    nextScriptWorkers: true,
  },
  transpilePackages: ['sharp', 'yup', 'formik', 'nextjs-google-analytics'],
}


module.exports = nextConfig
