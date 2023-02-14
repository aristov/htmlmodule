const ElemType = require('./ElemType')
const PropType = require('./PropType')

/**
 * @abstract
 */
class HtmlType extends ElemType
{
  static props = {
    accessKey : 'accesskey',
    autocapitalize : 'autocapitalize',
    autofocus : 'autofocus',
    contentEditable : 'contenteditable',
    dir : 'dir',
    draggable : 'draggable',
    enterKeyHint : 'enterkeyhint',
    hidden : 'hidden',
    inputMode : 'inputmode',
    lang : 'lang',
    spellcheck : 'spellcheck',
    tabIndex : 'tabindex',
    title : 'title',
    translate : 'translate',
    innerText : PropType,
  }
}

module.exports = HtmlType
