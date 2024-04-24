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
