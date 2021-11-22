const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('../paths')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/[name].js',
    path: paths.appBuild
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: true,
    compress: true,
    hot: true
  },
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0
    }
  }
})
