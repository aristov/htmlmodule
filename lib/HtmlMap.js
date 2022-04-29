import { HtmlArea } from './HtmlArea'
import { HtmlElem } from './HtmlElem'
import { HtmlImg } from './HtmlImg'
import { HtmlObject } from './HtmlObject'

const _map = Array.prototype.map

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-map-element
 */
export class HtmlMap extends HtmlElem
{
  /**
   * @returns {HtmlArea[]}
   */
  get areas() {
    return _map.call(this.node.areas, node => HtmlArea.get(node))
  }

  /**
   * @returns {array.HtmlImg|array.HtmlObject}
   */
  get images() {
    return _map.call(this.node.images, node => {
      return node.localName === 'img'?
        HtmlImg.get(node) :
        HtmlObject.get(node)
    })
  }

  /**
   * @param {string} name
   */
  set name(name) {
    this.node.name = name
  }

  /**
   * @returns {string}
   */
  get name() {
    return this.node.name
  }
}
