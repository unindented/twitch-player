module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/config/",
    "<rootDir>/projects/[^/]+/dist/",
    "/node_modules/",
  ],
  displayName: "test",
  moduleNameMapper: {
    "@twitch-player/i18n": "<rootDir>/config/jest/mocks/i18n.js",
    "\\.(png|svg)$": "<rootDir>/config/jest/mocks/image.js",
  },
  rootDir: "../..",
  setupTestFrameworkScriptFile: "<rootDir>/config/jest/test-setup.js",
  testEnvironment: "jsdom",
  testRegex: "/projects/[^/]+/src/.+\\.test\\.js$",
  transformIgnorePatterns: [
    "/node_modules/(?!(react-i18next|react-native-web)/)",
  ],
};
