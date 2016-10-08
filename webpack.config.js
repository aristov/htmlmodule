'use strict';

const path = require('path');
const env = process.env;
const autoprefixer = require('autoprefixer');

if(env.SUPER_MODE) Object.assign(env, { ES6_MODE : true, WATCH_MODE : true });

module.exports = {
    entry : {
        spec : './spec/spec',
        test : './test/test',
        dist : './dist/dist',
        repl : './repl/repl'
    },
    output : {
        path: __dirname + '/build',
        filename : 'build.[name].js'
    },
    module : {
        loaders : [
            env.ES6_MODE?
                { test : /\.js$/, loader : 'babel?plugins[]=transform-es2015-modules-commonjs' } :
                { test : /\.js$/, loader : 'babel?presets[]=es2015' },
            { test : /\.txt$/, loader : 'raw-loader' },
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
        entry: './dist/dist.js',
        github: true,
        format: 'html'
    },
    postcss: () => [autoprefixer],
    watch : Boolean(env.WATCH_MODE)
};
