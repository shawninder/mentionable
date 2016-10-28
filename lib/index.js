'use strict'

require('./style.css')

// Returns a component composed of an input field and a results list
module.exports = exports = {
  // methods
  define: {
    suggest: require('./suggest'),
    dismiss: require('./dismiss')
  },
  // elements
  input: require('./input'),
  suggestions: require('./suggestions')
}
