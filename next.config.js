/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  nextConfig,
};
