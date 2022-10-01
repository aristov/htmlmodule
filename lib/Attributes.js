const PropType = require('./PropType')

class Attributes extends PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {{}|null} value
   */
  static set(elem, name, value) {
    const vnode = elem.vnode
    if(!value) {
      delete vnode.attributes
      return
    }
    if(vnode.attributes) {
      value = Object.assign(vnode.attributes, value)
    }
    delete vnode.attributes
    vnode.attributes = value
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {*} attributes
   */
  static update(elem, name, attributes) {
    let attr, value
    for(attr in attributes) {
      value = attributes[attr]
      if(value === null) {
        elem.node.removeAttribute(attr)
      }
      else if(value !== elem.node.getAttribute(attr)) {
        elem.node.setAttribute(attr, value)
      }
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {{}} attributes
   */
  static reset(elem, name, attributes) {
    let attr
    for(attr in attributes) {
      if(!elem.vnode.attributes?.hasOwnProperty(attr)) {
        elem.node.removeAttribute(attr)
      }
    }
  }
}

module.exports = Attributes
