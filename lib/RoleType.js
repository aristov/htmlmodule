const ElemType = require('./ElemType')
const PropType = require('./PropType')

/**
 * @abstract
 */
class RoleType extends ElemType
{
  static props = {
    accessKey : 'accesskey',
    autofocus : 'autofocus',
    contentEditable : 'contenteditable',
    dir : 'dir',
    inputMode : 'inputmode',
    lang : 'lang',
    tabIndex : 'tabindex',
    title : 'title',
    translate : 'translate',
    innerText : PropType,
  }
}

module.exports = RoleType
