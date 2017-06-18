var path = require('path');
/* eslint-disable */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: "/assets/",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.(css|scss)$/, use: [ 'style-loader', 'postcss-loader' ] },
      { test: /\.html$/, use: [ "file-loader" ] },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
/* eslint-start */
