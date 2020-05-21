module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.{tsx,ts}'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': { tsConfig: 'tsconfig.json' },
  },
};
