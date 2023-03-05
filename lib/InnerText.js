const PropType = require('./PropType')
const filter = value => {
  return !skipTypes[toString.call(value)]
}
const skipTypes = {
  '[object Undefined]' : true,
  '[object Boolean]' : true,
  '[object Null]' : true,
}

class InnerText extends PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*[]|*} value
   */
  static set(elem, name, value) {
    elem.vnode[name] = Array.isArray(value) ?
      value.filter(filter).join('\n') :
      value
  }
}

module.exports = InnerText
