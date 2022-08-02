/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 * @abstract
 */
class AttrType
{
  static nodeName = undefined

  static propName = undefined

  static defaultValue = null

  /**
   * @param {ElemType} elem
   * @returns {string|null|*}
   */
  static get(elem) {
    return elem.__props.attributes[this.nodeName] ?? null
  }

  /**
   * @param {ElemType} elem
   * @param {string|null|*} value
   */
  static set(elem, value) {
    elem.__props.attributes[this.nodeName] = value
  }
}

module.exports = AttrType
