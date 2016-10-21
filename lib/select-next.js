'use strict'

/**
 * @function selectNext
 * Selects the next item in the results list
 */
module.exports = exports = function selectNext (e, stamp) {
  e.event.preventDefault()
  if (e.state.results) {
    var i = 0
    var item = e.state.results[i]
    var found = false
    while (!found && item) {
      if (item.isSelected.val) {
        found = true
        let next = e.state.results[i + 1]
        if (next) {
          e.state.results[i].set({ isSelected: false })
          e.state.results[i + 1].set({ isSelected: true })
        }
      }
      i += 1
      item = e.state.results[i]
    }
  }
}
