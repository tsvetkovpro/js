/**
 * Created by user on 24.07.2016.
 */

var webpack = require('webpack');

module.exports = {
  entry: './src/modules/main.js',
  devtool: 'source-map',
  output: {
    filename: './src/modules/dist/main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'buble' }
    ]
  }
};

