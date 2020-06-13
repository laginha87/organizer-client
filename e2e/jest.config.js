const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  displayName: "e2e",
  preset: "jest-puppeteer",
  globals: {
    URL: "http://localhost:1235",
  },
  setupFilesAfterEnv: ["./e2e.setup.js"],
  transform: {
    ...tsjPreset.transform,
  },
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src/$1",
  },
};
