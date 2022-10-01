const AttrType = require('./AttrType')

class BooleanType extends AttrType
{
  static defaultValue = false

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {boolean} value
   */
  static update(elem, propName, value) {
    if(value) {
      elem.node.setAttribute(this.nodeName, 'true')
    }
    else elem.node.removeAttribute(this.nodeName)
  }
}

module.exports = BooleanType
