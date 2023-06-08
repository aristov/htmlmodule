import { RoleType } from './RoleType.js'
import { BooleanType } from './BooleanType.js'
import { NumberType } from './NumberType.js'
import { TokenType } from './TokenType.js'

export class RoleAlert extends RoleType
{
  static role = 'alert'
  static props = {
    live : TokenType.define('aria-live', 'assertive'),
    atomic : BooleanType.define('aria-atomic', true),
  }
}

export class RoleAlertDialog extends RoleType
{
  static role = 'alertdialog'
}

export class RoleApplication extends RoleType
{
  static role = 'application'
}

export class RoleArticle extends RoleType
{
  static role = 'article'
}

export class RoleBanner extends RoleType
{
  static role = 'banner'
}

export class RoleBlockQuote extends RoleType
{
  static role = 'blockquote'
}

export class RoleButton extends RoleType
{
  static role = 'button'
}

export class RoleCaption extends RoleType
{
  static role = 'caption'
}

export class RoleCell extends RoleType
{
  static role = 'cell'
}

export class RoleCheckBox extends RoleType
{
  static role = 'checkbox'
}

export class RoleCode extends RoleType
{
  static role = 'code'
}

export class RoleColumnHeader extends RoleType
{
  static role = 'columnheader'
}

export class RoleComboBox extends RoleType
{
  static role = 'combobox'
  static props = {
    hasPopup : TokenType.define('aria-haspopup', 'listbox'),
  }
}

export class RoleComplementary extends RoleType
{
  static role = 'complementary'
}

export class RoleContentInfo extends RoleType
{
  static role = 'contentinfo'
}

export class RoleDefinition extends RoleType
{
  static role = 'definition'
}

export class RoleDeletion extends RoleType
{
  static role = 'deletion'
}

export class RoleDialog extends RoleType
{
  static role = 'dialog'
}

/**
 * @deprecated
 */
export class RoleDirectory extends RoleType
{
  static role = 'directory'
}

export class RoleDocument extends RoleType
{
  static role = 'document'
}

export class RoleEmphasis extends RoleType
{
  static role = 'emphasis'
}

export class RoleFeed extends RoleType
{
  static role = 'feed'
}

export class RoleFigure extends RoleType
{
  static role = 'figure'
}

export class RoleForm extends RoleType
{
  static role = 'form'
}

export class RoleGeneric extends RoleType
{
  static role = 'generic'
}

export class RoleGrid extends RoleType
{
  static role = 'grid'
}

export class RoleGridCell extends RoleType
{
  static role = 'gridcell'
}

export class RoleGroup extends RoleType
{
  static role = 'group'
}

export class RoleHeading extends RoleType
{
  static role = 'heading'
}

export class RoleImg extends RoleType
{
  static role = 'img'
}

export class RoleInsertion extends RoleType
{
  static role = 'insertion'
}

export class RoleLink extends RoleType
{
  static role = 'link'
}

export class RoleList extends RoleType
{
  static role = 'list'
}

export class RoleListBox extends RoleType
{
  static role = 'listbox'
  static props = {
    orientation : TokenType.define('aria-orientation', 'vertical'),
  }
}

export class RoleListItem extends RoleType
{
  static role = 'listitem'
}

export class RoleLog extends RoleType
{
  static role = 'log'
  static props = {
    live : TokenType.define('aria-live', 'polite'),
  }
}

export class RoleMain extends RoleType
{
  static role = 'main'
}

export class RoleMarquee extends RoleType
{
  static role = 'marquee'
}

export class RoleMath extends RoleType
{
  static role = 'math'
}

export class RoleMenu extends RoleType
{
  static role = 'menu'
  static props = {
    orientation : TokenType.define('aria-orientation', 'vertical'),
  }
}

export class RoleMenuBar extends RoleType
{
  static role = 'menubar'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
  }
}

export class RoleMenuItem extends RoleType
{
  static role = 'menuitem'
}

export class RoleMenuItemCheckBox extends RoleType
{
  static role = 'menuitemcheckbox'
}

