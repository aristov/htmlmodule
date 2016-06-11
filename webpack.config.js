'use strict';

const path = require('path');

module.exports = {
    entry : './index',
    output : {
        path: __dirname + '/dist',
        filename : 'bundle.js'
    },
    module : {
        loaders : [{
            test : /\.js$/,
            loader : 'babel?presets[]=es2015'
        }]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            path.join(__dirname, 'components'),
            path.join(__dirname, 'tools')
        ]
    },
    watch : true
};
