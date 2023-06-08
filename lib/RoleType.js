import { AttrType } from './AttrType.js'
import { BooleanType } from './BooleanType.js'
import { NumberType } from './NumberType.js'
import { ElemType } from './ElemType.js'
import { InnerText } from './InnerText.js'

/**
 * @abstract
 */
export class RoleType extends ElemType
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
    tabIndex : NumberType.define('tabindex', NaN),
    title : AttrType.define('title'),
    translate : BooleanType.define('translate'),
    innerText : InnerText,
  }
}
