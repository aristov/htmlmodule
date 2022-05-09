const TerserPlugin = require('terser-webpack-plugin')
const JS_EXT = process.env.NODE_ENV === 'production' ? '.min.js' : '.js'

module.exports = {
  mode : 'none',
  entry : './lib/index.js',
  output : {
    filename : 'htmlmodule' + JS_EXT,
    library : {
      name : 'htmlmodule',
      type : 'umd',
    },
    globalObject : 'this',
  },
}

if(process.env.NODE_ENV === 'production') {
  Object.assign(module.exports, {
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
  })
}
