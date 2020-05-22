module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.{tsx,ts}'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': { tsConfig: 'tsconfig.json' },
  },
};
