import { HtmlElem } from './HtmlElem'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-canvas-element
 */
export class HtmlCanvas extends HtmlElem
{
  /**
   * @param {string} contextId
   * @param {*} args
   * @returns {*|CanvasRenderingContext2D|WebGLRenderingContext}
   */
  getContext(contextId, ...args) {
    return this.node.getContext(contextId, ...args)
  }

  /**
   * @param {string} contextId
   * @param {*} args
   * @returns {boolean}
   */
  probablySupportsContext(contextId, ...args) {
    return this.node.probablySupportsContext(contextId, ...args)
  }

  /**
   * @param {string} type
   * @param {*} args
   * @returns {string}
   */
  toDataURL(type, ...args) {
    return this.node.toDataURL(type, ...args)
  }

  /**
   * @param {function} _callback
   * @param {string} type
   * @param {*} args
   */
  toBlob(_callback, type, ...args) {
    this.node.toBlob(_callback, type, ...args)
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
}
