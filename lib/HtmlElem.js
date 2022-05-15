const Dataset = require('./Dataset')
const DomElem = require('./DomElem')
const Style = require('./Style')

/**
 * @see https://html.spec.whatwg.org/#htmlelement
 * @abstract
 */
class HtmlElem extends DomElem
{
  static prefix = 'Html'

  static namespace = 'http://www.w3.org/1999/xhtml'

  /**
   * @returns {number|null}
   */
  get tabIndex() {
    return this.node.hasAttribute('tabindex') ? this.node.tabIndex : null
  }

  /**
   * @param {number|null} tabIndex
   */
  set tabIndex(tabIndex) {
    if(tabIndex === null) {
      this.node.removeAttribute('tabindex')
    }
    else this.node.tabIndex = tabIndex
  }
}

HtmlElem.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlElem.defineAttrs([
  Dataset,
  Style,
])

HtmlElem.defineProps([
  'isContentEditable',
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
  'innerText',
  'inputMode',
  'lang',
  'title',
  'translate',
], true)

module.exports = HtmlElem
