'use strict';

const path = require('path');

module.exports = {
    entry : {
        spec : './spec/spec',
        test : './test/test'
    },
    output : {
        path: __dirname + '/build',
        filename : '[name].build.js'
    },
    module : {
        loaders : [
            { test : /\.js$/, loader : 'babel?presets[]=es2015' },
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
    watch : process.env.DEV_MODE === 'true'
};
