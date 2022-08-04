module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js,tsx,jsx,cjs,mjs}'],
  coveragePathIgnorePatterns: [
    '/dist',
    '.config',
    '.stories',
    '.spec',
    'IdentIcon.tsx',
  ],
  coverageReporters: ['text', 'lcov', 'cobertura'],
  reporters: [
    'default',
    ['jest-junit', { outputName: 'reports/jest-results.xml' }],
  ],
  coverageDirectory: '<rootDir>/coverage/',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|wasm)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '^.+\\.css$': '<rootDir>/__mocks__/styleMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
};
