const nextTranslate = require("next-translate");

module.exports = {
  distDir: "build",
};

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});
