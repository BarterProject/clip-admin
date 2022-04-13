const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const join = require("path").join;
module.exports = {
  entry: join(__dirname, "/src/index.tsx"),
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: join(__dirname, "/dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, "/src/index.html"),
    }),
    require("autoprefixer"),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "scss"],
  },
};
