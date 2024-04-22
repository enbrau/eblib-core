/**
 * convert color value from RGB format to HEX format
 * @param {String} rgb RGB format color string
 * @returns RGB format color string
 */
export function rgbToHex(rgb) {
  const arr = rgb
    .toLowerCase()
    .replace('rgb', '')
    .replace('(', '')
    .replace(')', '')
    .split(',')
    const h = parseInt(arr[0]).toString(16)
    const e = parseInt(arr[1]).toString(16)
    const x = parseInt(arr[2]).toString(16)
    return `#${h}${e}${x}`
}

/**
 * Convert color value from HEX format to RGB format
 * @param {String} hex HEX format color string
 * @returns RGB format color string
 */
export function hexToRgb(hex) {
  const str = hex.replace('#', '')
  const count = str.length / 3
  const power = 6 / str.length
  const r = parseInt('0x' + str.substring(0 * count, 1 * count)) ** power
  const g = parseInt('0x' + str.substring(1 * count, 2 * count)) ** power
  const b = parseInt('0x' + str.substring(2 * count)) ** power
  return `rgb(${r}, ${g}, ${b})`
}
