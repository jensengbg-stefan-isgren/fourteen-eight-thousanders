const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
    prependData: `@import "main.scss";`,
  },
  images: {
    domains: ["cdn.britannica.com"],
  },
};
