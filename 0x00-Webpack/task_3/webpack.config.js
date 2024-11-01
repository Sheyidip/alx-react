const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './task_3/modules/header/header.js',
    body: './task_3/modules/body/body.js',
    footer: './task_3/modules/footer/footer.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true // Automatically clean the output directory before each build
  },
  devtool: 'inline-source-map', // Enable inline source mapping
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8564,
    open: true // Automatically open the browser
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
      template: 'src/index.html', // Create your own template if needed
      filename: 'index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Split chunks for better optimization
    }
  }
};
