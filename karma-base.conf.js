var webpackConfig = require('./webpack.config');

webpackConfig.cache = true;
webpackConfig.devtool = 'inline-source-map';
webpackConfig.module.preLoaders = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: /test\/scripts/,
    query: {
      cacheDirectory: true
    }
  },
  {
    test: /\.js$/,
    loader: 'babel-istanbul',
    include: /src\/scripts/,
    query: {
      cacheDirectory: true
    }
  }
];

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './test/index.js'
    ],
    preprocessors: {
      './test/index.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots', 'coverage'],
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
