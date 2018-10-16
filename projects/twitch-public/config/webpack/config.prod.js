const merge = require("webpack-merge");
const config = require("./config");

module.exports = env => {
  const common = config(env);

  return merge(common, {
    mode: "production",

    devtool: "source-map",

    output: {
      publicPath: process.env.DEPLOY ? "/twitch-player/" : "/",
    },
  });
};
