/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  swcMinify: true,
  headers: {
    "x-robots-tag": "index, follow, archive",
};

module.exports = nextConfig;
