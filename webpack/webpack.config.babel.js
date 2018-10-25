// Paths
import { path } from './path';
// Plugins
import * as plugins from './plugins';
// Environments
import { development } from './modes/development';
import { production } from './modes/production';

export default ({ NODE_ENV }) => {
    const isDevelopment = NODE_ENV === 'development';
    const environment = isDevelopment ? development(path, plugins) : production(path, plugins);

    environment.devtool = isDevelopment ? 'cheap-module-eval-source-map' : 'source-map';

    return environment;
};
