const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let plugins = []

plugins.push(
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'template.html'),
    filename: 'index.html'
  })
)

plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css'
  })
)

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin())

  plugins.push(
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    })
  )

  plugins.push(
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.html'),
      filename: 'index.html',
      hash: true,
      minify: {
        html5: true,
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  )
}

plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = {
  devtool: 'source-map',

  entry: path.resolve(__dirname, 'src', 'index.jsx'),

  output: {
    path: path.resolve(__dirname, 'build-prod'),
    filename: '[name].[hash].bundle.js'
  },

  devServer: {
    port: 8080,
    writeToDisk: false,
    hot: true
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'libs',
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)$/,
        use: 'file-loader'
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/,
        use: 'url-loader'
      }
    ]
  },

  plugins
}
