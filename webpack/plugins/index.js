// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';

export const cleanPlugin = (path) =>
    new CleanWebpackPlugin([path], {
        root: process.cwd()
    });
export const htmlPlugin = new HtmlWebpackPlugin({
    inject: false,
    template: HtmlWebpackTemplate,
    title: 'User authentication',
    appMountIds: ['root'],
    mobile: true,
    lang: 'en-US'
});
export const uglifyJsPlugin = new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true
});

export const hotModuleReplacementPlugin = new HotModuleReplacementPlugin();
