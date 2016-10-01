'use strict';

const path = require('path');

module.exports = {
    entry : './dom/dom.test',
    output : {
        path: __dirname + '/test',
        filename : 'test.build.js'
    },
    module : {
        loaders : [
            { test : /\.js$/, loader : 'babel?presets[]=es2015' }/*,
            { test : /\.css$/, loader : 'style-loader!css-loader' },
            { test : /\.svg/, loader : 'svg-url-loader' },
            { test : /\.xml/, loader : 'raw-loader' }*/
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    watch : true
};
