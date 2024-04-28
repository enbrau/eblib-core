import $eblib from '../src/index.js'

describe('C01: color.js', function() {
  describe('C01T01: $eblib.color', function() {
    it("C01T0101: $eblib.color.rgbToHex('rgb(0,0,0)')", function() {
      expect($eblib.color.rgbToHex('rgb(0,0,0)')).toBe('#000000')
    })
    it("C01T0102: $eblib.color.hexToRgb('#000000')", function() {
      expect($eblib.color.hexToRgb('#000000')).toBe('rgb(0,0,0)')
    })
  })
})

describe('C02: cookie.js', function() {
  describe("C02T01: $eblib.cookie", function() {
    it("C02T0101: $eblib.cookie.setCookie('token', 'TOKEN')", function() {
      $eblib.cookie.setCookie('token', 'TOKEN')
      expect($eblib.cookie.getCookie('token')).toBe('TOKEN')
    })
    it("C02T0102: $eblib.cookie.getCookie('token')", function() {
      expect($eblib.cookie.getCookie('token')).toBe('TOKEN')
    })
    it("C02T0103: $eblib.cookie.removeCookie('token')", function() {
      expect($eblib.cookie.getCookie('token')).toBe('TOKEN')
      $eblib.cookie.removeCookie('token')
      expect($eblib.cookie.getCookie('token')).toBe(undefined)
    })
    // it("C02T0104: $eblib.cookie.setCookie('token', 'TOKEN', { path: '/test' })", function() {
    //   $eblib.cookie.setCookie('token', 'TOKEN', { path: '/test' })
    //   expect($eblib.cookie.getCookie('token')).toBe(undefined)
    //   global.window = { location: { pathname: '/test' } }
    //   expect($eblib.cookie.getCookie('token')).toBe('TOKEN')
    //   $eblib.cookie.removeCookie('token')
    //   expect($eblib.cookie.getCookie('token')).toBe(undefined)
    // })
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
  describe('F01T02: $eblib.format.toFileSize', function() {
    it("F01T0201: $eblib.format.toFileSize(1024)", function() {
      expect($eblib.format.toFileSize(1024)).toBe('1.00KB')
    })
    it("F01T0202: $eblib.format.toFileSize(1024 * 1024)", function() {
      expect($eblib.format.toFileSize(1024 * 1024)).toBe('1.00MB')
    })
    it("F01T0203: $eblib.format.toFileSize(1024 * 1024 * 1024)", function() {
      expect($eblib.format.toFileSize(1024 * 1024 * 1024)).toBe('1.00GB')
    })
    it("F01T0203: $eblib.format.toFileSize(1024 * 1024 * 1024 * 1024)", function() {
      expect($eblib.format.toFileSize(1024 * 1024 * 1024 * 1024)).toBe('>1TB')
    })
  })
  describe('F01T03: $eblib.format.camelToSep', function() {
    it("F01T0301: $eblib.format.camelToSep('SysUser')", function() {
      expect($eblib.format.camelToSep('SysUser')).toBe('sys_user')
    })
    it("F01T0302: $eblib.format.camelToSep('sysUser')", function() {
      expect($eblib.format.camelToSep('sysUser')).toBe('sys_user')
    })
    it("F01T0302: $eblib.format.camelToSep('sysUser', true)", function() {
      expect($eblib.format.camelToSep('sysUser', true)).toBe('SYS_USER')
    }),
    it("F01T0302: $eblib.format.camelToSep('sysUser', true, '-')", function() {
      expect($eblib.format.camelToSep('sysUser', true, '-')).toBe('SYS-USER')
    })
    it("F01T0302: $eblib.format.camelToSep('sysUser', false, ' ')", function() {
      expect($eblib.format.camelToSep('sysUser', false, ' ')).toBe('sys user')
    })
  })
  describe('F01T04: $eblib.format.toCamelCase', function() {
    it("F01T0401: $eblib.format.toCamelCase('sys_user', true)", function() {
      expect($eblib.format.toCamelCase('sys_user', true)).toBe('SysUser')
    })
    it("F01T0402: $eblib.format.toCamelCase('sys_user')", function() {
      expect($eblib.format.toCamelCase('sys_user')).toBe('sysUser')
    })
    it("F01T0403: $eblib.format.toCamelCase('sys-user', true)", function() {
      expect($eblib.format.toCamelCase('sys-user', true)).toBe('SysUser')
    })
    it("F01T0404: $eblib.format.toCamelCase('sys-user')", function() {
      expect($eblib.format.toCamelCase('sys-user')).toBe('sysUser')
    })
    it("F01T0405: $eblib.format.toCamelCase('sys user', true)", function() {
      expect($eblib.format.toCamelCase('sys user', true)).toBe('SysUser')
    })
    it("F01T0406: $eblib.format.toCamelCase('sys user')", function() {
      expect($eblib.format.toCamelCase('sys user')).toBe('sysUser')
    })
    it("F01T0407: $eblib.format.toCamelCase('sys    user')", function() {
      expect($eblib.format.toCamelCase('sys    user')).toBe('sysUser')
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
      expect($eblib.rules.REG_HEX_COLOR.test(result)).toBe(true)
    })
  })
})
