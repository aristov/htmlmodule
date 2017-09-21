'use strict';

const path = require('path');

/**
 * Local browser set
 */
const localBrowserSet = {
    chrome : {
        base : 'Chrome',
        browserName : 'chrome',
        displayName : 'chrome'
    },
    firefox : {
        base : 'Firefox',
        browserName : 'firefox',
        displayName : 'firefox'
    },
    safari : {
        base : 'Safari',
        browserName : 'safari',
        displayName : 'safari'
    },
    opera : {
        base : 'Opera',
        browserName : 'opera',
        displayName : 'opera'
    },
};

const sauceBrowserSet = {
    sl_chrome : {
        base : 'SauceLabs',
        platform : 'OS X 10.11',
        browserName : 'chrome',
        version : '53.0',
        displayName : 'chrome'
    },
    /*sl_firefox : {
        base : 'SauceLabs',
        platform : 'Linux',
        browserName : 'firefox',
        version : '45.0',
        displayName : 'firefox'
    },*/
    /*SL_Safari : {
        base : 'SauceLabs',
        platform : 'OS X 10.11',
        browserName : 'safari',
        version : '9.0',
        displayName : 'safari'
    },*/
    /*sl_msie11 : {
        base : 'SauceLabs',
        platform : 'Windows 8.1',
        browserName : 'internet explorer',
        version : '11',
        displayName : 'msie11'
    },*/
    /*SL_MSIE9 : {
        base : 'SauceLabs',
        platform : 'Windows 7',
        browserName : 'internet explorer',
        version : '9',
        displayName : 'msie9'
    }*/
};

const customLaunchers = process.env.LOCAL? localBrowserSet : sauceBrowserSet;
const browsers = Object.keys(customLaunchers);

module.exports = function(config) {
    config.set({
        basePath : '',
        frameworks : ['mocha', 'sinon'],
        files : [
            'dist/dist.shim.js',
            'dist/docs/build.spec.js',
        ],
        exclude : [],
        reporters : ['mocha', 'coverage'],
        coverageReporter : {
            type : 'lcov',
            dir : 'dist/coverage/'
        },
        port : 9876,
        colors : true,
        logLevel : config.LOG_INFO,
        autoWatch : true,
        sauceLabs : {
            username : 'aristov7',
            accessKey : '0e922c40-5658-44fc-ab2b-7be69c51301e',
            testName : 'htmlmodule',
            recordScreenshots : false,
            connectOptions : {
                port : 5757,
                logfile : 'sauce_connect.log'
            },
            public : 'public'
        },
        captureTimeout : 120000,
        customLaunchers,
        browsers,
        singleRun : true,
        concurrency : Infinity
    });
};
