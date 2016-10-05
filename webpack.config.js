'use strict';

const path = require('path');

module.exports = {
    entry : {
        spec : './spec/spec',
        test : './test/test'
    },
    output : {
        path: __dirname + '/build',
        filename : 'build.[name].js'
    },
    module : {
        loaders : [
            { test : /\.js$/, loader : 'babel?plugins[]=transform-es2015-modules-commonjs' },   
            { test : /\.css$/, loader : 'style-loader!css-loader!postcss-loader' }
        ],
        postLoaders: [
            {
                test: [/\.js$/],
                exclude: /(node_modules)/,
                loader: 'documentation'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    documentation: {
        entry: './dom/dom.instance.js',
        github: true,
        format: 'html'
    },
    watch : Boolean(process.env.WATCH_MODE)
};
