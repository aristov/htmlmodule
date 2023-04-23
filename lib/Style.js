const { document } = require('xwindow')
const AttrType = require('./AttrType')

const sampleNode = document.createElement('div')

class Style extends AttrType
{
  static nodeName = 'style'

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @return {CSSStyleDeclaration}
   */
  static get(elem, prop) {
    return elem.node.style
  }

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @param {string|{}|null} value
   */
  static set(elem, prop, value) {
    if(typeof value === 'string' || value === null) {
      elem.vnode.style = value || null
      return
    }
    Object.assign(sampleNode.style, value)
    elem.vnode.style = sampleNode.getAttribute('style') || null
    sampleNode.style = ''
  }
}

module.exports = Style
