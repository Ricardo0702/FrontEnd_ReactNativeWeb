const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // Import necesario para DefinePlugin

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // Para que funcione correctamente el routing
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        // 🔹 Soporte para CSS Modules solo en archivos .module.css
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        // 🔹 Soporte para CSS global en archivos .css normales
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 🔹 Soporte para imágenes y fuentes
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // Para que las rutas de React Router funcionen correctamente
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true), // 🔥 Esto evita el error en Picker
    }),
  ],
  mode: 'development',
};
