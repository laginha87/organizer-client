const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    URL: "http://localhost:1234",
  },
  transform: {
    ...tsjPreset.transform,
  },
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src/$1",
  },
};
