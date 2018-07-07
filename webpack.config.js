const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: process.env.APP_ENV,
  context: path.join(__dirname, 'src'),
  entry: [
    './js/index',
    './scss/styles.scss'
  ],
  output: {
    path: path.join(__dirname, 'assets', 'js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
    }),
    new ExtractTextPlugin('../styles/styles.css'),
  ],
};
