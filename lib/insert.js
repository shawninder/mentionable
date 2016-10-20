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
 * This is the part that does the actual insertion
 */
function _insert (state, item) {
  let arr = []
  if (state.pre.val) {
    arr.push(state.pre.val)
  }
  arr.push(item.username.val)
  if (state.post.val) {
    arr.push(state.post.val)
  }
  state.set({ comment: arr.join(' ') })
}
