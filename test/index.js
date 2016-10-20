'use strict'

const test = require('tape')
const search = require('../lib/search')

const abe = {
  name: 'Abe',
  username: 'ehb'
}

const bob = {
  name: 'Bob',
  username: 'berhb'
}

const boris = {
  name: 'Boris',
  username: 'borsch'
}

const people = [abe, bob, boris]

const testCases = [{
  value: 'Hello',
  results: []
}, {
  value: 'bo',
  results: [bob, boris]
}, {
  value: 'e',
  results: [abe]
}]

test('search', function (t) {
  t.plan(testCases.length * 2)
  for (let i = 0, len = testCases.length; i < len; i += 1) {
    let e = {
      target: {
        value: testCases[i].value
      },
      state: {
        people: {
          val: people
        },
        first: true,
        set (obj) {
          if (this.first) {
            t.equal(obj.results, null, 'Results set to null')
            this.first = false
          } else {
            t.deepEqual(obj.results, testCases[i].results, 'Matching results set')
          }
        }
      }
    }
    if (!global.document) {
      global.document = {}
    }
    search(e)
  }
})
