import { HtmlMedia } from './HtmlMedia'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-video-element
 */
export class HtmlVideo extends HtmlMedia
{
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
   * @returns {number}
   */
  get videoWidth() {
    return this.node.videoWidth
  }

  /**
   * @returns {number}
   */
  get videoHeight() {
    return this.node.videoHeight
  }

  /**
   * @param {string} poster
   */
  set poster(poster) {
    this.node.poster = poster
  }

  /**
   * @returns {string}
   */
  get poster() {
    return this.node.poster
  }
}
