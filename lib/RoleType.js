const ElemType = require('./ElemType')
const InnerText = require('./InnerText')

/**
 * @abstract
 */
class RoleType extends ElemType
{
  static props = {
    accessKey : 'accesskey',
    autocapitalize : 'autocapitalize',
    autofocus : 'autofocus',
    contentEditable : 'contenteditable',
    dir : 'dir',
    draggable : 'draggable',
    enterKeyHint : 'enterkeyhint',
    inputMode : 'inputmode',
    lang : 'lang',
    spellcheck : 'spellcheck',
    tabIndex : 'tabindex',
    title : 'title',
    translate : 'translate',
    innerText : InnerText,
  }
}

module.exports = RoleType
