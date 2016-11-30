"use strict";

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/public/js/app.js",
    output: {
        path: './docs',
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: ['./src/public', 'node_modules', './'],
        alias: {
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader?presets[]=es2015,presets[]=react"
            },
            { test: /\.md$/, loader: "raw" },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
