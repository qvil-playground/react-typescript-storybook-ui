module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js"
  },
  resolve: {
    extension: ["", ".webpack.js", ".ts", "tsx", "js"]
  },
  module: {
    loaders: [{ test: /\.tsx?/, loader: "ts-loader" }]
  }
};
