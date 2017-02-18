var path = require('path');
var webpack = require('./webpack.config');

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai-sinon'],
    reporters: ['mocha'],
    browsers: ['PhantomJS'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    webpack: webpack,
  })
};
