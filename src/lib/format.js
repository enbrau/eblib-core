/**
 * @module format
 */

/**
 * transform number into amount
 * @param {String|Number} number 
 * @param {String} prefix 
 * @param {Number} fixed
 * @returns amount string
 */
export function toAmount(number, prefix, fixed) {
  let num = (typeof number === 'number' ? number : parseFloat(number))
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
 * @param {Number} fileSizeByte 
 * @returns file size string
 */
export function toFileSize(fileSizeByte) {
  let fileSizeMsg = ''
  if (fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + 'KB'
  else if (fileSizeByte === 1048576) fileSizeMsg = '1MB'
  else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + 'MB'
  else if (fileSizeByte > 1048576 && fileSizeByte === 1073741824) fileSizeMsg = '1GB'
  else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
  else fileSizeMsg = '>1TB'
  return fileSizeMsg
}
