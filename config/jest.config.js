module.exports = {
  rootDir: '../',
  verbose: false,
  reporters: ['default', 'jest-allure'],
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: '<rootDir>/config/framework.setup.js',
};
