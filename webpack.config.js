"use strict";

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require('./package.json');

let config = {
  entry: {
    app: "./src/public/js/app.js",
    vendors: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    modules: ['public', 'node_modules', './', 'style'],
    alias: {
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",
      filename: "vendors.js"
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    })
  ]
};

if(process.env.NODE_ENV == 'prod'){
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    minimize: true
  }));
}

module.exports = config;
