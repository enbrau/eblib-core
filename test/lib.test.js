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
  describe('F01T01: $eblib.toAmount', function() {
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

describe('R01: random.js', function() {
  describe('R01T01: $eblib.randomString', function() {
    it("R01T0101: $eblib.randomString()", function() {
      let result = $eblib.randomString()
      expect(result.length).toBe(8)
    })
    it("R01T0102: $eblib.randomString(100)", function() {
      let result = $eblib.randomString(100)
      expect(result.length).toBe(100)
    })
  })
  describe('R01T02: $eblib.randomInteger', function() {
    it("R01T0201: $eblib.randomInteger(4, 9)", function() {
      let result = $eblib.randomInteger(4, 9)
      expect(result >= 4).toBe(true)
      expect(result <= 9).toBe(true)
    })
  })
})
