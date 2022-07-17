/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
    localeDetection: true,
    localeCookieName: "locale",
    localeCookieMaxAge: 31536000,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
