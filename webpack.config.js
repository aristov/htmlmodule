'use strict';

module.exports = {
    entry : './scripts/index',
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
    watch : true
};
