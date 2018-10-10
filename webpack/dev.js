const merge = require("webpack-merge")
const common = require("./common.js");

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test:    /\.scss$/,
                exclude: /node_modules/,
                use:     [
                    {
                        loader:  "style-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader:  "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            }
        ],
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "./dist",
    },
});
