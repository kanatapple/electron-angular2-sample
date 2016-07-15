'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['./src/main/main.ts'],
    target: 'electron',
    output: {
        path: './dist',
        filename: 'main.bundle.js',
        pathinfo: true,
        sourcePrefix: '',
        libraryTarget: 'commonjs2'
    },
    externals: /^(?!^(src|\.)\/)/,
    resolve: {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.ts', '.js'],
        alias: {
            'src': path.resolve(process.cwd(), 'src')
        }
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/}
        ]
    },
    ts: {
        configFileName: './config/main.tsconfig.json'
    }
};
