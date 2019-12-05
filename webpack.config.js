const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new DefinePlugin(require('./defined-consts.json'))
    ]
};
