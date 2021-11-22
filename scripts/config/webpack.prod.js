const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common')
const paths = require('../paths')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/async/[name].[contenthash:8].js',
    path: paths.appBuild
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      ignoreOrder: true, // 在不同的js中引用多个相同的css时，引用先后顺序不一致会触发webpack警告，设置true忽略警告
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    })
  ].filter(Boolean),
  optimization: {
    moduleIds: 'deterministic', // 锁定 module id
    chunkIds: 'deterministic', // 锁定 chunk id
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { pure_funcs: ['console.log'] }
        }
      }),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[/\\]node_modules[/\\]/,
          priority: 30,
          reuseExistingChunk: true,
          name(module) {
            const packageName = module.context.match(/[/\\]node_modules[/\\](.*?)([/\\]|$)/)[1]
            // 避免服务端不支持@
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    }
  }
})
