const ElemType = require('./ElemType')
const PropType = require('./PropType')

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
    innerText : PropType,
  }
}

module.exports = RoleType
