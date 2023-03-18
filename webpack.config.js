const path = require(`path`);
const htmlWebpackPlugin = require(`html-webpack-plugin`);
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
  {
    test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/,
    loader: "url-loader",
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.scss$/,
    use: [{ loader: miniCssExtractPlugin.loader }, "css-loader", "sass-loader"],
  },
];

module.exports = {
  entry: [
    path.join(__dirname, "src", "index.js"),
    // path.join(__dirname, "src/stylesheets", "app.scss"),
  ],
  output: {
    publicPath: "/",
    filename: `[name].[hash].js`,
    path: path.resolve(__dirname, "./dist"),
  },
  module: { rules },
  devServer: {
    historyApiFallback: true,
    port: 9000,
    open: true,
    hot: true, //hot module replacement
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new miniCssExtractPlugin({
      filename: `[name].[hash].css`,
      chunkFilename: `[name].chunk.css`,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
