const AttrType = require('./AttrType')

class NumberType extends AttrType
{
  static defaultValue = 0

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {number}
   */
  static get(elem, propName) {
    const value = elem.node.getAttribute(this.nodeName)
    return value === null ?
      this.defaultValue :
      +value
  }
}

module.exports = NumberType