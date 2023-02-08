// !process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

// /** @type {import("next").NextConfig} */
const {i18n} = require("./next-i18next.config");
// import {i18n} from "./next-i18next.config.js";
// const config = {
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n,
//   images: {
//     domains: ["cdn.discordapp.com", "static.wixstatic.com", "images.pexels.com"],
//   },
// };
// export default config;
module.exports = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com', 'static.wixstatic.com', 'images.pexels.com'],
  },
}
