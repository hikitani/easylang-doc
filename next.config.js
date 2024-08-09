const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  i18n: {
    locales: ["ru-RU", "en-US"],
    defaultLocale: "ru-RU",
  },
});
