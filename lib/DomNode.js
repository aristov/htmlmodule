import { DomEmitter } from './DomEmitter'

/**
 * @see https://www.w3.org/TR/dom/#interface-node
 * @abstract
 */
export class DomNode extends DomEmitter
{
  /**
   * @param {boolean} [keepNodes=false]
   */
  destroyChildren(keepNodes = false) {
    if(this.node.hasChildNodes()) {
      for(const child of Array.from(this.node.childNodes)) {
        const elem = child.__instance
        if(elem) {
          elem.destroy(keepNodes)
        }
        else keepNodes || child.remove()
      }
    }
  }
}
