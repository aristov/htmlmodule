import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-img-element
 */
export class HtmlImg extends HtmlElem
{
  /**
   * @returns {Promise}
   */
  decode() {
    return this.node.decode()
  }

  /**
   * @param {string} alt
   */
  set alt(alt) {
    this.node.alt = alt
  }

  /**
   * @returns {string}
   */
  get alt() {
    return this.node.alt
  }

  /**
   * @returns {boolean}
   */
  get complete() {
    return this.node.complete
  }

  /**
   * @returns {string}
   */
  get currentSrc() {
    return this.node.currentSrc
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
   * @param {string} srcset
   */
  set srcset(srcset) {
    this.node.srcset = srcset
  }

  /**
   * @returns {string}
   */
  get srcset() {
    return this.node.srcset
  }

  /**
   * @param {string} sizes
   */
  set sizes(sizes) {
    this.node.sizes = sizes
  }

  /**
   * @returns {string}
   */
  get sizes() {
    return this.node.sizes
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
   * @param {string} useMap
   */
  set useMap(useMap) {
    this.node.useMap = useMap
  }

  /**
   * @returns {string}
   */
  get useMap() {
    return this.node.useMap
  }

  /**
   * @param {boolean} isMap
   */
  set isMap(isMap) {
    this.node.isMap = isMap
  }

  /**
   * @returns {boolean}
   */
  get isMap() {
    return this.node.isMap
  }

  /**
   * @returns {number}
   */
  get naturalWidth() {
    return this.node.naturalWidth
  }

  /**
   * @returns {number}
   */
  get naturalHeight() {
    return this.node.naturalHeight
  }

  /**
   * @param {number} height
   */
  set height(height) {
    this.node.height = height
  }

  /**
   * @returns {number}
   */
  get height() {
    return this.node.height
  }

  /**
   * @param {number} width
   */
  set width(width) {
    this.node.width = width
  }

  /**
   * @returns {number}
   */
  get width() {
    return this.node.width
  }
}
