
/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
module.exports = config
