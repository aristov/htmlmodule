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
  static get(elem, name) {
    return elem.node[name]
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
    if(!elem.vnode.hasOwnProperty(name)) {
      elem.node[name] = elem.__sampleNode[name]
    }
  }
}

module.exports = PropType
