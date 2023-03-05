const ElemType = require('./ElemType')
const InnerText = require('./InnerText')

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
    innerText : InnerText,
  }
}

module.exports = HtmlType
