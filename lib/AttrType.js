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
  static get(elem, propName) {
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
   * @param {string} propName
   * @param {*} value
   */
  static update(elem, propName, value) {
    if(value === true) {
      value = ''
    }
    else if(value === false || value === null || value === this.defaultValue) {
      elem.node.removeAttribute(this.nodeName)
      return
    }
    if(value != elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   */
  static reset(elem, propName) {
    if(!elem.vnode.hasOwnProperty(propName)) {
      elem.node.removeAttribute(this.nodeName)
    }
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
