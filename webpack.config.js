const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'PreactMaterialize',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'Preact',
      commonjs2: 'preact',
      commonjs: 'preact',
      amd: 'preact'
    }
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('src'),
      path.resolve('node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  }
};
