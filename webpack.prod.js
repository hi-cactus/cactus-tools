/* eslint-disable */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'tools',
    libraryTarget: 'umd', //发布组件专用
    umdNamedDefine: true,
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
