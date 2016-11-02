'use strict';

const path = require('path');

const customLaunchers = process.env.LOCAL? {
    chrome : {
        base : 'Chrome',
        browserName : 'chrome',
        displayName : 'chrome'
    }
} : {
    SL_Chrome : {
        base : 'SauceLabs',
        platform : 'OS X 10.11',
        browserName : 'chrome',
        version : '53.0',
        displayName : 'chrome'
    },
    /*SL_Firefox : {
        base : 'SauceLabs',
        platform : 'Linux',
        browserName : 'firefox',
        version : '45.0'
    },*/
    /*SL_Safari : {
        base : 'SauceLabs',
        platform : 'OS X 10.11',
        browserName : 'safari',
        version : '9.0'
    },*/
    /*SL_MSIE11 : {
        base : 'SauceLabs',
        platform : 'Windows 8.1',
        browserName : 'internet explorer',
        version : '11'
    },*/
    /*SL_MSIE9 : {
        base : 'SauceLabs',
        platform : 'Windows 7',
        browserName : 'internet explorer',
        version : '9'
    }*/
};

const browsers = [Object.keys(customLaunchers)];

module.exports = function(config) {
    config.set({
        basePath : '',
        frameworks : ['mocha', 'sinon'],
        files : [
            'dist/dist.shim.js',
            'dist/dist.spec.js',
        ],
        exclude : [],
        reporters : ['mocha', 'coverage'],
        coverageReporter : {
            type : 'lcov',
            dir : 'docs/coverage/'
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
