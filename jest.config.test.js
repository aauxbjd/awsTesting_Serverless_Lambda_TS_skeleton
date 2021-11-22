/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  clearMocks: false,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',

  testMatch: [
    "**/unit/**/*.test.ts",
    "**/component/**/*.test.ts"
  ],
};