var testsContext = require.context('./scripts', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('../src/scripts', true, /index\.js$/);
srcContext.keys().forEach(srcContext);
