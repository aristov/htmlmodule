/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 */
class AttrType
{
  static defaultValue = null

  /**
   * @param {ElemType} elem
   * @returns {string|*}
   */
  static get(elem) {
    return elem.node.getAttribute(this.nodeName)
  }

  /**
   * @param {ElemType} elem
   * @param {string|*} value
   */
  static set(elem, value) {
    elem.node.setAttribute(this.nodeName, value)
  }

  /**
   * @returns {string}
   */
  static get attrName() {
    return this.name[0].toLowerCase() + this.name.slice(1)
  }

  /**
   * @returns {string}
   */
  static get nodeName() {
    return this.name.toLowerCase()
  }
}

module.exports = AttrType
