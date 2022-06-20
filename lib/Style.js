const AttrType = require('./AttrType')

class Style extends AttrType
{
  /**
   * @param {HtmlElem} elem
   * @returns {CSSStyleDeclaration}
   */
  static get(elem) {
    return elem.node.style
  }

  /**
   * @param {HtmlElem} elem
   * @param {string|{}} style
   */
  static set(elem, style) {
    if(typeof style === 'string') {
      elem.node.style = style
    }
    else {
      Object.assign(elem.node.style, style)
    }
    if(elem.node.getAttribute('style') === '') {
      elem.node.removeAttribute('style')
    }
  }
}

module.exports = Style
