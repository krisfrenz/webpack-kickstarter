// webpack plugins
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

// postcss plugins
const postcssAutoprefixer = require('autoprefixer');
const postcssPxtorem = require('postcss-pxtorem');

// other stuff
const path = require('path');
const argv = require('yargs').argv;
const sourceMapPrefix = argv.d ? '?sourceMap' : '';

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
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      // images
      {
        test: /\.(png|svg)$/,
        loader: 'file-loader?name=../images/[name].[ext]'
      },
      // fonts
      {
        test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=../fonts/[name].[ext]'
      },
      // scripts
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      },
      // styles
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader' + sourceMapPrefix + '!postcss-loader!sass-loader' + sourceMapPrefix),
        exclude: /node_modules/
      }
    ]
  },
  postcss: () => [
    postcssAutoprefixer,
    postcssPxtorem({
      propWhiteList: []
    })
  ],
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
