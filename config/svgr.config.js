const path = require("path");
const template = require(path.resolve(__dirname, "template.js"));

// See the svgr docs for all config options
// https://github.com/smooth-code/svgr#command-line-usage
module.exports = {
  template,
  filenameCase: "pascal",
  ref: true,
  replaceAttrValues: {
    "#000": "inherit",
    "#000000": "inherit"
  }
};
