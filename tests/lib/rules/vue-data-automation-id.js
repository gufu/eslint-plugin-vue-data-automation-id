/**
 * @fileoverview Clickable elements should have a data-automation-id attribute
 * @author Konrad Gusz
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/vue-data-automation-id'),

  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('vue-data-automation-id', rule, {

  valid: [
    // give me some code that won't trigger a warning
    {
      code: '<a href="" data-automation-id="link-name"></a>'
    }
  ],

  invalid: [
    {
      code: '<a href=""></a>',
      errors: [{
        message: 'Fill me in.',
        type: 'Me too'
      }]
    }
  ]
})
