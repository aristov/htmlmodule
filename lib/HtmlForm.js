import { HtmlElem } from './HtmlElem'

const { map } = Array.prototype

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-form-element
 */
export class HtmlForm extends HtmlElem
{
  /**
   * @returns {boolean}
   */
  checkValidity() {
    return this.node.checkValidity()
  }

  /**
   * @returns {boolean}
   */
  reportValidity() {
    return this.node.reportValidity()
  }

  /**
   * Reset the form
   */
  reset() {
    this.node.reset()
  }

  /**
   * Submit the form
   */
  submit() {
    this.node.submit()
  }

  /**
   * @param {string} acceptCharset
   */
  set acceptCharset(acceptCharset) {
    this.node.acceptCharset = acceptCharset
  }

  /**
   * @returns {string}
   */
  get acceptCharset() {
    return this.node.acceptCharset
  }

  /**
   * @param {string} action
   */
  set action(action) {
    this.node.action = action
  }

  /**
   * @return {string}
   */
  get action() {
    return this.node.action
  }

  /**
   * @param {string} autocomplete
   */
  set autocomplete(autocomplete) {
    this.node.autocomplete = autocomplete
  }

  /**
   * @returns {string}
   */
  get autocomplete() {
    return this.node.autocomplete
  }

  /**
   * @returns {HtmlElem[]}
   */
  get elements() {
    return map.call(this.node.elements, node => HtmlElem.get(node))
  }

  /**
   * @param {string} enctype
   */
  set enctype(enctype) {
    this.node.enctype = enctype
  }

  /**
   * @returns {string}
   */
  get enctype() {
    return this.node.enctype
  }

  /**
   * @param {string} method
   */
  set method(method) {
    this.node.method = method
  }

  /**
   * @returns {string}
   */
  get method() {
    return this.node.method
  }

  /**
   * @param {string} name
   */
  set name(name) {
    this.node.name = name
  }

  /**
   * @returns {string}
   */
  get name() {
    return this.node.name
  }

  /**
   * @param {boolean} noValidate
   */
  set noValidate(noValidate) {
    this.node.noValidate = noValidate
  }

  /**
   * @returns {boolean}
   */
  get noValidate() {
    return this.node.noValidate
  }

  /**
   * @param {string} target
   */
  set target(target) {
    this.node.target = target
  }

  /**
   * @returns {string}
   */
  get target() {
    return this.node.target
  }
}
