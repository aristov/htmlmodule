const PropType = require('./PropType')

class ClassList extends PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*} value
   */
  static set(elem, name, value) {
    elem.vnode.classList = [elem.vnode.classList, value].flat()
  }
}

module.exports = ClassList
