const ElemType = require('./ElemType')
const PropType = require('./PropType')

/**
 * @abstract
 */
class RoleType extends ElemType
{
  static props = {
    autofocus : 'autofocus',
    contentEditable : 'contenteditable',
    inputMode : 'inputmode',
    lang : 'lang',
    tabIndex : 'tabindex',
    translate : 'translate',
    innerText : PropType,
  }
}

module.exports = RoleType
