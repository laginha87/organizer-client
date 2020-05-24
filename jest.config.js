module.exports = {
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.{tsx,ts}'],
  projects: [
    "src/jest.config.js",
    "e2e/jest.config.js"
  ],
}