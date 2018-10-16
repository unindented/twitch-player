const { resolve } = require("path");
const { template } = require("lodash");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const pkg = require("../../package.json");
const config = require("./config");

const root = resolve(__dirname, "../..");
const assets = resolve(root, "assets");

module.exports = env => {
  const common = config(env);

  return merge(common, {
    mode: "production",

    devtool: "source-map",

    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            compress: {
              // Can't enable because it causes syntax errors on my TV.
              sequences: false,
            },
          },
        }),
      ],
    },

    plugins: [
      new CopyWebpackPlugin([
        {
          from: resolve(assets, "config.xml"),
          transform: content => template(content)(pkg),
        },
        {
          from: resolve(assets, "project.xml"),
          to: ".project",
          toType: "file",
          transform: content => template(content)(pkg),
        },
        {
          from: resolve(assets, "tproject.xml"),
          to: ".tproject",
          toType: "file",
          transform: content => template(content)(pkg),
        },
      ]),
    ],
  });
};
