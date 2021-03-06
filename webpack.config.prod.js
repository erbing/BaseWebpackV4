const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const CleanWebpackPlugin = require("clean-webpack-plugin");

let webpackConfig = {
  entry: {
    app: "./app.js",
    jq: "./jq.js"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    chunkFilename: "[name].js"
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.(woff|eot|ttf|svg)(\?.*)?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./index.html")
    })
  ],

  optimization: {
    splitChunks: {
      chunks: "async",
      name: true
    }
  },

  mode: "production"
};

module.exports = webpackConfig;
