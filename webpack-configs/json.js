var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: path.resolve('custom-loader/index.js')
      }
    ]
  }
}