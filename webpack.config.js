'use strict';

const path = require('path');

module.exports = {
    entry : './spec/spec',
    output : {
        path: __dirname + '/spec',
        filename : 'spec.build.js'
    },
    module : {
        loaders : [
            { test : /\.js$/, loader : 'babel?presets[]=es2015' }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    watch : false
};
