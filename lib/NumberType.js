import { AttrType } from './AttrType.js'

export class NumberType extends AttrType
{
  static defaultValue = NaN

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {number}
   */
  static get(elem, propName) {
    const value = elem.node.getAttribute(this.nodeName)
    return value === null ?
      this.defaultValue :
      +value
  }
}
