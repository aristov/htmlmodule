import window from 'window'
import { DomNode } from './DomNode'

const { DocumentFragment } = window

/**
 * @see https://www.w3.org/TR/dom/#interface-documentfragment
 */
export class DomFragment extends DomNode
{
  /**
   * @param {{}} init
   * @param {DocumentFragment} [init.node]
   */
  create(init) {
    if(!init.node) {
      init.node = new DocumentFragment
    }
    super.create(init)
    DomFragment.__storage.delete(this.node)
  }
}
