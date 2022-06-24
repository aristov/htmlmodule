const FILE_EXT = process.env.FILE_EXT || '.js'

exports = module.exports = {
  mode : 'none',
  entry : './index.js',
  output : {
    filename : 'htmlmodule' + FILE_EXT,
    library : {
      name : 'htmlmodule',
      type : 'umd',
    },
    globalObject : 'this',
  },
}

if(process.env.NODE_ENV === 'production') {
  exports.optimization = {
    minimize : true,
  }
  if(FILE_EXT === '.es5.js') {
    exports.module = {
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
  }
}
