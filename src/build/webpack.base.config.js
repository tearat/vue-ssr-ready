const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    mode: isProd
    ? 'production'
    : 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    // filename: '[name].[chunkhash].js'
    filename: 'build.js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
      '@components': path.resolve(__dirname, '../components'),
      '@': path.resolve(__dirname, '..')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
