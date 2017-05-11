'use strict';
let webpack = require('webpack');
let compressionPlugin = require('compression-webpack-plugin');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'build');
let APP_DIR = path.resolve(__dirname, 'src/js');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: APP_DIR + '/App.js',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  plugins: [ /*
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }), */
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    /* new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,
    }),
    new compressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }) */
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        include: APP_DIR,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  devServer: {
    inline: true,
    contentBase: './build'
  }
};