const { i18n } = require('./next-i18next.config')

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ["cdn.discordapp.com", "static.wixstatic.com", "images.pexels.com"],
  },
};
export default config;
