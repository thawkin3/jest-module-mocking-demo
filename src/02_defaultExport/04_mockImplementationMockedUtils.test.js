import method1 from './utils.js'

jest.mock('./utils.js', () => jest.fn().mockImplementation(() => 'You have called a mocked method 1!'))

describe('default export - module factory with mock implementation mocked file', () => {
  it('returns the correct value for Method 1', () => {
    expect(method1()).toBe('You have called a mocked method 1!')
    expect(method1).toHaveBeenCalledTimes(1)
  })
})
