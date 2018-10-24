const fs = require("fs");

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}

const directory = process.argv[2];
let files = [];

const generateTestContent = fileName => {
  return `import React from "react";
import { shallow } from "enzyme";

import ${fileName} from "./${fileName}.svg";

describe("${fileName}", () => {
  it("matches snapshot", () => {
    const a${fileName} = shallow(<${fileName} />).find("${fileName}.svg");
    expect(a${fileName}).toMatchSnapshot();
  });
});`;
};

new Promise(resolve =>
  fs.readdir(directory, function(err, items) {
    items.forEach(file => {
      file = file.split(".")[0];
      if (file.includes("Icon")) {
        files.push(file);
      }
    });
    resolve(files);
  })
).then(function(args) {
  files.forEach(file => {
    let testContent = generateTestContent(file);
    fs.writeFileSync(
      `src/components/Glyphs/${file}.test.js`,
      testContent,
      "utf8",
      err => {
        // throws an error, you could also catch it here
        if (err) throw err;
      }
    );
  });
});
