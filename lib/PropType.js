/**
 * @abstract
 */
class PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @returns {string|null|*}
   */
  static get(name, elem) {
    return elem.vnode[name] ?? null
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*} value
   */
  static set(elem, name, value) {
    elem.vnode[name] = value
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {*} value
   */
  static update(elem, name, value) {
    if(value !== elem.node[name]) {
      elem.node[name] = value
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   */
  static reset(elem, name) {
    elem.node[name] = null
  }
}

module.exports = PropType
