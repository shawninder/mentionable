'use strict'

const _trim = require('lodash.trim')
const getCaretPosition = require('./get-caret-position')

/**
 * @function search
 * Populates the results list
 */
module.exports = exports = function search (e, stamp) {
  const val = e.target.value
  const caretPos = getCaretPosition(e.target)
  const parts = [
    val.slice(0, caretPos),
    val.slice(caretPos)
  ]
  const previousSpaceIdx = parts[0].lastIndexOf(' ')
  const queryStart = previousSpaceIdx === -1
    ? 0
    : previousSpaceIdx
  const nextSpaceIdx = parts[1].indexOf(' ')
  const queryEnd = caretPos +
    (nextSpaceIdx === -1
        ? parts[1].length
        : nextSpaceIdx)
  const query = _trim(val.slice(queryStart, queryEnd)).toLowerCase()
  const pre = _trim(val.slice(0, queryStart))
  const post = _trim(val.slice(queryEnd))
  var state = e.state
  var data = state.people.val
  var results = []
  if (query.length > 0) {
    for (let i = 0, len = data.length; i < len; i += 1) {
      if (data[i].username.slice(0, query.length).toLowerCase() === query ||
        data[i].name.slice(0, query.length).toLowerCase() === query) {
        data[i].isSelected = false
        results.push(data[i])
      }
    }
  }
  if (results[0]) {
    results[0].isSelected = true
  }
  state.set({ results: null }) // Otherwise, by default, state will merge
  state.set({
    results,
    pre,
    post
  })
}
