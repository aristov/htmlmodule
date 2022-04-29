import { AriaDisabled } from './AriaDisabled'
import { AttrType } from './AttrType'
import { DomElem } from './DomElem'

export class TabIndex extends AttrType
{
  /**
   * @param {MutationRecord} record
   */
  static onDisabled(record) {
    const elem = DomElem.get(record.target)
    if(AriaDisabled.get(elem)) {
      elem.__tabIndex = this.get(elem)
      super.remove(elem)
    }
    else super.set(elem, elem.__tabIndex)
  }

  /**
   * @param {DomElem} elem
   * @param {number} [elem.__tabIndex]
   * @param {number} value
   * todo handle set when elem.disabled === true
   */
  static set(elem, value) {
    elem.node.tabIndex = value
    if(elem.hasOwnProperty('__tabIndex')) {
      return
    }
    elem.__tabIndex = value
    elem.addAttrObserver(AriaDisabled, this.onDisabled)
  }

  /**
   * @param {DomElem} elem
   * @returns {number|null}
   */
  static get(elem) {
    return elem.node.tabIndex
  }

  /**
   * @param {DomElem} elem
   * @param {number} [elem.__tabIndex]
   */
  static remove(elem) {
    super.remove(elem)
    elem.removeAttrObserver(AriaDisabled, this.onDisabled)
    delete elem.__tabIndex
  }
}

TabIndex.onDisabled = TabIndex.onDisabled.bind(TabIndex)
