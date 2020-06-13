module.exports = {
  displayName: 'unit',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  testMatch: [
    '<rootDir>/src/**/*.test.ts',
    '<rootDir>/src/**/*.test.tsx',
  ],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    "^.+\\.graphql$": "jest-transform-graphql",
  },
  globals: {
    'ts-jest': { tsConfig: 'tsconfig.json' },
  },
  rootDir: './../',
};
