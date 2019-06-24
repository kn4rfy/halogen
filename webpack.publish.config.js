const path = require('path')

module.exports =
{
  entry: './src/Halogen.js',
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[a|c]ss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'halogen.js',
    library: 'halogen',
    libraryTarget: 'umd',
  },

  externals: {
    react: 'react',
    'prop-types': {
      'commonjs': 'prop-types',
      'commonjs2': 'prop-types',
      'amd': 'prop-types',
      'root': 'PropTypes'
    }
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      'halogen': path.resolve(__dirname, 'src/'),
    },
  },
}
