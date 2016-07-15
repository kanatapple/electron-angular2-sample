'use strict';

const webpack = require('webpack');
const path = require('path');

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
            "src": path.resolve(process.cwd(), "src"),
            "template": path.resolve(process.cwd(), "src/client/template")
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
    }
};
