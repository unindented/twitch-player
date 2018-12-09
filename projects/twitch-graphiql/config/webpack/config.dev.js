const merge = require("webpack-merge");
const config = require("./config");

module.exports = env => {
  const common = config(env);

  return merge(common, {
    mode: "development",

    devServer: {
      stats: "minimal",
    },
  });
};
