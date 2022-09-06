const ElemType = require('./ElemType')

/**
 * @abstract
 */
class HtmlType extends ElemType
{
  static methods = [
    'blur',
    'click',
    'focus',
  ]

  static props = {
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
  }
}

module.exports = HtmlType
