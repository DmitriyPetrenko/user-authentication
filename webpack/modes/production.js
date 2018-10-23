// Core
import webpack from "webpack";
import Config from "webpack-config";

// Plugins
import { uglifyJsPlugin } from "../plugins/index";

export default new Config().extend({
    "./webpack/modes/common.js": config => {
        config.devtool = "source-map";
 
        return config;
    }
}).merge({
    optimization: {
        minimizer: [uglifyJsPlugin]
    }
});
