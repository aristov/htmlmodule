'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer'); // fixme

const env = process.env;
const PROD = env.PROD;
const plugins = [];
const postLoaders = [];

if(PROD) {
    const uglifyjsOptions = {
        compress : { warnings : false },
        mangle : { keep_fnames : true },
        comments : false
    };
    const uglifyjsPlugin = new webpack.optimize.UglifyJsPlugin(uglifyjsOptions);
    plugins.push(uglifyjsPlugin);
} else {
    const documentationLoader = {
        test : [/\.js$/],
        exclude : /(node_modules)/,
        loader : 'documentation'
    }
    postLoaders.push(documentationLoader);
}


const entry = {
    shim : ['./shim'],
    htmlmodule : ['./lib'],
    'window.htmlmodule' : ['./lib/window.htmlmodule']
}

module.exports = {
    entry : PROD? entry : Object.assign(entry, {
        test : ['./docs/lib/test'],
        spec : ['./docs/lib/spec'],
        repl : ['./docs/lib/repl']
    }),
    output : {
        path : __dirname + '/build',
        filename : PROD? 'build.[name].min.js' : 'build.[name].js',
        pathinfo : !PROD
    },
    module : {
        loaders : [
            PROD?
                { test : /\.js$/, loader : 'babel?presets[]=es2015' } :
                { test : /\.js$/, loader : 'babel?plugins[]=transform-es2015-modules-commonjs' },
            { test : /\.txt$/, loader : 'raw-loader' },
            { test : /\.css$/, loader : 'style-loader!css-loader!postcss-loader' },
        ],
        postLoaders
    },
    plugins,
    resolve : {
        modulesDirectories : ['node_modules']
    },
    documentation : {
        entry : './lib',
        output : './docs/api',
        github : true,
        format : 'html'
    },
    postcss : () => [autoprefixer],
    watch : Boolean(env.WATCH)
};
