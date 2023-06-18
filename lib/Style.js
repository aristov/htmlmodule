import window from './window.cjs'
import { AttrType } from './AttrType.js'

const sampleNode = window.document.createElement('div')

export class Style extends AttrType
{
  static nodeName = 'style'

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @return {CSSStyleDeclaration}
   */
  static get(elem, prop) {
    return elem.node.style
  }

  /**
   * @param {ElemType} elem
   * @param {string} prop
   * @param {string|{}|null} value
   */
  static set(elem, prop, value) {
    if(typeof value === 'string' || value === null) {
      sampleNode.style = value || ''
    }
    else Object.assign(sampleNode.style, value)
    elem.vnode.style = sampleNode.getAttribute('style') || null
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {*} value
   */
  static update(elem, propName, value) {
    super.update(elem, propName, value)
    sampleNode.style = ''
  }
}
