const testsContext = require.context('./', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('../../src/scripts', true, /index\.js$/);
srcContext.keys().forEach(srcContext);
