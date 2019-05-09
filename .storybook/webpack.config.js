const custom = require("../webpack.config.js");
const path = require("path");

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    resolve: { ...custom.resolve },
    module: { ...config.module, rules: custom.module.rules }
  };
};
