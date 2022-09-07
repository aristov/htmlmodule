const AttrType = require('./AttrType')

class Class extends AttrType
{
  static nodeName = 'class'

  /**
   * @param {ElemType} elem
   */
  static update(elem) {
    const { className, classList } = elem.vnode
    const list = Array.isArray(classList) ?
      [className, ...classList] :
      [className, classList]
    super.update(elem, list.filter(Boolean).join(' '))
  }

  /**
   * @param {constructor @link ElemType} constructor
   * @return {string}
   */
  static generate(constructor) {
    if(constructor.hasOwnProperty('className')) {
      return constructor.className
    }
    const items = new Set
    let proto = constructor
    while(proto.class !== null) {
      items.add(proto.class)
      proto = Object.getPrototypeOf(proto)
    }
    return constructor.className = Array.from(items).join(' ')
  }
}

module.exports = Class
