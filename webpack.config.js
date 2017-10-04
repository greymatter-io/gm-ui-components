module.exports = {
  entry: "./src/components/index.js",
  main: "lib/build.js",
  target: "node",
  output: {
    path: "./lib",
    filename: "build.js",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/
      }
    ]
  }
};
