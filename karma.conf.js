// Karma configuration
// Generated on Mon Oct 03 2016 16:34:46 GMT+0300 (MSK)

const customLaunchers = {
    SL_Chrome: {
        base: 'SauceLabs',
        platform: 'OS X 10.11',
        browserName: 'chrome',
        version: '53.0'
    }
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'spec/spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'spec/spec.js': ['webpack']
    },

    webpack: {
        module : {
            loaders : [
                { test : /\.js$/, loader : 'babel?presets[]=es2015' }
            ]
        }
    },

    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i.e.
        noInfo: true,
        // and use stats to turn off verbose output
        stats: {
            // options i.e.
            chunks: false
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'mocha', 'saucelabs'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    sauceLabs: {
        testName: 'Instance.js unit tests',
        recordScreenshots: false,
        connectOptions: {
            port: 5757,
            logfile: 'sauce_connect.log'
        },
        public: 'public'
    },

    captureTimeout: 120000,

    customLaunchers,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Sauce'],
    browsers: Object.keys(customLaunchers),

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
