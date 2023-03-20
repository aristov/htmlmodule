const AttrType = require('./AttrType')
const BooleanType = require('./BooleanType')
const NumberType = require('./NumberType')
const ListType = require('./ListType')
const TokenType = require('./TokenType')

/**
 * @mixin
 */
class AriaType
{
  static props = {
    activeDescendant : AttrType.define('aria-activedescendant'),
    atomic : BooleanType.define('aria-atomic', 'true'),
    autoComplete : TokenType.define('aria-autocomplete', 'none'),
    busy : BooleanType.define('aria-busy', 'true'),
    checked : TokenType.define('aria-checked'),
    colCount : NumberType.define('aria-colcount'),
    colIndex : NumberType.define('aria-colindex'),
    colSpan : NumberType.define('aria-colspan'),
    controls : ListType.define('aria-controls'),
    current : TokenType.define('aria-current', false),
    describedBy : ListType.define('aria-describedby'),
    details : AttrType.define('aria-details'),
    disabled : BooleanType.define('aria-disabled', 'true'),
    dropEffect : ListType.define('aria-dropeffect', 'none'),
    errorMessage : AttrType.define('aria-errormessage'),
    expanded : TokenType.define('aria-expanded'),
    flowTo : ListType.define('aria-flowto'),
    grabbed : TokenType.define('aria-grabbed'),
    hasPopup : TokenType.define('aria-haspopup', false),
    hidden : TokenType.define('aria-hidden'),
    invalid : TokenType.define('aria-invalid', false),
    keyShortcuts : AttrType.define('aria-keyshortcuts'),
    label : AttrType.define('aria-label'),
    labelledBy : ListType.define('aria-labelledby'),
    level : NumberType.define('aria-level'),
    live : TokenType.define('aria-live', 'off'),
    modal : BooleanType.define('aria-modal', 'true'),
    multiLine : BooleanType.define('aria-multiline', 'true'),
    multiSelectable : BooleanType.define('aria-multiselectable', 'true'),
    orientation : TokenType.define('aria-orientation'),
    owns : ListType.define('aria-owns'),
    placeholder : AttrType.define('aria-placeholder'),
    posInSet : NumberType.define('aria-posinset'),
    pressed : TokenType.define('aria-pressed'),
    readOnly : BooleanType.define('aria-readonly', 'true'),
    relevant : ListType.define('aria-relevant', ['additions', 'text']),
    required : BooleanType.define('aria-required', 'true'),
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

module.exports = AriaType
