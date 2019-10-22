var path = require('path');

module.exports = {
    entry: {
        HomePage: './Content/pages/HomePage.js',
        ReduxPage: './Content/pages/ReduxPage.js',
    },
    output: {
        filename: '[name].js',
        globalObject: 'this',
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: 'dist/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    }
};