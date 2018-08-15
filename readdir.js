var fs = require("fs");

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}

var path = process.argv[2];

fs.readdir(path, function(err, items) {
  console.log(items);

  for (var i = 0; i < items.length; i++) {
    if (items[i].indexOf(".test.js" < 0)) {
      console.log(items[i]);
    }
  }
});
