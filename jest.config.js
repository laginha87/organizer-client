module.exports = {
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.{tsx,ts}'],
  projects: [
    { displayName: 'unit', setupFiles: 'src/jest.config.js' },
    { displayName: 'e2e', setupFiles: 'e2e/jest.config.js' },
  ],
};
