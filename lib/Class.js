import { AttrType } from './AttrType'

export class Class extends AttrType
{
  /**
   * @param {DomElem} elem
   * @param {Proxy<DOMTokenList>} [elem.__class]
   * @return {{}}
   */
  static get(elem) {
    return elem.__class || (elem.__class = new Proxy(elem.node.classList, handler))
  }

  /**
   * @param {DomElem} elem
   * @return {boolean}
   */
  static has(elem) {
    return true
  }

  /**
   * @param {DomElem} elem
   * @param {[]|{}|any} value
   */
  static set(elem, value) {
    if(Array.isArray(value)) {
      elem.node.classList.add(...value)
    }
    else if(value.constructor === Object) {
      for(const token of Object.keys(value)) {
        elem.node.classList.toggle(token, !!value[token])
      }
    }
    else elem.node.classList = value
  }
}

const handler = {
  /**
   * @param {DOMTokenList} target
   * @param {string|Symbol} p
   * @return {boolean|function}
   */
  get(target, p) {
    return p === Symbol.toPrimitive?
      hint => hint === 'number'? target.length : target.value :
      target.contains(p)
  },
  /**
   * @param {DOMTokenList} target
   * @param {string|Symbol} p
   * @param {boolean} value
   * @return {boolean}
   */
  set(target, p, value) {
    return target.toggle(p, value) || true
  },
  /**
   * @param {DOMTokenList} target
   * @param {string|Symbol} p
   * @return {boolean}
   */
  has(target, p) {
    return target.contains(p)
  },
  /**
   * @param {DOMTokenList} target
   * @param {string|Symbol} p
   * @return {true}
   */
  deleteProperty(target, p) {
    return !target.remove(p)
  },
  /**
   * @param {DOMTokenList} target
   * @return {string[]}
   */
  ownKeys(target) {
    return Array.from(target.values())
  },
  /**
   * @return {PropertyDescriptor}
   */
  getOwnPropertyDescriptor() {
    return {
      configurable : true,
      enumerable : true,
    }
  },
}
