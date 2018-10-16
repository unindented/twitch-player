const { dirname, resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require("../../package.json");

const root = resolve(__dirname, "../..");
const src = resolve(root, "src");
const assets = resolve(root, "assets");
const externalAssets = dirname(require.resolve("@twitch-player/assets"));

module.exports = () => ({
  entry: {
    index: resolve(src, "index.js"),
  },

  output: {
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: src,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        include: src,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /public\/bg\.svg$/,
        include: externalAssets,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /public\/(devices|icons)\/.+\.svg$/,
        include: externalAssets,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlPlugin({
      title: pkg.productName,
      template: resolve(assets, "template.ejs"),
      favicon: resolve(externalAssets, "public/favicon.ico"),
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ],
});
