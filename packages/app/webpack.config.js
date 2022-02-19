const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rootWebpackConfig = require('../../webpack.config');

module.exports = {
    ...rootWebpackConfig,
    entry: {
        main: require.resolve('./src/app.tsx'),
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        historyApiFallback: true,
    },
};
