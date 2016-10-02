'use strict';

const path = require('path');

module.exports = {
    entry : './dom/dom.spec',
    output : {
        path: __dirname + '/spec',
        filename : 'spec.build.js'
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
