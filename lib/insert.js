'use strict'

/**
 * @function insert
 * Insert a suggestion in the input
 */
module.exports = exports = function insert (e, stamp, _state, selected) {
  e.event.preventDefault()
  var state = _state || e.state
  if (typeof selected === 'number') {
    let item = state.results[selected]
    _insert(state, item)
  } else {
    var i = 0
    let item = state.results[i]
    var found = false
    while (!found && item) {
      if (item.isSelected.val === true) {
        found = true
        _insert(state, item)
      }
      i += 1
      item = state.results[i]
    }
  }
}

/**
 * @function _insert
 * Replaces the search query with the selected suggestion,
 * conserving the rest of the content
 */
function _insert (state, item) {
  let arr = []
  if (state.before) {
    let slice = (state.prefix && state.prefix.val.length > 0)
      ? state.before.val.slice(0, -state.prefix.val.length)
      : state.before.val
    if (slice.length > 0) {
      arr.push(slice)
    }
  }
  arr.push(item.name.val)
  if (state.after) {
    let slice = (state.suffix && state.suffix.val.length > 0)
      ? state.after.val.slice(state.suffix.length)
      : state.after.val
    if (slice.length > 0) {
      arr.push(slice)
    }
  }
  state.set({ comment: arr.join('') })
}
