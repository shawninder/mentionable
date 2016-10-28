'use strict'

require('./style.css')

const render = require('brisky/render')
const mentionable = require('../lib')
const createState = require('vigour-state/s')

// This is the data for the suggestions
const state = global.state = createState({
  people: {
    val: require('./data.json')
  },
  mentionable1: {},
  mentionable2: {}
})

const description = "Just start typing a person's name or username and get suggestions!"

const app = global.app = {
  // Types
  types: {
    mentionable
  },
  // Elements
  input: {
    type: 'mentionable',
    class: 'component',
    $: 'mentionable1',
    dataKey: 'people',
    input: {
      tag: 'input',
      props: {
        placeholder: 'Comment'
      }
    }
  },
  textarea: {
    type: 'mentionable',
    class: 'component',
    $: 'mentionable2',
    dataKey: 'people',
    input: {
      tag: 'textarea',
      props: {
        autofocus: true,
        placeholder: 'Comment'
      }
    }
  },
  description: {
    class: 'description',
    tag: 'p',
    text: description
  }
}

document.body.appendChild(render(app, state))
