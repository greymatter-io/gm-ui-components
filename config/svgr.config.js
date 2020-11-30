const path = require("path");
const template = require(path.resolve(__dirname, "template.js"));

// See the svgr docs for all config options
// https://react-svgr.com/docs/options/
module.exports = {
  template,
  svgoConfig: {
    plugins: {
      removeAttrs: { attrs: "fill" },
      cleanupIDs: false
    }
  }
};
