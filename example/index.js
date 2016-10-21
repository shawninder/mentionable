'use strict'

require('./style.css')

const render = require('brisky/render')
const mentionable = require('../lib')
const createState = require('vigour-state/s')

// This is the data for the suggestions
const state = global.state = createState({
  people: {
    val: require('./data.json')
  }
})

const description = "Just start typing a person's name or username and get suggestions!"

const app = global.app = {
  // Types
  types: {
    mentionable
  },
  // Elements
  component: {
    type: 'mentionable',
    class: 'component',
    input: {
      tag: 'textarea',
      props: {
        autofocus: true,
        placeholder: 'Enter a name'
      }
    },
    data: {
      $: 'people'
    }
  },
  description: {
    class: 'description',
    tag: 'p',
    text: description
  }
}

document.body.appendChild(render(app, state))
