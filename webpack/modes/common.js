// Core
import Config from 'webpack-config';

// Paths
import { path } from "../path.js";

// Plugins
import { cleanPlugin, htmlPlugin } from "../plugins/index";

export default new Config().merge({
    entry: path.entry.app,
    output: {
        path: path.output
    },
    plugins: [
        cleanPlugin(path.output),
        htmlPlugin
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    }
});
