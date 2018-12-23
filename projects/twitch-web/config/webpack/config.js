const { dirname, resolve } = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const pkg = require("../../package.json");

const root = resolve(__dirname, "../..");
const src = resolve(root, "src");
const assets = resolve(root, "assets");
const externalAssets = dirname(require.resolve("@twitch-player/assets"));

dotenv.config({ path: resolve(root, "../../.env") });

const publicPath = process.env.DEPLOY ? "/twitch-player/web/" : "/";

module.exports = () => ({
  entry: {
    index: resolve(src, "index.js"),
  },

  output: {
    filename: "[name].js",
    publicPath,
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
        test: /\.webmanifest$/,
        include: assets,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
          {
            loader: "webmanifest-loader",
            options: { ...pkg, scope: publicPath },
          },
        ],
      },
      {
        test: /(ui\/icons\/.+\.svg|web\/.+\.png)$/,
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
        test: /web\/favicon\.svg$/,
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
    new DefinePlugin({
      "process.env": {
        TWITCH_GRAPHQL_URI: JSON.stringify(process.env.TWITCH_GRAPHQL_URI),
        TWITCH_CLIENT_ID: JSON.stringify(process.env.TWITCH_CLIENT_ID),
      },
    }),
    new HtmlWebpackPlugin({
      title: pkg.productName,
      description: pkg.description,
      themeColor: pkg.themeColor,
      template: resolve(assets, "template.ejs"),
      favicon: resolve(externalAssets, "web/favicon.ico"),
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ],
});
