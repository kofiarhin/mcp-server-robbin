module.exports = {
  roots: ['<rootDir>/server'],
  testMatch: [
    '**/__test__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  testEnvironment: 'node',
  watchPathIgnorePatterns: [
    '<rootDir>/client/',
    '/node_modules/'
  ],
};

