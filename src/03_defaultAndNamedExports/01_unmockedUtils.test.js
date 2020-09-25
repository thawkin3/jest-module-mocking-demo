import defaultMethod, { method1, method2, method3 } from './utils.js'

describe('default and named exports - unmocked file', () => {
  it('returns the correct value for Method 1', () => {
    expect(method1()).toBe('You have called Method 1')
  })

  it('returns the correct value for Method 2', () => {
    expect(method2()).toBe('You have called Method 2')
  })

  it('returns the correct value for Method 3', () => {
    expect(method3()).toBe('You have called Method 3')
  })

  it('returns the correct value for Default Method', () => {
    expect(defaultMethod()).toBe('You have called the Default Method')
  })
})
