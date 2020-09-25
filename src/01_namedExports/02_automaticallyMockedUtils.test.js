import { method1, method2, method3 } from './utils.js'

jest.mock('./utils.js')

describe('named exports - automatically mocked file with no return values', () => {
  it('returns the correct value for Method 1', () => {
    expect(method1()).not.toBe('You have called Method 1')
    expect(method1()).toBe(undefined)
  })

  it('returns the correct value for Method 2', () => {
    expect(method2()).not.toBe('You have called Method 2')
    expect(method1()).toBe(undefined)
  })

  it('returns the correct value for Method 3', () => {
    expect(method3()).not.toBe('You have called Method 3')
    expect(method1()).toBe(undefined)
  })
})
