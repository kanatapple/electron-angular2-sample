'use strict';

const webpack = require('webpack');
const path = require('path');

let plugins = [];

if ('production' === process.env.NODE_ENV) {
    plugins[plugins.length] = new webpack.optimize.UglifyJsPlugin();
}

module.exports = {
    entry: ['./src/renderer/renderer.ts'],
    output: {
        path: './dist',
        filename: 'renderer.bundle.js',
        pathinfo: true,
        sourcePrefix: ''
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.html'],
        alias: {
            'renderer': path.resolve(process.cwd(), 'src/renderer'),
            'template': path.resolve(process.cwd(), 'src/renderer/template')
        }
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw-loader'}
        ]
    },
    ts: {
        configFileName: './config/renderer.tsconfig.json'
    },
    plugins: plugins
};
