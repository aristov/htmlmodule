/**
 * @abstract
 */
class AttrType
{
  static nodeName = undefined

  static defaultValue = null

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @returns {string|null|*}
   */
  static get(prop, elem) {
    return elem.vnode[prop] ?? null
  }

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @param {string|null|*} value
   */
  static set(elem, prop, value) {
    elem.vnode[prop] = value
  }
}

module.exports = AttrType
