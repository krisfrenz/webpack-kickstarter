var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './node_modules/jasmine-expect/dist/jasmine-matchers.js',
      './test/scripts/**/*.spec.js'
    ],
    preprocessors: {
      './test/scripts/**/*.spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: webpackConfig,
    colors: true,
    webpackMiddleware: {
      noInfo: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