export class RoleMenuItemRadio extends RoleType
{
  static role = 'menuitemradio'
}

export class RoleMeter extends RoleType
{
  static role = 'meter'
  static props = {
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

export class RoleNavigation extends RoleType
{
  static role = 'navigation'
}

export class RoleNone extends RoleType
{
  static role = 'none'
}

export class RoleNote extends RoleType
{
  static role = 'note'
}

export class RoleOption extends RoleType
{
  static role = 'option'
  static props = {
    selected : TokenType.define('aria-selected', false),
  }
}

export class RoleParagraph extends RoleType
{
  static role = 'paragraph'
}

export class RolePresentation extends RoleType
{
  static role = 'presentation'
}

export class RoleProgressBar extends RoleType
{
  static role = 'progressbar'
  static props = {
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

export class RoleRadio extends RoleType
{
  static role = 'radio'
}

export class RoleRadioGroup extends RoleType
{
  static role = 'radiogroup'
}

export class RoleRegion extends RoleType
{
  static role = 'region'
}

export class RoleRow extends RoleType
{
  static role = 'row'
}

export class RoleRowGroup extends RoleType
{
  static role = 'rowgroup'
}

export class RoleRowHeader extends RoleType
{
  static role = 'rowheader'
}

export class RoleScrollBar extends RoleType
{
  static role = 'scrollbar'
  static props = {
    orientation : TokenType.define('aria-orientation', 'vertical'),
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

export class RoleSearch extends RoleType
{
  static role = 'search'
}

export class RoleSearchBox extends RoleType
{
  static role = 'searchbox'
}

export class RoleSectionHead extends RoleType
{
  static role = 'sectionhead'
}

export class RoleSeparator extends RoleType
{
  static role = 'separator'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

export class RoleSlider extends RoleType
{
  static role = 'slider'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
    valueMin : NumberType.define('aria-valuemin', 0),
    valueMax : NumberType.define('aria-valuemax', 100),
  }
}

export class RoleSpinButton extends RoleType
{
  static role = 'spinbutton'
  static props = {
    valueMin : NumberType.define('aria-valuemin', -Infinity),
    valueMax : NumberType.define('aria-valuemax', Infinity),
    valueNow : NumberType.define('aria-valuenow', 0),
  }
}

export class RoleStatus extends RoleType
{
  static role = 'status'
  static props = {
    live : TokenType.define('aria-live', 'polite'),
    atomic : BooleanType.define('aria-atomic', true),
  }
}

export class RoleStrong extends RoleType
{
  static role = 'strong'
}

export class RoleSubscript extends RoleType
{
  static role = 'subscript'
}

export class RoleSuperscript extends RoleType
{
  static role = 'superscript'
}

export class RoleSwitch extends RoleType
{
  static role = 'switch'
}

export class RoleTab extends RoleType
{
  static role = 'tab'
  static props = {
    selected : TokenType.define('aria-selected', false),
  }
}

export class RoleTabList extends RoleType
{
  static role = 'tablist'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
  }
}

export class RoleTabPanel extends RoleType
{
  static role = 'tabpanel'
}

export class RoleTable extends RoleType
{
  static role = 'table'
}

export class RoleTerm extends RoleType
{
  static role = 'term'
}

export class RoleTextBox extends RoleType
{
  static role = 'textbox'
}

export class RoleTime extends RoleType
{
  static role = 'time'
}

export class RoleTimer extends RoleType
{
  static role = 'timer'
}

export class RoleToolBar extends RoleType
{
  static role = 'toolbar'
  static props = {
    orientation : TokenType.define('aria-orientation', 'horizontal'),
  }
}

export class RoleToolTip extends RoleType
{
  static role = 'tooltip'
}

export class RoleTree extends RoleType
{
  static role = 'tree'
  static props = {
    orientation : TokenType.define('aria-orientation', 'vertical'),
  }
}

export class RoleTreeGrid extends RoleType
{
  static role = 'treegrid'
}

export class RoleTreeItem extends RoleType
{
  static role = 'treeitem'
}
