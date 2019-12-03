const path = require('path');

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
                use: 'ts-loader'
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
