module.exports = {
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: [
    "ts", "tsx", "js", "jsx", "json", "node"
  ],
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
  watchPathIgnorePatterns: ["/dist/", "/node_modules/"],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/test/"
  ],
  coverageThreshold: {
    "global": {
      "branches": 70,
      "functions": 70,
      "lines": 70,
      "statements": 70
    }
  },
  collectCoverageFrom: [
    "packages/*.{js,ts,tsx}"
  ],
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  modulePathIgnorePatterns: ['dist'],
  roots: ['<rootDir>/packages'],
};
