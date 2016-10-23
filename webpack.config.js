'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

/**
 * process.env
 *  MIN
 *  DOCS
 *  ES6
 *  WATCH
 *
 *  npm start = DOCS + ES6 + WATCH
 */
const env = process.env;
const plugins = [];

if(env.MIN) {
    if(env.ES6) throw Error('Minification requires transpiling to ES5')
    const uglifyjsOptions = {
        compress : { warnings : false },
        mangle : { keep_fnames : true },
        comments : false
    };
    const uglifyjsPlugin = new webpack.optimize.UglifyJsPlugin(uglifyjsOptions);
    plugins.push(uglifyjsPlugin);
}

const entry = {
    shim : ['./shim'],
    htmlmodule : ['./lib'],
    'window.htmlmodule' : ['./lib/window.htmlmodule']
}

let output;

if(env.DOCS) {
    Object.assign(entry, {
        index : ['./docs/index'],
        spec : ['./docs/spec']
    });
    output = {
        path : __dirname + '/docs/build',
        filename : env.MIN? 'build.[name].min.js' : 'build.[name].js',
        pathinfo : !env.MIN
    }
} else {
    output = {
        path : __dirname + '/dist',
        filename : env.MIN? 'dist.[name].min.js' : 'dist.[name].js',
        pathinfo : !env.MIN
    }
}

module.exports = {
    entry,
    output,
    module : {
        loaders : [
            env.ES6?
                { test : /\.js$/, loader : 'babel?plugins[]=transform-es2015-modules-commonjs' } :
                { test : /\.js$/, loader : 'babel?presets[]=es2015' },
            { test : /\.txt$/, loader : 'raw-loader' },
            { test : /\.css$/, loader : 'style-loader!css-loader!postcss-loader' },
        ]
    },
    plugins,
    resolve : {
        modulesDirectories : ['node_modules']
    },
    postcss : () => [autoprefixer],
    watch : Boolean(env.WATCH)
};
