import { HtmlHyperlink } from './HtmlHyperlink'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-a-element
 */
export class HtmlA extends HtmlHyperlink
{
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

  /**
   * @param {string} download
   */
  set download(download) {
    this.node.download = download
  }

  /**
   * @returns {string}
   */
  get download() {
    return this.node.download
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
