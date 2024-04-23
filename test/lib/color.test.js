import $eblib from '../../src/index.js'

describe('color.js', function() {
  describe('rgb and hex transform ', function() {
    it("rgbToHex('rgb(0,0,0)')", function() {
      expect($eblib.rgbToHex('rgb(0,0,0)')).toBe('#000000')
    })
    it("hexToRgb('#000000')", function() {
      expect($eblib.hexToRgb('#000000')).toBe('rgb(0,0,0)')
    })
  })
})
