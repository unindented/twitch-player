module.exports = {
  coveragePathIgnorePatterns: [
    "<rootDir>/config/",
    "<rootDir>/projects/[^/]+/dist/",
    "/node_modules/",
  ],
  displayName: "e2e",
  rootDir: "../..",
  setupTestFrameworkScriptFile: "<rootDir>/config/jest/test-setup.js",
  testEnvironment: "<rootDir>/config/jest/e2e-environment.js",
  testRegex: "/projects/[^/]+/e2e/.+\\.e2e\\.js$",
};
