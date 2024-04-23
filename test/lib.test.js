import $eblib from '../src/index.js'

describe('C1: color.js', function() {
  describe('C1T1: rgb and hex transform ', function() {
    it("C1T1001: rgbToHex('rgb(0,0,0)')", function() {
      expect($eblib.rgbToHex('rgb(0,0,0)')).toBe('#000000')
    })
    it("C1T1002: hexToRgb('#000000')", function() {
      expect($eblib.hexToRgb('#000000')).toBe('rgb(0,0,0)')
    })
  })
})

describe('F1: format.js', function() {
  describe('F1T1: amount transform', function() {
    it("F1T1001: $eblib.toAmount('100000.567')", function() {
      expect($eblib.toAmount('100000.567')).toBe('100,000.57')
    })
    it("F1T1002: $eblib.toAmount('100000.567', '$')", function() {
      expect($eblib.toAmount('100000.567', '$')).toBe('$100,000.57')
    })
    it("F1T1003: $eblib.toAmount('100000.567', '$', 4)", function() {
      expect($eblib.toAmount('100000.567', '$', 4)).toBe('$100,000.5670')
    })
    it("F1T1004: $eblib.toAmount('100000.567', '$', 0)", function() {
      expect($eblib.toAmount('100000.567', '$', 0)).toBe('$100,001')
    })
  })
})
