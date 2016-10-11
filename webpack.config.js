'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const env = process.env;
const PROD = env.PROD;
const plugins = [];

if(PROD) {
    const options = {
        compress : { warnings : false },
        mangle : { keep_fnames : true },
        comments : false
    };
    const uglifyjs = new webpack.optimize.UglifyJsPlugin(options);
    plugins.push(uglifyjs);
}

module.exports = {
    entry : PROD? {
        shim : ['./shim/shim'],
        dist : ['./dist/dist'],
        'dist.global' : ['./dist/dist.global']
    } : {
        shim : ['./shim/shim'],
        dist : ['./dist/dist'],
        'dist.global' : ['./dist/dist.global'],
        test : ['./test/test'],
        spec : ['./spec/spec'],
        repl : ['./repl/repl']
    },
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
        postLoaders : [{
            test : [/\.js$/],
            exclude : /(node_modules)/,
            loader : 'documentation'
        }]
    },
    plugins,
    resolve : {
        modulesDirectories : ['node_modules']
    },
    documentation : {
        entry : './dist/dist.js',
        github : true,
        format : 'html'
    },
    postcss : () => [autoprefixer],
    watch : Boolean(env.WATCH)
};
