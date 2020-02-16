import { decompose } from '../index'

test('Initial test', () => {
  expect(decompose('你')).toEqual(['你'])
})
