// Core
import webpack from "webpack";
import merge from "webpack-merge";

// Common
import { common } from "./common";

export const development = (path, plugins) => merge(common(path, plugins), {
    mode: "development",
    entry: {
        app: path.entry.app
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.output
    },
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
                        minimize: false
                    },
                }, {
                    loader: "sass-loader",
                }]
            }
        ],
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        },
        stats: "errors-only",
        port: 8090
    },
});
