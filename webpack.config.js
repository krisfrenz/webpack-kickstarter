var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var argv = require('yargs').argv;

var sourceMapPrefix = argv.d ? '?sourceMap' : '';

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: './dist/scripts',
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
       test: /\.scss$/,
       loader: 'stylelint',
       exclude: /node_modules/
     }
    ],
    loaders: [
      // images
      {
        test: /\.(png|svg)$/,
        loader: 'file?name=../images/[name].[ext]'
      },
      // fonts
      {
        test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file?name=../fonts/[name].[ext]'
      },
      // scripts
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        },
        exclude: /node_modules/
      },
      // styles
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css' + sourceMapPrefix + '!autoprefixer!sass' + sourceMapPrefix),
        exclude: /node_modules/
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  stylelint: {
    configFile: '.stylelintrc'
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
