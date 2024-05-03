const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'], 
      exclude: 'node_modules',}), ],
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ''), 
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
       {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        options: {
          presets: ['@babel/preset-env']
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', {loader: 'css-loader'}]
      },
      {
        test: /\.woff$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.woff2$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'font/woff2',
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      }, ]
    }

  };
