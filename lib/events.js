'use strict'

/**
 * A few helper functions to identify key combinations
 */
module.exports = exports = {
  tab (event) {
    return !event.shiftKey &&
      event.keyCode === 9
  },
  enter (event) {
    return !event.shiftKey &&
      event.keyCode === 13
  },
  down (event) {
    return !event.shiftKey &&
      (event.keyCode === 40 || event.keyCode === 34)
  },
  up (event) {
    return !event.shiftKey &&
      (event.keyCode === 38 || event.keyCode === 33)
  },
  esc (event) {
    return !event.shiftKey &&
      event.keyCode === 27
  }
}
