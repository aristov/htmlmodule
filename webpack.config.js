'use strict'

const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const distPath = path.join(__dirname, 'dist')
const babelLoader = {
    test : /\.js$/,
    use : { loader : 'babel-loader' }
}
const uglifyJsPlugin = new UglifyJsPlugin({
    uglifyOptions : {
        keep_fnames : true,
        keep_classnames : true,
        output : {
            comments : false
        }
    }
})

module.exports = [
    {
        mode : 'none',
        entry : './lib/index.js',
        output : {
            path : distPath,
            filename : 'dist.htmlmodule.js',
            libraryTarget : 'commonjs2'
        },
        module : { rules : [babelLoader] }
    },
    {
        mode : 'none',
        entry : './lib/index.js',
        output : {
            path : distPath,
            filename : 'window.htmlmodule.js',
            library : 'htmlmodule',
            libraryTarget : 'window'
        },
        module : { rules : [babelLoader] },
        plugins : [uglifyJsPlugin]
    },
    {
        mode : 'none',
        entry : './shim/index.js',
        output : {
            path : distPath,
            filename : 'dist.shim.js'
        },
        module : { rules : [babelLoader] },
        plugins : [uglifyJsPlugin]
    },
    {
        mode : 'none',
        entry : './spec/index.spec.js',
        output : {
            path : path.join(__dirname, 'docs', 'build'),
            filename : 'build.spec.js'
        },
        module : { rules : [babelLoader] }
    },
    {
        mode : 'none',
        entry : './docs/index.js',
        output : {
            path : path.join(__dirname, 'docs', 'build'),
            filename : 'build.app.js'
        },
        module : {
            rules : [
                babelLoader,
                {
                    test : /\.css$/,
                    use : [
                        { loader : 'style-loader' },
                        { loader : 'css-loader' }
                    ]
                }
            ]
        }
    }
]
