var baseConfig = require('./karma-base.conf');

module.exports = function (config) {
  baseConfig(config);

  config.set({
    singleRun: false,
    browsers: ['Chrome']
  });
};
