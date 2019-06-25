/**
 * @fileoverview Clickable elements should have a data-automation-id attribute
 * @author Konrad Gusz
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Clickable elements should have a data-automation-id attribute',
      category: 'Fill me in',
      recommended: false
    },
    fixable: 'code',  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function (context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      function (context) {
        console.log(context)
      }

      // give me methods

    }
  }
}
