var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/scripts/main.js',
  eslint: {
    configFile: '.eslintrc'
  },
  output: {
    path: './dist/scripts',
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint', exclude: /node_modules/}
    ],
    loaders: [
      // images
      {test: /\.(png|svg)$/, loader: 'file?name=../images/[name].[ext]'},
      // fonts
      {test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file?name=../fonts/[name].[ext]'},
      // scripts
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      // styles
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer!sass?sourceMap'), exclude: /node_modules/}
    ]
  },
  plugins: [
    new Clean(['./dist']),
    new ExtractTextPlugin('../styles/app.css')
  ],
  resolve: {
    root: path.resolve('./src/scripts/'),
    extensions: ['', '.js']
  }
};
