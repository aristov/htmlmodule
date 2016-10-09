module.exports = function (config) {
    const customLaunchers = {
        /*SL_Chrome: {
            base: 'SauceLabs',
            platform: 'OS X 10.11',
            browserName: 'chrome',
            version: '53.0'
        },
        SL_Firefox: {
            base: 'SauceLabs',
            platform: 'Linux',
            browserName: 'firefox',
            version: '45.0'
        },
        SL_Safari: {
            base: 'SauceLabs',
            platform: 'OS X 10.11',
            browserName: 'safari',
            version: '9.0'
        },*/
        SL_IE_11: {
            base: 'SauceLabs',
            platform: 'Windows 8.1',
            browserName: 'internet explorer',
            version: '11'
        },
        /*SL_IE_9: {
            base: 'SauceLabs',
            platform: 'Windows 7',
            browserName: 'internet explorer',
            version: '9'
        }*/
    }
    config.set({
        basePath: '',
        frameworks: ['mocha', 'sinon'],
        files: ['spec/spec.js'],
        exclude: [],
        preprocessors: { 'spec/spec.js': ['webpack'] },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel?presets[]=es2015' }
                ]
            }
        },
        webpackMiddleware: {
            noInfo: true,
            stats: { chunks: false }
        },
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        sauceLabs: {
            username: 'aristov7',
            accessKey: '0e922c40-5658-44fc-ab2b-7be69c51301e',
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
        browsers: Object.keys(customLaunchers),
        singleRun: !false,
        concurrency: Infinity
    })
}
