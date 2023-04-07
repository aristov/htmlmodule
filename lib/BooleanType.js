const AttrType = require('./AttrType')

class BooleanType extends AttrType
{
  static defaultValue = false

  static nodeValue = ''

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {boolean}
   */
  static get(elem, propName) {
    const value = super.get(elem, propName)
    return value === this.nodeValue || value !== 'false' && !!value
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {boolean} value
   */
  static update(elem, propName, value) {
    if(value === this.get(elem, propName)) {
      return
    }
    if(value) {
      elem.node.setAttribute(this.nodeName, this.nodeValue)
    }
    else elem.node.removeAttribute(this.nodeName)
  }

  /**
   * @param {string} nodeName
   * @param {*} [defaultValue]
   * @param {string} [nodeValue]
   * @return {constructor @link BooleanType}
   */
  static define(nodeName, defaultValue = this.defaultValue, nodeValue = this.nodeValue) {
    return class extends this
    {
      static nodeName = nodeName
      static defaultValue = defaultValue
      static nodeValue = nodeValue
    }
  }
}

module.exports = BooleanType
