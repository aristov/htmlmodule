import { PropType } from './PropType.js'

export class InnerHTML extends PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*[]|*} value
   */
  static set(elem, name, value) {
    elem.vnode[name] = Array.isArray(value) ?
      value.filter(PropType.filter).join('') :
      value
  }
}
