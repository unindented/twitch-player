module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/config/",
    "<rootDir>/projects/[^/]+/dist/",
    "/node_modules/",
  ],
  displayName: "test",
  moduleNameMapper: {
    "\\.(png|svg)$": "<rootDir>/config/jest/mocks/image.js",
  },
  rootDir: "../..",
  setupFilesAfterEnv: ["<rootDir>/config/jest/test-setup.js"],
  testEnvironment: "jsdom",
  testRegex: "/projects/[^/]+/src/.+\\.test\\.js$",
  testURL: "http://localhost",
  transformIgnorePatterns: ["/node_modules/(?!(react-native-web)/)"],
};
