import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-link-element
 */
export class HtmlLink extends HtmlElem
{
  /**
   * @param {string} href
   */
  set href(href) {
    this.node.href = href
  }

  /**
   * @returns {string}
   */
  get href() {
    return this.node.href
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
   * @param {string} rel
   */
  set rel(rel) {
    this.node.rel = rel
  }

  /**
   * @returns {string}
   */
  get rel() {
    return this.node.rel
  }


  /**
   * @param {string} rev
   */
  set rev(rev) {
    this.node.rev = rev
  }

  /**
   * @returns {string}
   */
  get rev() {
    return this.node.rev
  }

  /**
   * @returns {DOMTokenList}
   */
  get relList() {
    return this.node.relList
  }

  /**
   * @param {string} media
   */
  set media(media) {
    this.node.media = media
  }

  /**
   * @returns {string}
   */
  get media() {
    return this.node.media
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

  /**
   * @param {string} hreflang
   */
  set hreflang(hreflang) {
    this.node.hreflang = hreflang
  }

  /**
   * @returns {string}
   */
  get hreflang() {
    return this.node.hreflang
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
   * @returns {string}
   */
  get sizes() {
    return this.node.sizes
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
}
