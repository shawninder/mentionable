'use strict'

const insert = require('./insert')
const getIdx = require('./get-idx')

module.exports = exports = {
  class: 'results',
  tag: 'ul',
  $: 'results.$any',
  child: {
    tag: 'li',
    class: {
      $: 'isSelected',
      $transform (val) {
        var base = 'result'
        if (val) {
          base += ' selected'
        }
        return base
      }
    },
    on: {
      click (e, stamp) {
        e.event.preventDefault()
        var state = e.state.parent.parent
        insert(e, stamp, state, getIdx(e.target))
        const path = state.key
        this.parent.parent.dismiss(e.state.root, path)
      }
    },
    style: {
      backgroundImage: {
        $: 'avatar_url',
        $transform (val) {
          return `url('${val}')`
        }
      }
    },
    name: {
      tag: 'span',
      class: 'name',
      text: {
        $: 'name'
      }
    },
    username: {
      tag: 'span',
      class: 'username',
      text: {
        $: 'username',
        $transform (val) {
          return `(${val})`
        }
      }
    }
  }
}
