'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
      'test/**/*.js',
      'src/**/*.js'
    ],

    exclude: [
      'GUI/**/*.js'
    ],

    preprocessors: {
      'src/**/*.js': 'coverage'
    },

    reporters: ['progress', 'coverage'],

    port: 9876,

    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  });
};
