export default {
  clearMocks: true,
  restoreMocks: true,
  // collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  // Gerar o html para ver se está tudo testado 
  coverageReporters: [
    "text",
    "lcov"
  ],
  testEnvironment: "node",
  //Cobertura de código
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  //ignora a node_modules
  watchPathIgnorePatterns: [
    "node_modules"
  ],
  transformIgnorePatterns: ["node_modules"],
  //De onde virá o coverage e vamos ignorar somente um arquivo (!src/**/index.js)
  collectCoverageFrom: [
    "src/**/*.js", "!src/**/index.js"
  ]
};

