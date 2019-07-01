/**
 * @fileoverview Clickable elements should have a data-automation-id attribute
 * @author Konrad Gusz
 */
'use strict'
const utils = require('../utils')
const casing = require('../utils/casing')

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'enforce attribute naming style on custom components in template',
      category: 'strongly-recommended',
      url: 'https://eslint.vuejs.org/rules/attribute-hyphenation.html'
    },
    fixable: 'code',
    schema: [
      {
        enum: ['always', 'never']
      },
      {
        type: 'object',
        properties: {
          'ignore': {
            type: 'array',
            items: {
              allOf: [
                {type: 'string'},
                {not: {type: 'string', pattern: ':exit$'}},
                {not: {type: 'string', pattern: '^\\s*$'}}
              ]
            },
            uniqueItems: true,
            additionalItems: false
          }
        },
        additionalProperties: false
      }
    ]
  },

  create (context) {
    // console.log('222', context.options)
    // console.log('333', typeof context.getSourceCode())
    const sourceCode = context.getSourceCode()
    // const option = context.options[0]
    // const optionsPayload = context.options[1]
    // const useHyphenated = option !== 'never'
    const htmlNodes = ['a', 'button', 'fieldset', 'form', 'input', 'optgroup', 'option', 'select', 'textarea', 'details', 'dialog', 'menu', 'menuitem', 'summary']
    const vueNodes = ['b-alert', 'b-button', 'b-card', 'b-carousel', 'b-carousel-slide', 'b-collapse', 'b-dropdown', 'b-dropdown-item', 'b-form', 'b-form-input', 'b-form-select',
      'b-form-checkbox', 'b-form-file', 'b-form-radio', 'b-form-textarea', 'b-link', 'b-modal', 'b-nav-item', 'b-popover', 'b-tabs', 'b-tab', 'b-tooltip']
    const eventTypes = ['click', 'hover']
    const directives = ['b-popover']

    const validNodes = [...htmlNodes, ...vueNodes]

    function hasAutomationAttribute (node) {
      return node.attributes.some(x => {
        return x.key.name === 'data-automation-id' && (x.value && x.value.value !== '')
      })
    }

    function hasEventAttribute (node) {
      return node.attributes.some(x => {
        return x.directive && x.key.name === 'on' && eventTypes.indexOf(x.key.argument) !== -1
      })
    }

    function hasDirective (node) {
      return node.attributes.some(x => {
        return x.directive && directives.indexOf(x.key.raw.name) !== -1
      })
    }

    function shouldHaveAutomationAttribute (node) {
      return validNodes.indexOf(node.name) !== -1 || hasDirective(node.startTag) || hasEventAttribute(node.startTag)
    }

    function reportIssue (node, name) {
      context.report({
        node: node.key,
        loc: node.loc,
        message: `Tag ${name} needs to have data-automation-id.`,
      })
    }

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return utils.defineTemplateBodyVisitor(context, {
      VElement (node) {



        const shouldHaveAttribute = shouldHaveAutomationAttribute(node)
        if(shouldHaveAttribute) {
          const name = node.rawName
          const hasAttribute = hasAutomationAttribute(node.startTag)
          if(!hasAttribute) {
            reportIssue(node, name)
          }
        }
      }
    })
  }
}

