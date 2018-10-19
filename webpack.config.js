// Imports
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
require('@babel/register');
// Webpack Configuration
const config = {
  // Entry
  entry: './client/src/index.js',

  // Output
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
      },
      // CSS Files
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Plugins
  plugins: [
    new htmlWebpackPlugin({
      template: './client/src/index.html',
      filename: './index.html',
      hash: true
    })
  ]
};
// Exports
module.exports = config;
