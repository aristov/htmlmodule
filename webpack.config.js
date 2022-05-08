const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = [
  {
    mode : 'none',
    entry : './lib/index.js',
    output : {
      path : path.join(__dirname, 'dist'),
      filename : 'htmlmodule.js',
      library : 'htmlmodule',
      libraryTarget : 'umd',
      globalObject : 'this',
    },
    externals : {
      window : 'window',
    },
  },
  {
    mode : 'none',
    entry : './lib/index.js',
    output : {
      path : path.join(__dirname, 'dist'),
      filename : 'htmlmodule.min.js',
      library : 'htmlmodule',
      libraryTarget : 'umd',
      globalObject : 'this',
    },
    externals : {
      window : 'window',
    },
    module : {
      rules : [
        {
          test : /\.js$/,
          use : {
            loader : 'babel-loader',
            options : {
              presets : ['@babel/preset-env'],
              plugins : ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
    optimization : {
      minimize : true,
      minimizer : [
        new TerserPlugin({
          terserOptions : {
            keep_fnames : true,
          },
        }),
      ],
    },
  },
  {
    mode : 'none',
    entry : './docs/index.js',
    output : {
      path : path.join(__dirname, 'docs/public/build'),
      publicPath : '/build/',
      filename : 'index.bundle.js',
    },
    module : {
      rules : [
        {
          test : /\.css$/,
          use : [
            'style-loader',
            {
              loader : 'css-loader',
              options : {
                importLoaders : 1,
              },
            },
          ],
        },
      ],
    },
    externals : {
      window : 'window',
    },
    devServer : {
      static : {
        directory : path.join(__dirname, 'docs/public'),
      },
      hot : true,
    },
  },
]
