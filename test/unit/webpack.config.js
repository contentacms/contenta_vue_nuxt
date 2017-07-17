// Minimal Webpack config to supply to units tests.
// This is not actually used by Nuxt but instead mirrors
// the resolve and loader rules.

const resolve = require('path').resolve;
// resolve to absolute path where "npm test" is running from
const root = resolve('.')

module.exports = {
  resolve: {
    modules: [root + '/node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      '~': root,
      'static': root + '/static', // use in template with <img src="~static/nuxt.png" />
      '~static': root + '/static',
      'assets': root + '/assets', // use in template with <img src="~static/nuxt.png" />
      '~assets': root + '/assets',
      '~plugins': root + '/plugins',
      '~store': root + '/.nuxt/store',
      '~router': root + '/.nuxt/router',
      '~pages': root + '/pages',
      '~components': root + '/components',
      '~lib': root + '/lib',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      }
    ]
  }
};
