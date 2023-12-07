module.exports = {
  testEnvironment: 'jest-environment-jsdom-global',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};
