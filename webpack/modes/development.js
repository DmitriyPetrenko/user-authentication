// Core
import webpack from "webpack";
import Config from "webpack-config";

// Paths
import { path } from "../path.js";

export default new Config().extend("./webpack/modes/common.js").merge({
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
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.output,
        historyApiFallback: true,
        port: 8090,
        hot: true
    },
});
