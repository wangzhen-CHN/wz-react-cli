const { isProduction } = require('./scripts/env')

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    isProduction && [
      'postcss-preset-env',
      {
        autoprefixer: {
          grid: true,
          flexbox: 'no-2009'
        },
        stage: 3
      }
    ]
  ]
}
