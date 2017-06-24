const resolve = require('path').resolve;

// Minimal Webpack config to supply to units tests.
// This is not actually used by Nuxt but instead mirrors
// the resolve and loader rules.
module.exports = {
  resolve: {
    modules: [resolve(__dirname, 'lib'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      '~': __dirname,
      'static': resolve(__dirname, 'static'), // use in template with <img src="~static/nuxt.png" />
      '~static': resolve(__dirname, 'static'),
      'assets': resolve(__dirname, 'assets'), // use in template with <img src="~static/nuxt.png" />
      '~assets': resolve(__dirname, 'assets'),
      '~plugins': resolve(__dirname, 'plugins'),
      '~store': resolve(__dirname, '.nuxt/store'),
      '~router': resolve(__dirname, '.nuxt/router'),
      '~pages': resolve(__dirname, 'pages'),
      '~components': resolve(__dirname, 'components'),
      '~lib': resolve(__dirname, 'lib'),
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