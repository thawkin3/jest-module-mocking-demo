import defaultMethod, { method1, method2, method3 } from './utils.js'

jest.mock('./utils.js', () => ({
  __esModule: true,
  default: () => 'You have called a mocked default method!',
  method1: () => 'You have called a mocked method 1!',
  method2: () => 'You have called a mocked method 2!',
  method3: () => 'You have called a mocked method 3!',
}))

describe('default and named exports - module factory mocked file', () => {
  it('returns the correct value for Method 1', () => {
    expect(method1()).toBe('You have called a mocked method 1!')
    expect(() => expect(method1).toHaveBeenCalledTimes(1)).toThrow()
  })

  it('returns the correct value for Method 2', () => {
    expect(method2()).toBe('You have called a mocked method 2!')
    expect(() => expect(method2).toHaveBeenCalledTimes(1)).toThrow()
  })

  it('returns the correct value for Method 3', () => {
    expect(method3()).toBe('You have called a mocked method 3!')
    expect(() => expect(method3).toHaveBeenCalledTimes(1)).toThrow()
  })

  it('returns the correct value for the Default Method', () => {
    expect(defaultMethod()).toBe('You have called a mocked default method!')
    expect(() => expect(defaultMethod).toHaveBeenCalledTimes(1)).toThrow()
  })
})
