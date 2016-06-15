var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  entry: './client/app.js',
  output: {
    path: __dirname + '/client/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      }
    ]
  }
}