import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-source-element
 */
export class HtmlSource extends HtmlElem
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
}
