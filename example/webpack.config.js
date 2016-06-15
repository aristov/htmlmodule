'use strict';

const path = require('path');

module.exports = {
    entry : './todo',
    output : {
        filename : 'app.js'
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
