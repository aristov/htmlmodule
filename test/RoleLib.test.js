const test = require('ava')
const lib = require('../lib/RoleLib')

test('test #1', t => {
  t.is(lib.RoleAlert.render().toString(), '<div role="Alert"></div>')
  t.is(lib.RoleAlertDialog.render().toString(), '<div role="AlertDialog"></div>')
  t.is(lib.RoleApplication.render().toString(), '<div role="Application"></div>')
  t.is(lib.RoleArticle.render().toString(), '<div role="Article"></div>')
  t.is(lib.RoleBanner.render().toString(), '<div role="Banner"></div>')
  t.is(lib.RoleBlockQuote.render().toString(), '<div role="BlockQuote"></div>')
  t.is(lib.RoleButton.render().toString(), '<div role="Button"></div>')
  t.is(lib.RoleCaption.render().toString(), '<div role="Caption"></div>')
  t.is(lib.RoleCell.render().toString(), '<div role="Cell"></div>')
  t.is(lib.RoleCheckBox.render().toString(), '<div role="CheckBox"></div>')
  t.is(lib.RoleColumnHeader.render().toString(), '<div role="ColumnHeader"></div>')
  t.is(lib.RoleComboBox.render().toString(), '<div role="ComboBox"></div>')
  t.is(lib.RoleComplementary.render().toString(), '<div role="Complementary"></div>')
  t.is(lib.RoleContentInfo.render().toString(), '<div role="ContentInfo"></div>')
  t.is(lib.RoleDefinition.render().toString(), '<div role="Definition"></div>')
  t.is(lib.RoleDialog.render().toString(), '<div role="Dialog"></div>')
  t.is(lib.RoleDirectory.render().toString(), '<div role="Directory"></div>')
  t.is(lib.RoleDocument.render().toString(), '<div role="Document"></div>')
  t.is(lib.RoleFeed.render().toString(), '<div role="Feed"></div>')
  t.is(lib.RoleFigure.render().toString(), '<div role="Figure"></div>')
  t.is(lib.RoleForm.render().toString(), '<div role="Form"></div>')
  t.is(lib.RoleGrid.render().toString(), '<div role="Grid"></div>')
  t.is(lib.RoleGridCell.render().toString(), '<div role="GridCell"></div>')
  t.is(lib.RoleGroup.render().toString(), '<div role="Group"></div>')
  t.is(lib.RoleHeading.render().toString(), '<div role="Heading"></div>')
  t.is(lib.RoleImg.render().toString(), '<div role="Img"></div>')
  t.is(lib.RoleLink.render().toString(), '<div role="Link"></div>')
  t.is(lib.RoleList.render().toString(), '<div role="List"></div>')
  t.is(lib.RoleListBox.render().toString(), '<div role="ListBox"></div>')
  t.is(lib.RoleListItem.render().toString(), '<div role="ListItem"></div>')
  t.is(lib.RoleLog.render().toString(), '<div role="Log"></div>')
  t.is(lib.RoleMain.render().toString(), '<div role="Main"></div>')
  t.is(lib.RoleMarquee.render().toString(), '<div role="Marquee"></div>')
  t.is(lib.RoleMath.render().toString(), '<div role="Math"></div>')
  t.is(lib.RoleMenu.render().toString(), '<div role="Menu"></div>')
  t.is(lib.RoleMenuBar.render().toString(), '<div role="MenuBar"></div>')
  t.is(lib.RoleMenuItem.render().toString(), '<div role="MenuItem"></div>')
  t.is(lib.RoleMenuItemCheckBox.render().toString(), '<div role="MenuItemCheckBox"></div>')
  t.is(lib.RoleMenuItemRadio.render().toString(), '<div role="MenuItemRadio"></div>')
  t.is(lib.RoleNavigation.render().toString(), '<div role="Navigation"></div>')
  t.is(lib.RoleNone.render().toString(), '<div role="None"></div>')
  t.is(lib.RoleNote.render().toString(), '<div role="Note"></div>')
  t.is(lib.RoleOption.render().toString(), '<div role="Option"></div>')
  t.is(lib.RoleParagraph.render().toString(), '<div role="Paragraph"></div>')
  t.is(lib.RolePresentation.render().toString(), '<div role="Presentation"></div>')
  t.is(lib.RoleProgressBar.render().toString(), '<div role="ProgressBar"></div>')
  t.is(lib.RoleRadio.render().toString(), '<div role="Radio"></div>')
  t.is(lib.RoleRadioGroup.render().toString(), '<div role="RadioGroup"></div>')
  t.is(lib.RoleRegion.render().toString(), '<div role="Region"></div>')
  t.is(lib.RoleRow.render().toString(), '<div role="Row"></div>')
  t.is(lib.RoleRowGroup.render().toString(), '<div role="RowGroup"></div>')
  t.is(lib.RoleRowHeader.render().toString(), '<div role="RowHeader"></div>')
  t.is(lib.RoleScrollBar.render().toString(), '<div role="ScrollBar"></div>')
  t.is(lib.RoleSearch.render().toString(), '<div role="Search"></div>')
  t.is(lib.RoleSearchBox.render().toString(), '<div role="SearchBox"></div>')
  t.is(lib.RoleSectionHead.render().toString(), '<div role="SectionHead"></div>')
  t.is(lib.RoleSeparator.render().toString(), '<div role="Separator"></div>')
  t.is(lib.RoleSlider.render().toString(), '<div role="Slider"></div>')
  t.is(lib.RoleSpinButton.render().toString(), '<div role="SpinButton"></div>')
  t.is(lib.RoleStatus.render().toString(), '<div role="Status"></div>')
  t.is(lib.RoleStrong.render().toString(), '<div role="Strong"></div>')
  t.is(lib.RoleSwitch.render().toString(), '<div role="Switch"></div>')
  t.is(lib.RoleTab.render().toString(), '<div role="Tab"></div>')
  t.is(lib.RoleTabList.render().toString(), '<div role="TabList"></div>')
  t.is(lib.RoleTabPanel.render().toString(), '<div role="TabPanel"></div>')
  t.is(lib.RoleTable.render().toString(), '<div role="Table"></div>')
  t.is(lib.RoleTerm.render().toString(), '<div role="Term"></div>')
  t.is(lib.RoleTextBox.render().toString(), '<div role="TextBox"></div>')
  t.is(lib.RoleTimer.render().toString(), '<div role="Timer"></div>')
  t.is(lib.RoleToolBar.render().toString(), '<div role="ToolBar"></div>')
  t.is(lib.RoleToolTip.render().toString(), '<div role="ToolTip"></div>')
  t.is(lib.RoleTree.render().toString(), '<div role="Tree"></div>')
  t.is(lib.RoleTreeGrid.render().toString(), '<div role="TreeGrid"></div>')
  t.is(lib.RoleTreeItem.render().toString(), '<div role="TreeItem"></div>')
})
