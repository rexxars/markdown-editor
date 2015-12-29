'use strict';

var path = require('path');

var config = {
    entry: path.join(__dirname, 'app', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};

if (process.env.NODE_ENV !== 'production') {
    config.cache = true;
    config.devtool = 'source-map';
}

module.exports = config;
