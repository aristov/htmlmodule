'use strict';

const path = require('path');

module.exports = {
    entry : './TodoApp',
    output : {
        filename : 'index.js'
    },
    module : {
        loaders : [{
            test : /\.js$/,
            loader : 'babel?presets[]=es2015'
        }]
    },
    watch : true
};
