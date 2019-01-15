const webpackConfig = require("../webpack.config.js");
const path = require("path");

// We only want to pull the resolve and module config from our root webpack.config.js
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/components/index.js"),
  resolve: webpackConfig.resolve,
  module: webpackConfig.module
};
