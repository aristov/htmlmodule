'use strict'

const path = require('path')
const { optimize : { UglifyJsPlugin } } = require('webpack')

const distPath = path.join(__dirname, 'dist')
const babelLoader = {
    test : /\.js$/,
    loader : 'babel-loader'
}
const uglifyJsPlugin = new UglifyJsPlugin({
    compress : { warnings : false },
    mangle : { keep_fnames : true },
    comments : false
})

module.exports = [
    {
        entry : './lib/index.js',
        output : {
            path : distPath,
            filename : 'dist.dommodule.js',
            libraryTarget : 'commonjs2'
        },
        module : { loaders : [babelLoader] }
    },
    {
        entry : './lib/index.js',
        output : {
            path : distPath,
            filename : 'window.dommodule.js',
            library : 'dommodule',
            libraryTarget : 'window'
        },
        module : { loaders : [babelLoader] },
        plugins : [uglifyJsPlugin]
    },
    {
        entry : './spec/index.spec.js',
        output : {
            path : path.join(__dirname, 'docs', 'build'),
            filename : 'build.spec.js'
        },
        module : { loaders : [babelLoader] }
    }
]
