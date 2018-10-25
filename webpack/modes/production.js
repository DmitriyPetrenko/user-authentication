// Core
import merge from 'webpack-merge';

// Common
import { common } from './common';

export const production = (path, plugins) =>
    merge(common(path, plugins), {
        mode: 'production',
        optimization: {
            minimizer: [plugins.uglifyJsPlugin]
        }
    });
