"use strict";

const path = require('path');
const webpack = require('webpack');

let config = {
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

if(process.env.NODE_ENV == 'prod'){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        minimize: true
    }));
}

module.exports = config;
