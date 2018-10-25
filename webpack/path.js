// Instruments
import { resolve } from 'path';

export const path = {
    entry: {
        app: resolve(__dirname, '../client/index.js')
    },
    output: resolve(__dirname, '../public')
};
