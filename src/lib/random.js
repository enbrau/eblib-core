/**
 * generate random string
 * @param {number} length length of the random string
 * @returns random string
 */
export function randomString(length) {
  let len = length || 8
  return len <= 11 ? 
    Math.random().toString(36).substring(2, 2 + len).padEnd(len, '0') : 
    randomString(11) + randomString(len - 11)
}
