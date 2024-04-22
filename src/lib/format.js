/**
 * transform number into amount
 * @param {String|Number} number 
 * @param {String} prefix 
 * @param {Number} fixed
 * @returns amount string
 */
export function toAmount(number, prefix, fixed) {
  let num = typeof number === 'string' ? parseFloat(number) : number
  num = num.toFixed(fixed || 2)
  num = num.parseFloat(num)
  return (prefix || '') + num.toLocaleString()
}
