import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-track-element
 */
export class HtmlTrack extends HtmlElem
{
  /**
   * @param {string} kind
   */
  set kind(kind) {
    this.node.kind = kind
  }

  /**
   * @returns {string}
   */
  get kind() {
    return this.node.kind
  }

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
   * @param {string} srclang
   */
  set srclang(srclang) {
    this.node.srclang = srclang
  }

  /**
   * @returns {string}
   */
  get srclang() {
    return this.node.srclang
  }

  /**
   * @param {string} label
   */
  set label(label) {
    this.node.label = label
  }

  /**
   * @returns {string}
   */
  get label() {
    return this.node.label
  }

  /**
   * @param {boolean} value
   */
  set default(value) {
    this.node.default = value
  }

  /**
   * @returns {boolean}
   */
  get default() {
    return this.node.default
  }

  /**
   * @returns {number}
   */
  get readyState() {
    return this.node.readyState
  }

  /**
   * @returns {TextTrack}
   */
  get track() {
    return this.node.track
  }
}
