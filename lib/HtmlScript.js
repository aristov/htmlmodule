import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-script-element
 */
export class HtmlScript extends HtmlElem
{
  /**
   * @param {string} src
   */
  set src(src) {
    this.node.src = src
  }

  /**
   * @returns {string}
   */
  get src() {
    return this.node.src
  }

  /**
   * @param {string} type
   */
  set type(type) {
    this.node.type = type
  }

  /**
   * @returns {string}
   */
  get type() {
    return this.node.type
  }

  /**
   * @param {string} noModule
   */
  set noModule(noModule) {
    this.node.noModule = noModule
  }

  /**
   * @returns {string}
   */
  get noModule() {
    return this.node.noModule
  }

  /**
   * @param {string} charset
   */
  set charset(charset) {
    this.node.charset = charset
  }

  /**
   * @returns {string}
   */
  get charset() {
    return this.node.charset
  }

  /**
   * @param {boolean} async
   */
  set async(async) {
    this.node.async = async
  }

  /**
   * @returns {boolean}
   */
  get async() {
    return this.node.async
  }

  /**
   * @param {boolean} defer
   */
  set defer(defer) {
    this.node.defer = defer
  }

  /**
   * @returns {boolean}
   */
  get defer() {
    return this.node.defer
  }

  /**
   * @param {string} crossOrigin
   */
  set crossOrigin(crossOrigin) {
    this.node.crossOrigin = crossOrigin
  }

  /**
   * @returns {string}
   */
  get crossOrigin() {
    return this.node.crossOrigin
  }

  /**
   * @param {string} integrity
   */
  set integrity(integrity) {
    this.node.integrity = integrity
  }

  /**
   * @returns {string}
   */
  get integrity() {
    return this.node.integrity
  }

  /**
   * @param {string} referrerPolicy
   */
  set referrerPolicy(referrerPolicy) {
    this.node.referrerPolicy = referrerPolicy
  }

  /**
   * @returns {string}
   */
  get referrerPolicy() {
    return this.node.referrerPolicy
  }

  /**
   * @param {string} text
   */
  set text(text) {
    this.node.text = text
  }

  /**
   * @returns {string}
   */
  get text() {
    return this.node.text
  }

  /**
   * @param {string} nonce
   */
  set nonce(nonce) {
    this.node.nonce = nonce
  }

  /**
   * @returns {string}
   */
  get nonce() {
    return this.node.nonce
  }
}
