const path = require('path')

module.exports = [
  {
    mode : 'none',
    entry : './docs/index.js',
    output : {
      path : path.join(__dirname, 'docs', 'build'),
      publicPath : '/build/',
      filename : 'index.bundle.js',
    },
    devServer : {
      static : {
        directory : path.join(__dirname, 'docs/public'),
      },
      hot : true,
    },
    externals : {
      window : 'window',
    },
  },
]
