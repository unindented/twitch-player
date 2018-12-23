const { dirname, resolve } = require("path");
const dotenv = require("dotenv");
const { DefinePlugin } = require("webpack");

const root = resolve(__dirname, "../..");
const externalAssets = dirname(require.resolve("@twitch-player/assets"));

dotenv.config({ path: resolve(root, "../../.env") });

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

  plugins: [
    new DefinePlugin({
      "process.env": {
        TWITCH_GRAPHQL_URI: JSON.stringify(process.env.TWITCH_GRAPHQL_URI),
        TWITCH_CLIENT_ID: JSON.stringify(process.env.TWITCH_CLIENT_ID),
      },
    }),
  ],
};
