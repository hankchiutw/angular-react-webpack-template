
var webpack = require('webpack');

module.exports = {
    entry: "./src/public/js/app.js",
    output: {
        path: './docs',
        filename: "bundle.js",
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: ['./src/public', 'node_modules'],
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
                loader: "babel-loader?presets[]=es2015"
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
