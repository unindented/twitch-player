const merge = require("webpack-merge");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const config = require("./config");

module.exports = env => {
  const common = config(env);

  return merge(common, {
    mode: "production",

    devtool: "source-map",

    plugins: [
      new PreloadWebpackPlugin({
        rel: "preload",
        include: "initial",
      }),
      new GenerateSW({
        swDest: "sw.js",
        importWorkboxFrom: "local",
        importsDirectory: "workbox",
        exclude: [/\.(map|png)$/],
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
  });
};
