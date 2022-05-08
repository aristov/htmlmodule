const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
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
}

if(process.env.NODE_ENV === 'production') {
  module.exports.module = {
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
  }
  module.exports.optimization = {
    minimize : true,
    minimizer : [
      new TerserPlugin({
        terserOptions : {
          keep_fnames : true,
        },
      }),
    ],
  }
}
