'use strict'

const getCaretPosition = require('./get-caret-position')

/**
 * @function search
 * Populates the results list
 */
module.exports = exports = function search (e, stamp) {
  const value = e.target.value
  const caretPos = getCaretPosition(e.target)

  // Let's determine which word the caret is in: the query string
  const before = value.slice(0, caretPos)
  const after = value.slice(caretPos)

  const wordsBefore = before.split(/[\s,\.]+/)
  const prefix = wordsBefore[wordsBefore.length - 1]  // last word before caret

  const suffix = after.split(/[\s,\.]+/)[0] // First word after caret

  const queryStr = prefix + suffix
  const query = queryStr.toLowerCase()

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
    before,
    after,
    prefix,
    suffix,
    query,
    queryStr,
    results
  })
}
