const config = {
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
            plugins : [
              '@babel/plugin-transform-runtime',
            ],
            presets : ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}

if(process.env.NODE_ENV === 'production') {
  config.output.filename = 'htmlmodule.min.js'
  config.optimization = {
    minimize : true,
  }
}

export default config
