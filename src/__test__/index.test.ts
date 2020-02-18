import { decompose } from '../index'

test('Initial test', () => {
  const decompList = decompose('你')
  const expectedDecomp = {
    components: ['亻', '尔'],
    type: '⿰',
    writing: '你'
  }

  expect(decompList).toHaveProperty('0')

  const decomp = decompList[0]
  expect(decomp).toHaveProperty('components')
  expect(decomp).toHaveProperty('type')
  expect(decomp).toHaveProperty('writing')
  expect(decomp.components.length).toBeGreaterThanOrEqual(0)
  expect(typeof decomp.components.length).toBe('number')
  expect(decomp.type).toBe(expectedDecomp.type)
  expect(decomp.writing).toBe(expectedDecomp.writing)
})
