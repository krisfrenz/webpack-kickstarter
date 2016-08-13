const baseConfig = require('./karma-base.conf');

module.exports = (config) => {
  baseConfig(config);

  config.set({
    singleRun: false,
    browsers: ['Chrome']
  });
};
