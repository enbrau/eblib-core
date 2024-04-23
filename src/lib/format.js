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
  return (prefix || '') + num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
