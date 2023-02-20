module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node']
}
