const RoleType = require('./RoleType')
const BooleanType = require('./BooleanType')
const NumberType = require('./NumberType')
const TokenType = require('./TokenType')

exports.RoleAlert = class RoleAlert extends RoleType
{
  static role = 'alert'
  static props = {
    live : TokenType.define('aria-live', 'assertive'),
    atomic : BooleanType.define('aria-atomic', true),
  }
}

exports.RoleAlertDialog = class RoleAlertDialog extends RoleType
{
  static role = 'alertdialog'
}

exports.RoleApplication = class RoleApplication extends RoleType
{
  static role = 'application'
}

exports.RoleArticle = class RoleArticle extends RoleType
{
  static role = 'article'
}

exports.RoleBanner = class RoleBanner extends RoleType
{
  static role = 'banner'
}

exports.RoleBlockQuote = class RoleBlockQuote extends RoleType
{
  static role = 'blockquote'
}

exports.RoleButton = class RoleButton extends RoleType
{
  static role = 'button'
}

exports.RoleCaption = class RoleCaption extends RoleType
{
  static role = 'caption'
}

exports.RoleCell = class RoleCell extends RoleType
{
  static role = 'cell'
}

exports.RoleCheckBox = class RoleCheckBox extends RoleType
{
  static role = 'checkbox'
}

exports.RoleCode = class RoleCode extends RoleType
{
  static role = 'code'
}

exports.RoleColumnHeader = class RoleColumnHeader extends RoleType
{
  static role = 'columnheader'
}

exports.RoleComboBox = class RoleComboBox extends RoleType
{
  static role = 'combobox'
  static props = {
    hasPopup : TokenType.define('aria-haspopup', 'listbox'),
  }
}

exports.RoleComplementary = class RoleComplementary extends RoleType
{
  static role = 'complementary'
}

exports.RoleContentInfo = class RoleContentInfo extends RoleType
{
  static role = 'contentinfo'
}

exports.RoleDefinition = class RoleDefinition extends RoleType
{
  static role = 'definition'
}

exports.RoleDeletion = class RoleDeletion extends RoleType
{
  static role = 'deletion'
}

exports.RoleDialog = class RoleDialog extends RoleType
{
  static role = 'dialog'
}

/**
 * @deprecated
 */
exports.RoleDirectory = class RoleDirectory extends RoleType
{
  static role = 'directory'
}

exports.RoleDocument = class RoleDocument extends RoleType
{
  static role = 'document'
}

exports.RoleEmphasis = class RoleEmphasis extends RoleType
{
  static role = 'emphasis'
}

exports.RoleFeed = class RoleFeed extends RoleType
{
  static role = 'feed'
}

exports.RoleFigure = class RoleFigure extends RoleType
{
  static role = 'figure'
}

exports.RoleForm = class RoleForm extends RoleType
{
  static role = 'form'
}

exports.RoleGeneric = class RoleGeneric extends RoleType
{
  static role = 'generic'
}

exports.RoleGrid = class RoleGrid extends RoleType
{
  static role = 'grid'
}

exports.RoleGridCell = class RoleGridCell extends RoleType
{
  static role = 'gridcell'
}

exports.RoleGroup = class RoleGroup extends RoleType
{
  static role = 'group'
}

exports.RoleHeading = class RoleHeading extends RoleType
{
  static role = 'heading'
}

exports.RoleImg = class RoleImg extends RoleType
{
  static role = 'img'
}

exports.RoleInsertion = class RoleInsertion extends RoleType
{
  static role = 'insertion'
}

exports.RoleLink = class RoleLink extends RoleType
{
  static role = 'link'
}

exports.RoleList = class RoleList extends RoleType
{
  static role = 'list'
}

exports.RoleListBox = class RoleListBox extends RoleType
{
  static role = 'listbox'
  static props = {
    orientation : TokenType.define('aria-orientation', 'vertical'),
  }
}

exports.RoleListItem = class RoleListItem extends RoleType
{
  static role = 'listitem'
}

exports.RoleLog = class RoleLog extends RoleType
{
  static role = 'log'
  static props = {
    live : TokenType.define('aria-live', 'polite'),
  }
}

exports.RoleMain = class RoleMain extends RoleType
{
  static role = 'main'
}

exports.RoleMarquee = class RoleMarquee extends RoleType
{
  static role = 'marquee'
}

exports.RoleMath = class RoleMath extends RoleType
{
  static role = 'math'
}

exports.RoleMenu = class RoleMenu extends RoleType
{
  static role = 'menu'
  static props = {
    orientation : TokenType.define('aria-orientation', 'vertical'),
  }
}

exports.RoleMenuBar = class RoleMenuBar extends RoleType
{
  static role = 'menubar'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
  }
}

exports.RoleMenuItem = class RoleMenuItem extends RoleType
{
  static role = 'menuitem'
}

