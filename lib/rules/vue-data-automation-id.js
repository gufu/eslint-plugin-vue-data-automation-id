/**
 * @fileoverview Clickable elements should have a data-automation-id attribute
 * @author Konrad Gusz
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
  return {
    'CallExpression': function (node) {
      // node = {CallExpression}
      var callee = node.callee
      // callee.object.name === 'sounds'
      // callee.property.name === 'get'
    }
    // console.log(context)
  }
}
module.schema = []
