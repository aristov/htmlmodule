const DomNode = require('./DomNode')

/**
 * @see https://html.spec.whatwg.org/#htmlelement
 * @abstract
 */
class HtmlElem extends DomNode
{
  static prefix = 'Html'

  static namespace = 'http://www.w3.org/1999/xhtml'

  /**
   * @return {string}
   */
  get innerText() {
    return this.node.innerText
  }

  /**
   * @param {string|null} innerText
   */
  set innerText(innerText) {
    this.node.innerText = innerText
  }
}

HtmlElem.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlElem.defineProps([
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

HtmlElem.defineProps([
  'accessKey',
  'autofocus',
  'contentEditable',
  'dir',
  'hidden',
  'inputMode',
  'lang',
  'tabIndex',
  'title',
  'translate',
], true)

module.exports = HtmlElem
