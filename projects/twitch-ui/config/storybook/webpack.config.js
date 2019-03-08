const { resolve } = require("path");
const dotenv = require("dotenv");
const { DefinePlugin } = require("webpack");

const root = resolve(__dirname, "../..");

dotenv.config({ path: resolve(root, "../../.env") });

module.exports = {
  devServer: {
    stats: "minimal",
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