exports.RoleMenuItemCheckBox = class RoleMenuItemCheckBox extends RoleType
{
  static role = 'menuitemcheckbox'
}

exports.RoleMenuItemRadio = class RoleMenuItemRadio extends RoleType
{
  static role = 'menuitemradio'
}

exports.RoleMeter = class RoleMeter extends RoleType
{
  static role = 'meter'
  static props = {
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

exports.RoleNavigation = class RoleNavigation extends RoleType
{
  static role = 'navigation'
}

exports.RoleNone = class RoleNone extends RoleType
{
  static role = 'none'
}

exports.RoleNote = class RoleNote extends RoleType
{
  static role = 'note'
}

exports.RoleOption = class RoleOption extends RoleType
{
  static role = 'option'
  static props = {
    selected : BooleanType.define(false),
  }
}

exports.RoleParagraph = class RoleParagraph extends RoleType
{
  static role = 'paragraph'
}

exports.RolePresentation = class RolePresentation extends RoleType
{
  static role = 'presentation'
}

exports.RoleProgressBar = class RoleProgressBar extends RoleType
{
  static role = 'progressbar'
  static props = {
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

exports.RoleRadio = class RoleRadio extends RoleType
{
  static role = 'radio'
}

exports.RoleRadioGroup = class RoleRadioGroup extends RoleType
{
  static role = 'radiogroup'
}

exports.RoleRegion = class RoleRegion extends RoleType
{
  static role = 'region'
}

exports.RoleRow = class RoleRow extends RoleType
{
  static role = 'row'
}

exports.RoleRowGroup = class RoleRowGroup extends RoleType
{
  static role = 'rowgroup'
}

exports.RoleRowHeader = class RoleRowHeader extends RoleType
{
  static role = 'rowheader'
}

exports.RoleScrollBar = class RoleScrollBar extends RoleType
{
  static role = 'scrollbar'
  static props = {
    orientation : TokenType.define('aria-orientation', 'vertical'),
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

exports.RoleSearch = class RoleSearch extends RoleType
{
  static role = 'search'
}

exports.RoleSearchBox = class RoleSearchBox extends RoleType
{
  static role = 'searchbox'
}

exports.RoleSectionHead = class RoleSectionHead extends RoleType
{
  static role = 'sectionhead'
}

exports.RoleSeparator = class RoleSeparator extends RoleType
{
  static role = 'separator'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

exports.RoleSlider = class RoleSlider extends RoleType
{
  static role = 'slider'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

exports.RoleSpinButton = class RoleSpinButton extends RoleType
{
  static role = 'spinbutton'
  static props = {
    valueMin : NumberType.define('aria-valuemin', -Infinity),
    valueMax : NumberType.define('aria-valuemax', Infinity),
    valueNow : NumberType.define('aria-valuenow', 0),
  }
}

exports.RoleStatus = class RoleStatus extends RoleType
{
  static role = 'status'
  static props = {
    live : TokenType.define('aria-live', 'polite'),
    atomic : BooleanType.define('aria-atomic', true),
  }
}

exports.RoleStrong = class RoleStrong extends RoleType
{
  static role = 'strong'
}

exports.RoleSubscript = class RoleSubscript extends RoleType
{
  static role = 'subscript'
}

exports.RoleSuperscript = class RoleSuperscript extends RoleType
{
  static role = 'superscript'
}

exports.RoleSwitch = class RoleSwitch extends RoleType
{
  static role = 'switch'
}

exports.RoleTab = class RoleTab extends RoleType
{
  static role = 'tab'
  static props = {
    selected : BooleanType.define(false),
  }
}

exports.RoleTabList = class RoleTabList extends RoleType
{
  static role = 'tablist'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
  }
}

exports.RoleTabPanel = class RoleTabPanel extends RoleType
{
  static role = 'tabpanel'
}

exports.RoleTable = class RoleTable extends RoleType
{
  static role = 'table'
}

exports.RoleTerm = class RoleTerm extends RoleType
{
  static role = 'term'
}

exports.RoleTextBox = class RoleTextBox extends RoleType
{
  static role = 'textbox'
}

exports.RoleTime = class RoleTime extends RoleType
{
  static role = 'time'
}

exports.RoleTimer = class RoleTimer extends RoleType
{
  static role = 'timer'
}

exports.RoleToolBar = class RoleToolBar extends RoleType
{
  static role = 'toolbar'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
  }
}

exports.RoleToolTip = class RoleToolTip extends RoleType
{
  static role = 'tooltip'
}

exports.RoleTree = class RoleTree extends RoleType
{
  static role = 'tree'
  static props = {
    orientation : TokenType.define('aria-orientation', 'vertical'),
  }
}

exports.RoleTreeGrid = class RoleTreeGrid extends RoleType
{
  static role = 'treegrid'
}

exports.RoleTreeItem = class RoleTreeItem extends RoleType
{
  static role = 'treeitem'
}
