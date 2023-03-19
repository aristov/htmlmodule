const AttrType = require('./AttrType')
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
    autofocus : AttrType.define('autofocus'),
    contentEditable : AttrType.define('contenteditable'),
    dir : AttrType.define('dir'),
    draggable : AttrType.define('draggable'),
    enterKeyHint : AttrType.define('enterkeyhint'),
    inputMode : AttrType.define('inputmode'),
    lang : AttrType.define('lang'),
    spellcheck : AttrType.define('spellcheck'),
    tabIndex : AttrType.define('tabindex'),
    title : AttrType.define('title'),
    translate : AttrType.define('translate'),
    innerText : InnerText,
  }
}

module.exports = RoleType
