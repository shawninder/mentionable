'use strict'

/**
 * @function dismiss
 * Empties the result list, dimissing the suggestion box
 */
module.exports = exports = function dismiss (state, path) {
  var cleaner = {}
  cleaner[path] = { results: null }
  state.set(cleaner)
  var resetter = {}
  resetter[path] = {
    before: '',
    after: '',
    prefix: '',
    suffix: '',
    queryStr: '',
    query: '',
    results: []
  }
  state.set(resetter)
}
