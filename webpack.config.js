const path = require('path');
const ConstEnumPlugin = require('./plugin/ConstEnumPlugin');

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
        new ConstEnumPlugin()
    ]
};
