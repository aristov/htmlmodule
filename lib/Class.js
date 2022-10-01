const AttrType = require('./AttrType')

class Class extends AttrType
{
  static nodeName = 'class'

  /**
   * @param {ElemType} elem
   */
  static update(elem) {
    const arr = [elem.vnode.className]
    const classList = elem.vnode.classList
    if(classList) {
      arr.push(...classList)
    }
    const className = arr.filter(Boolean).join(' ')
    super.update(elem, this.nodeName, className || null)
  }

  /**
   * @param {constructor @link ElemType} constructor
   * @return {string}
   */
  static generate(constructor) {
    if(constructor.hasOwnProperty('className')) {
      return constructor.className
    }
    const set = new Set
    let proto = constructor
    while(proto.class !== null) {
      set.add(proto.class)
      proto = Object.getPrototypeOf(proto)
    }
    const className = Array.from(set).join(' ')
    return constructor.className = className || null
  }
}

module.exports = Class
