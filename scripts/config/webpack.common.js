const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const paths = require('../paths')
const { isDevelopment, isProduction } = require('../env')

const imageInlineSizeLimit = 4 * 1024

const getCssLoaders = (importLoaders) => [
  isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: {
        auto: /\.module\.\w+$/i,
        localIdentName: '_[local]-[hash:base64:6]'
      },
      sourceMap: isDevelopment,
      importLoaders
    }
  },
  {
    loader: 'postcss-loader'
  }
]

module.exports = {
  stats: {
    preset: 'summary',
    builtAt: true
  },
  target: 'browserslist',
  entry: {
    app: paths.appIndex
  },
  output: {
    publicPath: '/'
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': paths.appSrc
    }
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: getCssLoaders(1)
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(3),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDevelopment,
              lessOptions: { javascriptEnabled: true }
            }
          },
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [paths.globalLessPath]
            }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: imageInlineSizeLimit
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2?)$/,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            type: 'asset',
            exclude: [paths.appSvgIconPath],
            generator: {
              filename: 'assets/[name].[contenthash:8][ext][query]'
            },
            parser: {
              dataUrlCondition: {
                maxSize: imageInlineSizeLimit
              }
            }
          },
          {
            include: [paths.appSvgIconPath],
            use: [
              {
                loader: 'svg-sprite-loader'
              },
              {
                loader: 'svgo-loader',
                options: {
                  multipass: true,
                  js2svg: {
                    indent: 2,
                    pretty: true
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      templateParameters: {
        PUBLIC_PATH: '/',
        isDevelopment
      },
      template: paths.appHtml
    }),
    new CopyPlugin({
      patterns: [
        {
          context: paths.appServer,
          from: '**/*',
          to: paths.appBuild,
          toType: 'dir',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html']
          }
        },
        {
          context: paths.appPublic,
          from: '**/*',
          to: paths.appBuild,
          toType: 'dir',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html']
          }
        }
      ]
    }),
    new WebpackBar({
      name: isDevelopment ? 'RUNNING' : 'BUNDLING',
      color: isDevelopment ? '#52c41a' : '#722ed1'
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: paths.appTsConfig
      }
    })
  ]
}
