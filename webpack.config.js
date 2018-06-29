const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  mode: process.env.APP_ENV,
  context: path.join(__dirname, 'src'),
  entry: [
    './js/index'
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
    ],
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
    }),
  ],
};
