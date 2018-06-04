const webpackConfig = require("../webpack.config.js");

// We only want to pull the resolve and module config from our root webpack.config.js
module.exports = {
  resolve: webpackConfig.resolve,
  module: webpackConfig.module
};
