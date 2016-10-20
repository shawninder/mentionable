'use strict'

/**
 * @function getIdx
 * Returns the index of an element among its siblings
 */
module.exports = exports = function getIdx (el) {
  const child = el
  const parent = child.parentNode
  return Array.prototype.indexOf.call(parent.children, child)
}
