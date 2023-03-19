const AttrType = require('./AttrType')
const BooleanType = require('./BooleanType')
const ElemType = require('./ElemType')
const InnerText = require('./InnerText')

/**
 * @abstract
 */
class RoleType extends ElemType
{
  static props = {
    accessKey : AttrType.define('accesskey'),
    autocapitalize : AttrType.define('autocapitalize'),
    autofocus : BooleanType.define('autofocus'),
    contentEditable : AttrType.define('contenteditable'),
    dir : AttrType.define('dir'),
    draggable : BooleanType.define('draggable'),
    enterKeyHint : AttrType.define('enterkeyhint'),
    inputMode : AttrType.define('inputmode'),
    lang : AttrType.define('lang'),
    spellcheck : BooleanType.define('spellcheck'),
    tabIndex : AttrType.define('tabindex'),
    title : AttrType.define('title'),
    translate : BooleanType.define('translate'),
    innerText : InnerText,
  }
}

module.exports = RoleType
