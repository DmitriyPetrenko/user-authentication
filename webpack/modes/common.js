export const common = (path, plugins) => ({
    entry: path.entry.app,
    output: {
        path: path.output
    },
    plugins: [plugins.cleanPlugin(path.output), plugins.htmlPlugin, plugins.hotModuleReplacementPlugin],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
});
