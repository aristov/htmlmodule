/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 */
class AttrType
{
  static nodeName = undefined

  static propName = undefined

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
}

module.exports = AttrType
