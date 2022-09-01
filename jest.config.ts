import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  // collectCoverage: true,
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
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mjs', 'cjs', 'json'],
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
};

export default config;
