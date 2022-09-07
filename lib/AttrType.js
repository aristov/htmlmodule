/**
 * @abstract
 */
class AttrType
{
  static nodeName = null

  static defaultValue = null

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @returns {string|null|*}
   */
  static get(prop, elem) {
    return elem.vnode[prop] ?? this.defaultValue
  }

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @param {string|null|*} value
   */
  static set(elem, prop, value) {
    elem.vnode[prop] = value
  }

  /**
   * @param {ElemType} elem
   * @param {*} value
   */
  static update(elem, value) {
    if(!value || value === this.defaultValue) {
      elem.node.removeAttribute(this.nodeName)
      return
    }
    if(value !== elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }
}

module.exports = AttrType
