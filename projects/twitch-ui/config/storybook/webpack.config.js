const { dirname, resolve } = require("path");
const dotenv = require("dotenv");
const { DefinePlugin } = require("webpack");

const root = resolve(__dirname, "../..");
const externalAssets = dirname(require.resolve("@twitch-player/assets"));

dotenv.config({ path: resolve(root, "../../.env") });

module.exports = ({ config }) => {
  config.module.rules.push({
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
  });

  config.plugins.push(
    new DefinePlugin({
      "process.env": {
        TWITCH_GRAPHQL_URI: JSON.stringify(process.env.TWITCH_GRAPHQL_URI),
        TWITCH_CLIENT_ID: JSON.stringify(process.env.TWITCH_CLIENT_ID),
      },
    })
  );

  return config;
};
