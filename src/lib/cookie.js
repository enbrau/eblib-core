/**
 * @module cookie
 */

function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i]
    for (var key in source) {
      target[key] = source[key]
    }
  }
  return target
}

const converter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1)
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
} 

const DEFAULT_COOKIE_ATTRIBUTES = { path: '/' }

/**
 * set a cookie
 * @param {Stirng} name       cookie name
 * @param {Stirng} value      cookie value
 * @param {Object} attributes cookie attributes
 * @returns cookie string
 */
export function setCookie(name, value, attributes) {
  name = encodeURIComponent(name)
    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
    .replace(/[()]/g, escape)

  const attrs = assign({}, DEFAULT_COOKIE_ATTRIBUTES, attributes)
  if (typeof attrs.expires === 'number') {
    attrs.expires = new Date(Date.now() + attrs.expires * 864e5)
  }
  if (attrs.expires) {
    attrs.expires = attrs.expires.toUTCString()
  }

  let stringifiedAttributes = ''
  for (var attrName in attrs) {
    if (!attrs[attrName]) {
      continue
    }

    stringifiedAttributes += '; ' + attrName

    if (attrs[attrName] === true) {
      continue
    }

    stringifiedAttributes += '=' + attrs[attrName].split(';')[0]
  }

  return (document.cookie =
    name + '=' + converter.write(value, name) + stringifiedAttributes)
}

/**
 * get a cookie
 * @param {String} name cookie name
 * @returns cookie value
 */
export function getCookie(name) {
  let cookies = document.cookie ? document.cookie.split('; ') : []

  let jar = {}
  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split('=')
    const value = parts.slice(1).join('=')

    try {
      const found = decodeURIComponent(parts[0])
      if (!(found in jar)) jar[found] = converter.read(value, found)
      if (name === found) {
        break
      }
    } catch {
      // Do nothing...
    }
  }

  return name ? jar[name] : jar
}

/**
 * remove a cookie
 * @param {String} name cookie name
 */
export function removeCookie(name) {
  setCookie(name, '', assign({}, DEFAULT_COOKIE_ATTRIBUTES, { expires: -1 }))
}
