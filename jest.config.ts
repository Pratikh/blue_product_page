import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  coverageReporters: ['text', 'json-summary', 'cobertura', 'lcov'],
  transform: {},
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.jest/',
    '<rootDir>/cypress/',
  ],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,mjs,cjs,cts,mts}'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
  ],
};
export default createJestConfig(customJestConfig);
