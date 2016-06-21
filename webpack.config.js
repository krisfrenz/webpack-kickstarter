var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var autoprefixer = require('autoprefixer');
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
        loader: ExtractTextPlugin.extract('style', 'css' + sourceMapPrefix + '!postcss!sass' + sourceMapPrefix),
        exclude: /node_modules/
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new CleanPlugin(['./dist']),
    new StyleLintPlugin({
      syntax: 'scss',
      files: 'src/styles/**/*.scss'
    }),
    new ExtractTextPlugin('../styles/app.css')
  ],
  resolve: {
    root: path.resolve('./src/scripts/'),
    extensions: ['', '.js']
  }
};
