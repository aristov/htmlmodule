'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env;
const preLoaders = [];
const plugins = [];
const suffix = env.MIN? '.min.js' : '.js';
const nodepath = path.resolve('node_modules/');

const babelLoader = env.ES6? {
    test : /\.js$/,
    loader : 'babel?plugins[]=transform-es2015-modules-commonjs&compact=false',
    exclude: [nodepath]
} : {
    test : /\.js$/,
    loader : 'babel?presets[]=latest&compact=false',
    exclude: [nodepath]
};

const styleLoader = {
    test : /\.css$/,
    loader : 'style-loader!css-loader!postcss-loader'
};

if(env.MIN) {
    if(env.ES6) throw Error('Minification requires transpiling to ES5');
    const uglifyjsOptions = {
        compress : { warnings : false },
        mangle : { keep_fnames : true },
        comments : false
    };
    const uglifyjsPlugin = new webpack.optimize.UglifyJsPlugin(uglifyjsOptions);
    plugins.push(uglifyjsPlugin);
}

if(env.COV) {
    preLoaders.push({
        test : /[^(\.spec)]\.js$/,
        loader : 'babel!babel?presets[]=latest&plugins[]=istanbul',
        exclude: [nodepath],
    });
}

module.exports = {
    plugins,
    resolve : { modulesDirectories : ['node_modules'] },
    watch : Boolean(env.WATCH)
};

const assign = Object.assign;

switch(env.ENTRY) {
    case 'spec':
        assign(module.exports, {
            entry : {
                spec : ['./spec/index.spec']
            },
            output : {
                path : path.join(__dirname, '/dist/docs'),
                filename : 'build.[name]' + suffix,
                pathinfo : !env.MIN
            },
            module : {
                preLoaders,
                loaders : [babelLoader],
            }
        });
        plugins.push(new CopyWebpackPlugin([{ from : './docs/spec.html' }]));
        break;
    case 'index':
        assign(module.exports, {
            entry : {
                index : ['./docs'],
            },
            output : {
                path : path.join(__dirname, '/dist/docs'),
                filename : 'build.[name]' + suffix,
                pathinfo : !env.MIN
            },
            module : {
                loaders : [babelLoader, styleLoader],
            },
            postcss : () => [autoprefixer],
        });
        plugins.push(new CopyWebpackPlugin([{
            from : './docs/index.html',
            to : '../../index.html'
        }]));
        break;
    case 'dist':
    default:
        assign(module.exports, {
            entry : {
                shim : ['./shim'],
                htmlmodule : ['./lib'],
                'window.htmlmodule' : ['./lib/window.htmlmodule']
            },
            output : {
                path : path.join(__dirname, '/dist'),
                filename : 'dist.[name]' + suffix,
                pathinfo : !env.MIN
            },
            module : {
                loaders : [babelLoader],
            }
        });
        break;
}
