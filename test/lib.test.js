import $eblib from '../src/index.js'

describe('C01: color.js', function() {
  describe('C01T01: rgb and hex transform ', function() {
    it("C01T0101: rgbToHex('rgb(0,0,0)')", function() {
      expect($eblib.rgbToHex('rgb(0,0,0)')).toBe('#000000')
    })
    it("C01T0102: hexToRgb('#000000')", function() {
      expect($eblib.hexToRgb('#000000')).toBe('rgb(0,0,0)')
    })
  })
})

describe('F01: format.js', function() {
  describe('F01T01: amount transform', function() {
    it("F01T0101: $eblib.toAmount('100000.567')", function() {
      expect($eblib.toAmount('100000.567')).toBe('100,000.57')
    })
    it("F01T0102: $eblib.toAmount('100000.567', '$')", function() {
      expect($eblib.toAmount('100000.567', '$')).toBe('$100,000.57')
    })
    it("F01T0103: $eblib.toAmount('100000.567', '$', 4)", function() {
      expect($eblib.toAmount('100000.567', '$', 4)).toBe('$100,000.5670')
    })
    it("F01T0104: $eblib.toAmount('100000.567', '$', 0)", function() {
      expect($eblib.toAmount('100000.567', '$', 0)).toBe('$100,001')
    })
    it("F01T0105: $eblib.toAmount(100000.567)", function() {
      expect($eblib.toAmount(100000.567)).toBe('100,000.57')
    })
    it("F01T0106: $eblib.toAmount(true)", function() {
      expect($eblib.toAmount(true)).toBe('')
    })
  })
})
