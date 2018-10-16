module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "usage",
      },
    ],
    ["@babel/preset-react"],
    ["@babel/preset-flow"],
  ],
  plugins: [
    ["@babel/plugin-syntax-dynamic-import"],
    ["babel-plugin-react-native-web"],
  ],

  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
            targets: {
              node: "current",
            },
          },
        ],
      ],
    },
  },
};
