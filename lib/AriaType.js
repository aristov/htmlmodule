const AttrType = require('./AttrType')
const BooleanType = require('./BooleanType')
const ListType = require('./ListType')
const TokenType = require('./TokenType')

/**
 * @mixin
 */
class AriaType
{
  static props = {
    activeDescendant : AttrType.define('aria-activedescendant'),
    atomic : BooleanType.define('aria-atomic'),
    autoComplete : TokenType.define('aria-autocomplete', 'none'),
    busy : BooleanType.define('aria-busy'),
    checked : TokenType.define('aria-checked'),
    colCount : AttrType.define('aria-colcount'),
    colIndex : AttrType.define('aria-colindex'),
    colSpan : AttrType.define('aria-colspan'),
    controls : ListType.define('aria-controls'),
    current : TokenType.define('aria-current', false),
    describedBy : ListType.define('aria-describedby'),
    details : AttrType.define('aria-details'),
    disabled : BooleanType.define('aria-disabled'),
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
    level : AttrType.define('aria-level'),
    live : TokenType.define('aria-live', 'off'),
    modal : BooleanType.define('aria-modal'),
    multiLine : BooleanType.define('aria-multiline'),
    multiSelectable : BooleanType.define('aria-multiselectable'),
    orientation : TokenType.define('aria-orientation'),
    owns : ListType.define('aria-owns'),
    placeholder : AttrType.define('aria-placeholder'),
    posInSet : AttrType.define('aria-posinset'),
    pressed : TokenType.define('aria-pressed'),
    readOnly : BooleanType.define('aria-readonly'),
    relevant : ListType.define('aria-relevant', ['additions', 'text']),
    required : BooleanType.define('aria-required'),
    roleDescription : AttrType.define('aria-roledescription'),
    rowCount : AttrType.define('aria-rowcount'),
    rowIndex : AttrType.define('aria-rowindex'),
    rowSpan : AttrType.define('aria-rowspan'),
    selected : TokenType.define('aria-selected'),
    setSize : AttrType.define('aria-setsize'),
    sort : TokenType.define('aria-sort', 'none'),
    valueMax : AttrType.define('aria-valuemax'),
    valueMin : AttrType.define('aria-valuemin'),
    valueNow : AttrType.define('aria-valuenow'),
    valueText : AttrType.define('aria-valuetext'),
  }
}

module.exports = AriaType
