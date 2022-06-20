const ElemType = require('./ElemType')

/**
 * @see https://html.spec.whatwg.org/#htmlelement
 * @abstract
 */
class HtmlType extends ElemType
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

HtmlType.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlType.defineProps([
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

HtmlType.defineProps([
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

module.exports = HtmlType
