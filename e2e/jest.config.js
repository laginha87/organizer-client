const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    URL: "http://localhost:1235"
  },
  setupFilesAfterEnv: ['./e2e.setup.js'],
  transform: {
    ...tsjPreset.transform,
  },
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src/$1",
  },
};
