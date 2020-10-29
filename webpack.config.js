const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sass = require('sass');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: './src/js/index.tsx',
  },
  output: {
    filename: './js/index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    watchContentBase: true,
    compress: true,
    port: 3000,
  },
  watchOptions: {
    aggregateTimeout: 600,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
    ],
  },
  watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.js', '.jsx'],
  },
};
