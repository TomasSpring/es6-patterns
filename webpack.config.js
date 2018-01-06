var path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devserver = require('./webpack-configs/devserver');
const sass = require('./webpack-configs/sass');
const json = require('./webpack-configs/json');
 
 const PATHS = {
    source: path.join(__dirname, 'pages'),
    build: path.join(__dirname, 'build')
};
 
 
 const common = {
    entry: ["babel-polyfill", "whatwg-fetch", PATHS.source + '/index.js'],
    output: {
        path: PATHS.build,
        chunkFilename: '[name]-chunk.js',
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.pug',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],
    module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },
             {
                test: /\.json$/,
                use: path.join(__dirname, 'custom-loader', 'index.js'),
                loader: path.resolve('custom-loader/index.js'),
                loader: 'json'
             } 
         ],
         rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            
        ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
   
};
 const developmentConfig  = {
    devServer: {
        stats: 'errors-only'
    }
};


module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            sass()
            //uglifyJS()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            devserver(),
            sass()//,
            
            
        ])
    }
};
