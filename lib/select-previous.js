'use strict'

/**
 * @function selectPrevious
 * Selects the previous item in the results list
 */
module.exports = exports = function (e, stamp) {
  e.event.preventDefault()
  var i = 0
  var item = e.state.results[i]
  var found = false
  while (!found && item) {
    if (item.isSelected.val) {
      found = true
      let previous = e.state.results[i - 1]
      if (previous) {
        e.state.results[i].set({ isSelected: false })
        e.state.results[i - 1].set({ isSelected: true })
      }
    }
    i += 1
    item = e.state.results[i]
  }
}
