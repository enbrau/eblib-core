import $eblib from '../src/index.js'

describe('C01: color.js', function() {
  describe('C01T01: rgb and hex transform ', function() {
    it("C01T0101: $eblib.color.rgbToHex('rgb(0,0,0)')", function() {
      expect($eblib.color.rgbToHex('rgb(0,0,0)')).toBe('#000000')
    })
    it("C01T0102: $eblib.color.hexToRgb('#000000')", function() {
      expect($eblib.color.hexToRgb('#000000')).toBe('rgb(0,0,0)')
    })
  })
})

describe('F01: format.js', function() {
  describe('F01T01: $eblib.format.toAmount', function() {
    it("F01T0101: $eblib.format.toAmount('100000.567')", function() {
      expect($eblib.format.toAmount('100000.567')).toBe('100,000.57')
    })
    it("F01T0102: $eblib.format.toAmount('100000.567', '$')", function() {
      expect($eblib.format.toAmount('100000.567', '$')).toBe('$100,000.57')
    })
    it("F01T0103: $eblib.format.toAmount('100000.567', '$', 4)", function() {
      expect($eblib.format.toAmount('100000.567', '$', 4)).toBe('$100,000.5670')
    })
    it("F01T0104: $eblib.format.toAmount('100000.567', '$', 0)", function() {
      expect($eblib.format.toAmount('100000.567', '$', 0)).toBe('$100,001')
    })
    it("F01T0105: $eblib.format.toAmount(100000.567)", function() {
      expect($eblib.format.toAmount(100000.567)).toBe('100,000.57')
    })
    it("F01T0106: $eblib.format.toAmount(true)", function() {
      expect($eblib.format.toAmount(true)).toBe('')
    })
  })
})

describe('R01: random.js', function() {
  describe('R01T01: $eblib.random.randomString', function() {
    it("R01T0101: $eblib.random.randomString()", function() {
      let result = $eblib.random.randomString()
      expect(result.length).toBe(8)
    })
    it("R01T0102: $eblib.random.randomString(100)", function() {
      let result = $eblib.random.randomString(100)
      expect(result.length).toBe(100)
    })
  })
  describe('R01T02: $eblib.random.randomInteger', function() {
    it("R01T0201: $eblib.random.randomInteger(4, 9)", function() {
      let result = $eblib.random.randomInteger(4, 9)
      expect(result >= 4).toBe(true)
      expect(result <= 9).toBe(true)
    })
  })
  describe('R01T03: $eblib.random.randomColor', function() {
    it("R01T0301: $eblib.random.randomColor()", function() {
      let result = $eblib.random.randomColor()
      expect($eblib.consts.REG_HEX_COLOR.test(result)).toBe(true)
    })
  })
})
