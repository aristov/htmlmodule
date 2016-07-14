'use strict';

const path = require('path');

module.exports = {
    entry : './index',
    // entry : './sprav/sprav.js',
    output : {
        path: __dirname + '/dist', filename : 'bundle.js'
        // path: __dirname + '/sprav/build', filename : 'sprav.build.js'
    },
    module : {
        loaders : [{
            test : /\.js$/,
            loader : 'babel?presets[]=es2015'
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    watch : true
};
