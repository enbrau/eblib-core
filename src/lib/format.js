/**
 * @module format
 */

/**
 * transform number into amount
 * @param {String|Number} amount required, original amount string or number
 * @param {String}        prefix optional, prefix of the result
 * @param {Number}        fixed  optional, 
 * @returns amount string
 */
export function toAmount(amount, prefix, fixed) {
  let num = (typeof amount === 'number' ? amount : parseFloat(amount))
  if (isNaN(num)) {
    return ''
  }
  num = num.toFixed(fixed === 0 ? 0 : fixed || 2)
  let arr = num.split('.')
  arr[0] = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return (prefix || '') + arr.join('.')
}

/**
 * transform number into file size
 * @param {Number} bytes 
 * @returns file size string
 */
export function toFileSize(bytes) {
  let result = ''
  if      (bytes < 1048576)                              result = (bytes / 1024).toFixed(2) + 'KB'
  else if (bytes >= 1048576    && bytes < 1073741824)    result = (bytes / (1024 * 1024)).toFixed(2) + 'MB'
  else if (bytes >= 1073741824 && bytes < 1099511627776) result = (bytes / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
  else result = '>1TB'
  return result
}

/**
 * transform string from camel style to seperated style
 * @param {String} str     required, camel style string
 * @param {Boolea} isUpper optional, default false, whether the result is upper case
 * @param {String} sep     optional, default '_', word seperator
 * @returns 
 */
export function camelToSep(str, isUpper, sep) {
  let seperator = sep || '_'
  let result = str.replace(/([A-Z])/g, seperator + '$1')
  if (result.indexOf(seperator) === 0) {
    result = result.substring(1)
  }
  return isUpper ? result.toUpperCase() : result.toLowerCase()
}

/**
 * 
 * @param {String}  str     required, words seperated by '_', '-' or ' '
 * @param {Boolean} isUpper optional, default false, whether the result is upper camel case
 * @returns 
 */
export function toCamelCase(str, isUpper) {
  let result = str.replace(/[-_\s]\w/ig, function(match){
    return match.charAt(1).toUpperCase();
  }).replace(/\s/g, '')
  return (isUpper ? result.charAt(0).toUpperCase() : result.charAt(0).toLowerCase()) + result.slice(1)
}
