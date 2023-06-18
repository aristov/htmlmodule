import { AttrType } from './AttrType.js'
import { BooleanType } from './BooleanType.js'
import { NumberType } from './NumberType.js'
import { TokenType } from './TokenType.js'

/**
 * @mixin
 */
export class AriaType
{
  static props = {
    activeDescendant : AttrType.define('aria-activedescendant'),
    atomic : BooleanType.define('aria-atomic', false, 'true'),
    autoComplete : TokenType.define('aria-autocomplete', 'none'),
    busy : BooleanType.define('aria-busy', false, 'true'),
    checked : TokenType.define('aria-checked'),
    colCount : NumberType.define('aria-colcount'),
    colIndex : NumberType.define('aria-colindex'),
    colSpan : NumberType.define('aria-colspan'),
    controls : AttrType.define('aria-controls'),
    current : TokenType.define('aria-current', false),
    describedBy : AttrType.define('aria-describedby'),
    details : AttrType.define('aria-details'),
    disabled : BooleanType.define('aria-disabled', false, 'true'),
    dropEffect : AttrType.define('aria-dropeffect', 'none'),
    errorMessage : AttrType.define('aria-errormessage'),
    expanded : TokenType.define('aria-expanded'),
    flowTo : AttrType.define('aria-flowto'),
    grabbed : TokenType.define('aria-grabbed'),
    hasPopup : TokenType.define('aria-haspopup', false),
    hidden : TokenType.define('aria-hidden'),
    invalid : TokenType.define('aria-invalid', false),
    keyShortcuts : AttrType.define('aria-keyshortcuts'),
    label : AttrType.define('aria-label'),
    labelledBy : AttrType.define('aria-labelledby'),
    level : NumberType.define('aria-level'),
    live : TokenType.define('aria-live', 'off'),
    modal : BooleanType.define('aria-modal', false, 'true'),
    multiLine : BooleanType.define('aria-multiline', false, 'true'),
    multiSelectable : BooleanType.define('aria-multiselectable', false, 'true'),
    orientation : TokenType.define('aria-orientation'),
    owns : AttrType.define('aria-owns'),
    placeholder : AttrType.define('aria-placeholder'),
    posInSet : NumberType.define('aria-posinset'),
    pressed : TokenType.define('aria-pressed'),
    readOnly : BooleanType.define('aria-readonly', false, 'true'),
    relevant : AttrType.define('aria-relevant', 'additions text'),
    required : BooleanType.define('aria-required', false, 'true'),
    roleDescription : AttrType.define('aria-roledescription'),
    rowCount : NumberType.define('aria-rowcount'),
    rowIndex : NumberType.define('aria-rowindex'),
    rowSpan : NumberType.define('aria-rowspan'),
    selected : TokenType.define('aria-selected'),
    setSize : NumberType.define('aria-setsize'),
    sort : TokenType.define('aria-sort', 'none'),
    valueMax : NumberType.define('aria-valuemax'),
    valueMin : NumberType.define('aria-valuemin'),
    valueNow : NumberType.define('aria-valuenow'),
    valueText : AttrType.define('aria-valuetext'),
  }
}
