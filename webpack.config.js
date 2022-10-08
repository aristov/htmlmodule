module.exports = exports = {
  mode : 'none',
  entry : './index.js',
  output : {
    filename : 'htmlmodule.js',
    library : {
      name : 'htmlmodule',
      type : 'umd',
    },
    globalObject : 'this',
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
}

if(process.env.NODE_ENV === 'production') {
  exports.output.filename = 'htmlmodule.min.js'
  exports.optimization = {
    minimize : true,
  }
}
