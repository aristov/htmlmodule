const ElemType = require('./ElemType')

/**
 * @abstract
 */
class HtmlType extends ElemType
{
  static class = undefined
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
  innerText : null,
  inputMode : 'inputmode',
  lang : 'lang',
  tabIndex : 'tabindex',
  title : 'title',
  translate : 'translate',
})

module.exports = HtmlType
