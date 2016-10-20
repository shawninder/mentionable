'use strict'

/**
 * @function dismiss
 * Empties the result list, dimissing the suggestion box
 */
module.exports = exports = function dismiss (e, stamp, _state) {
  e.event.preventDefault()
  var state = _state || e.state
  state.set({ results: null })
  state.set({ results: [] })
}
