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
