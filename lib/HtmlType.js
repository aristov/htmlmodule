const ElemType = require('./ElemType')
const PropType = require('./PropType')

/**
 * @abstract
 */
class HtmlType extends ElemType
{
  static props = {
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
    innerText : PropType,
  }
}

module.exports = HtmlType
