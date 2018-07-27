const expect = require('expect');
const jestAllure = require('jest-allure/dist/setup');
const matchers = require('jest-json-schema');

expect.extend(matchers.matchers);
jestAllure.registerAllureReporter();
