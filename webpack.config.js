var config = {
  entry: './main.js',

  output: {
    path: './',
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    ip: '0.0.0.0',
    port: 7000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      { test: /\.(scss|css)$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }
        ]
      }
    ]
  }
}

module.exports = config;
