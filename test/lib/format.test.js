import $eblib from '../../src/index.js'

describe('format.js', function() {
  it("$eblib.toAmount('100000.467')", function() {
    expect($eblib.toAmount('100000.467')).toBe('100,000.47')
  })
})