const AttrType = require('./AttrType')

class TokenType extends AttrType
{
  static defaultValue = undefined

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {string|boolean|null|undefined} value
   */
  static update(elem, propName, value) {
    if(value === null || value === this.defaultValue) {
      elem.node.removeAttribute(this.nodeName)
    }
    else if(String(value) !== elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }
}

module.exports = TokenType
