const merge = require("webpack-merge")
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require("./common.js");

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test:    /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"

                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    },
                }]
            }
        ],
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        port: 8090
    },
});
