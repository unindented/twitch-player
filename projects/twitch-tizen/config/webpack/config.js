const { dirname, resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pkg = require("../../package.json");

const root = resolve(__dirname, "../..");
const src = resolve(root, "src");
const assets = resolve(root, "assets");
const externalAssets = dirname(require.resolve("@twitch-player/assets"));
const i18n = resolve(dirname(require.resolve("@twitch-player/i18n")), "..");

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
    new CopyWebpackPlugin([
      {
        from: resolve(i18n, "locales/**/*.json"),
        context: i18n,
      },
    ]),
    new HtmlWebpackPlugin({
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
