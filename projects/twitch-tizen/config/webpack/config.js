const { dirname, resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");
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
            options: pkg,
          },
        ],
      },
      {
        test: /(ui\/icons\/.+\.svg|tizen\/.+\.png)$/,
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
        test: /tizen\/favicon\.svg$/,
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
    new HtmlPlugin({
      title: pkg.productName,
      description: pkg.description,
      themeColor: pkg.themeColor,
      template: resolve(assets, "template.ejs"),
      favicon: resolve(externalAssets, "tizen/favicon.ico"),
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ],
});
