import method1 from './utils.js'

jest.mock('./utils.js')

describe('default export - automatically mocked file with no return values', () => {
  it('returns the correct value for Method 1', () => {
    expect(method1()).not.toBe('You have called Method 1')
    expect(method1()).toBe(undefined)
  })
})
