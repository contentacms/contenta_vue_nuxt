// we can just use the exact same webpack config by requiring it
// however, remember to delete the original entry since we don't
// need it during tests
var webpackConfig = require('./webpack.config.js')
delete webpackConfig.entry

// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    // this is the entry file for all our tests.
    files: ['index.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      'index.js': ['webpack']
    },
    // use the webpack config
    webpack: webpackConfig,
    // avoid walls of useless text
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  })
}
