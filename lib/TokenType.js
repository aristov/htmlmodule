import { AttrType } from './AttrType.js'

export class TokenType extends AttrType
{
  static defaultValue = undefined

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {string|boolean|undefined}
   */
  static get(elem, propName) {
    const value = super.get(elem, propName)
    return value === 'true' || value !== 'false' && value
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {string|boolean|null|undefined} value
   */
  static update(elem, propName, value) {
    if(value === null || value === this.defaultValue) {
      elem.node.removeAttribute(this.nodeName)
    }
    else if(String(value) !== elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }
}
