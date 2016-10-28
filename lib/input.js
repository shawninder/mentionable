'use strict'

const insert = require('./insert')
const selectPrevious = require('./select-previous')
const selectNext = require('./select-next')
const events = require('./events')
const getCaretPosition = require('./get-caret-position')

module.exports = exports = {
  props: {
    value: {
      $: 'comment'
    }
  },
  on: {
    keydown (e, stamp) {
      var state = e.state
      // If the suggestion list is showing (there is at least 1 suggestion)
      if (state.results && state.results[0]) {
        if (events.tab(e.event)) {
          insert(e, stamp)
          this.parent.dismiss(state.root, state.key)
        }
        if (events.down(e.event)) {
          selectNext(e, stamp)
        }
        if (events.up(e.event)) {
          selectPrevious(e, stamp)
        }
        if (events.esc(e.event)) {
          this.parent.dismiss(state.root, state.key)
        }
      }
    },
    input (e, stamp) {
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
      this.parent.suggest(before, after, prefix, suffix, queryStr, query, e.state.root)
    }
  }
}
