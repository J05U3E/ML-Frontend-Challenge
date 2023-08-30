const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    entry: {
        init: './src/client/init.js',
        results: './src/client/results.js',
        detail: './src/client/detail.js',
    },

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist/static'),
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            
        ],
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/images', to: 'images' },            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],

    devtool: 'inline-source-map',
};