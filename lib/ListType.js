const AttrType = require('./AttrType')

class ListType extends AttrType
{
  static defaultValue = []

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {string|string[]|null} value
   */
  static update(elem, propName, value) {
    if(Array.isArray(value)) {
      value = value.join(' ')
    }
    if(!value || value === this.defaultValue.join(' ')) {
      elem.node.removeAttribute(this.nodeName)
    }
    else if(value !== elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }
}

module.exports = ListType
