const baseConfig = require('./karma-base.conf');

module.exports = (config) => {
  baseConfig(config);

  config.set({
    singleRun: true,
    browsers: ['PhantomJS']
  });
};
