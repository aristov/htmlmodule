/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 */
export class AttrType
{
  /**
   * @param {constructor} constructor (DomElem)
   * @param {prototype} constructor.prototype
   * @param {string|constructor} [attr]
   * @param {string} [attr.attrName]
   * @override
   */
  static define(constructor, attr = this) {
    const name = typeof attr === 'string'? attr : attr.attrName
    Object.defineProperty(constructor.prototype, name, {
      configurable : true,
      /**
       * @this DomElem
       * @return {*}
       */
      get() {
        return this.getAttr(attr)
      },
      /**
       * @this DomElem
       * @param value
       */
      set(value) {
        this.setAttr(attr, value)
      },
    })
  }

  /**
   * @param {DomElem} elem
   * @returns {string|*}
   */
  static get(elem) {
    return elem.node.getAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return elem.node.hasAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   */
  static remove(elem) {
    elem.node.removeAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   * @param {string|*} value
   */
  static set(elem, value) {
    elem.node.setAttribute(this.localName, value)
  }

  /**
   * @param {DomElem} elem
   * @param {*} value
   * @returns {boolean}
   */
  static removeOnValue(elem, value) {
    return value === null && !this.remove(elem)
  }

  /**
   * @returns {string}
   * @override
   */
  static get attrName() {
    return this.name[0].toLowerCase() + this.name.slice(1)
  }

  /**
   * @returns {null|*}
   */
  static get defaultValue() {
    return null
  }
}
