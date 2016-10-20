'use strict'

const search = require('./search')
const insert = require('./insert')
const selectPrevious = require('./select-previous')
const selectNext = require('./select-next')
const dismiss = require('./dismiss')
const events = require('./events')

module.exports = exports = {
  props: {
    value: {
      $: 'comment'
    }
  },
  on: {
    keydown (e, stamp) {
      if (events.tab(e.event)) {
        insert(e, stamp)
        dismiss(e, stamp)
      }
      if (events.down(e.event)) {
        selectNext(e, stamp)
      }
      if (events.up(e.event)) {
        selectPrevious(e, stamp)
      }
      if (events.esc(e.event)) {
        dismiss(e, stamp)
      }
    },
    input (e, stamp) {
      search(e, stamp)
    }
  }
}
