import method1 from './utils.js'

jest.mock('./utils.js', () => ({
  __esModule: true,
  default: () => 'You have called a mocked method 1!',
}))

describe('default export - module factory mocked file', () => {
  it('returns the correct value for Method 1', () => {
    expect(method1()).toBe('You have called a mocked method 1!')
    expect(() => expect(method1).toHaveBeenCalledTimes(1)).toThrow()
  })
})
