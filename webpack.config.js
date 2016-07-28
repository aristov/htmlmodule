'use strict';

const path = require('path');

module.exports = {
    entry : './showcase/index',
    output : {
        path: __dirname + '/showcase/build',
        filename : 'index.build.js'
    },
    module : {
        loaders : [
            { test : /\.js$/, loader : 'babel?presets[]=es2015' },
            { test : /\.css$/, loader : 'style-loader!css-loader' },
            { test : /\.svg/, loader : 'svg-url-loader' },
            { test : /\.xml/, loader : 'raw-loader' }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    watch : true
};
