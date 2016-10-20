/**
 * From http://stackoverflow.com/a/2897229/157949
 * Returns the caret (cursor) position of the specified text field.
 * Return value range is 0-oField.value.length.
**/
module.exports = exports = function doGetCaretPosition (oField) {
  // Initialize
  var iCaretPos = 0

  // IE Support
  if (global.document.selection) {
    // Set focus on the element
    oField.focus()

    // To get cursor position, get empty selection range
    var oSel = global.document.selection.createRange()

    // Move selection start to 0 position
    oSel.moveStart('character', -oField.value.length)

    // The caret position is selection length
    iCaretPos = oSel.text.length
  } else if (oField.selectionStart || oField.selectionStart === '0') {
    // Firefox support
    iCaretPos = oField.selectionStart
  }

  // Return results
  return iCaretPos
}
