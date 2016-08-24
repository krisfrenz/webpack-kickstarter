const webpackConfig = require('./webpack.config');

webpackConfig.cache = true;
webpackConfig.devtool = 'inline-source-map';
webpackConfig.module = {
  preLoaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: [
        /node_modules/,
        /src\/scripts\/main\.js/
      ],
      query: {
        cacheDirectory: true
      }
    }
  ]
};

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: ['./test/scripts/index.js'],
    preprocessors: {
      './test/scripts/index.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots', 'coverage'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    colors: true
  });
};
