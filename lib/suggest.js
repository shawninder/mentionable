'use strict'

module.exports = exports = function suggest (before, after, prefix, suffix, queryStr, query, state) {
  const path = this.$.join('.')
  this.dismiss(state, path)
  if (!this.dataKey) {
    throw new Error('Missing `dataKey`, see README.md')
  }
  var data = state[this.dataKey.val].val
  var results = []
  if (query.length > 0) {
    for (let i = 0, len = data.length; i < len; i += 1) {
      if (data[i].username.slice(0, query.length).toLowerCase() === query ||
        data[i].name.slice(0, query.length).toLowerCase() === query) {
        data[i].isSelected = false
        results.push(data[i])
      }
    }
  }
  if (results[0]) {
    results[0].isSelected = true
  }
  var final = {}
  final[path] = {
    before,
    after,
    prefix,
    suffix,
    query,
    queryStr,
    results
  }
  console.log('final', final)
  state.set(final)
}
