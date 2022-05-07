import window from 'window'
import { DomNode } from './DomNode.js'

const { DocumentFragment } = window

/**
 * @see https://www.w3.org/TR/dom/#interface-documentfragment
 */
export class DomFragment extends DomNode
{
  /**
   * @returns {DocumentFragment}
   */
  createNode() {
    return new DocumentFragment
  }
}
