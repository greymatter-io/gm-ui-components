const path = require("path");
const template = require(path.resolve(__dirname, "template.js"));

module.exports = {
  template,
  replaceAttrValues: {
    "#000": "inherit",
    "#000000": "inherit"
  }
};
