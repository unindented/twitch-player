module.exports = {
  coverageReporters: ["text", "text-summary", "html"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globalSetup: "<rootDir>/config/jest/global-setup.js",
  globalTeardown: "<rootDir>/config/jest/global-teardown.js",
  projects: [
    "<rootDir>/config/jest/lint-config.js",
    "<rootDir>/config/jest/test-config.js",
    "<rootDir>/config/jest/e2e-config.js",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
