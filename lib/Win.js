import window from 'window'
import { DomEmitter } from './DomEmitter'
import { DomDoc } from './DomDoc'

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-window-object
 */
export class Win extends DomEmitter
{
  /**
   * @returns {Window}
   */
  createNode() {
    return window
  }

  /**
   * @param {boolean} [keepDom=false]
   */
  destroy(keepDom = false) {
    this.doc.destroy(keepDom)
    super.destroy()
  }

  /**
   * @returns {DomDoc}
   */
  get doc() {
    return this.constructor.DomDoc.get(this.node.document)
  }
}

DomEmitter.Win = Win
