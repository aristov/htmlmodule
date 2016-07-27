'use strict';

const path = require('path');

module.exports = {
    entry : './index',
    output : {
        path: __dirname + '/build', filename : 'index.build.js'
    },
    module : {
        loaders : [
            { test : /\.js$/, loader : 'babel?presets[]=es2015' },
            { test : /\.css$/, loader : 'style-loader!css-loader' },
            { test : /\.svg/, loader : 'svg-url-loader' }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    watch : true
};
