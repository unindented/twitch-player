const { dirname } = require("path");

const externalAssets = dirname(require.resolve("@twitch-player/assets"));

module.exports = {
  devServer: {
    stats: "minimal",
  },

  module: {
    rules: [
      {
        test: /\.(png|svg)$/,
        include: externalAssets,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
