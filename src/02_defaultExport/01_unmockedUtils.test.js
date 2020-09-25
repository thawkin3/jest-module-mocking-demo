import method1 from './utils.js'

describe('default export - unmocked file', () => {
  it('returns the correct value for Method 1', () => {
    expect(method1()).toBe('You have called Method 1')
  })
})
