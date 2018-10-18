// test/index.js
// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context

const testsContext = require.context('.', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
