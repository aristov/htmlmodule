/**
 * @abstract
 */
class AttrType
{
  static nodeName = null

  static defaultValue = null

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {string|null|*}
   */
  static get(propName, elem) {
    return elem.vnode[propName] ?? this.defaultValue
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {string|null|*} value
   */
  static set(elem, propName, value) {
    elem.vnode[propName] = value
  }

  /**
   * @param {ElemType} elem
   * @param {string} nodeName
   * @param {*} value
   */
  static update(elem, nodeName, value) {
    if(value === true) {
      value = ''
    }
    else if(value === false || value === null || value === this.defaultValue) {
      elem.node.removeAttribute(nodeName)
      return
    }
    if(value != elem.node.getAttribute(nodeName)) {
      elem.node.setAttribute(nodeName, value)
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} nodeName
   */
  static reset(elem, nodeName) {
    elem.node.removeAttribute(nodeName)
  }

  /**
   * @param {string} nodeName
   * @return {constructor @link AttrType}
   */
  static define(nodeName) {
    return class extends this
    {
      static nodeName = nodeName
    }
  }
}

module.exports = AttrType
