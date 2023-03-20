/**
 * @abstract
 */
class AttrType
{
  static nodeName = null

  static defaultValue = ''

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {string|null|*}
   */
  static get(elem, propName) {
    return elem.node.getAttribute(this.nodeName) ?? this.defaultValue
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
    if(value === null || value === this.defaultValue) {
      elem.node.removeAttribute(this.nodeName)
    }
    else if(value != elem.node.getAttribute(this.nodeName)) {
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
   * @param {*} [defaultValue]
   * @return {constructor @link AttrType}
   */
  static define(nodeName, defaultValue = this.defaultValue) {
    return class extends this
    {
      static nodeName = nodeName
      static defaultValue = defaultValue
    }
  }
}

module.exports = AttrType
