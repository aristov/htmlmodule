const ElemType = require('./ElemType')

/**
 * @see https://html.spec.whatwg.org/#htmlelement
 */
class HtmlType extends ElemType
{
  static class = undefined

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
    this.children = null
    this.node.innerText = innerText
  }
}

HtmlType.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlType.defineProps({
  accessKey : 'accesskey',
  autofocus : 'autofocus',
  contentEditable : 'contenteditable',
  dir : 'dir',
  hidden : 'hidden',
  inputMode : 'inputmode',
  lang : 'lang',
  tabIndex : 'tabindex',
  title : 'title',
  translate : 'translate',
})

module.exports = HtmlType
