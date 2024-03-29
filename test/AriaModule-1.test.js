import test from 'ava'
import * as lib from '../lib/AriaModule.js'

test('test #1', t => {
  t.is(lib.RoleAlert.render().toString(), '<div role="alert"></div>')
  t.is(lib.RoleAlertDialog.render().toString(), '<div role="alertdialog"></div>')
  t.is(lib.RoleApplication.render().toString(), '<div role="application"></div>')
  t.is(lib.RoleArticle.render().toString(), '<div role="article"></div>')
  t.is(lib.RoleBanner.render().toString(), '<div role="banner"></div>')
  t.is(lib.RoleBlockQuote.render().toString(), '<div role="blockquote"></div>')
  t.is(lib.RoleButton.render().toString(), '<div role="button"></div>')
  t.is(lib.RoleCaption.render().toString(), '<div role="caption"></div>')
  t.is(lib.RoleCell.render().toString(), '<div role="cell"></div>')
  t.is(lib.RoleCheckBox.render().toString(), '<div role="checkbox"></div>')
  t.is(lib.RoleCode.render().toString(), '<div role="code"></div>')
  t.is(lib.RoleColumnHeader.render().toString(), '<div role="columnheader"></div>')
  t.is(lib.RoleComboBox.render().toString(), '<div role="combobox"></div>')
  t.is(lib.RoleComplementary.render().toString(), '<div role="complementary"></div>')
  t.is(lib.RoleContentInfo.render().toString(), '<div role="contentinfo"></div>')
  t.is(lib.RoleDefinition.render().toString(), '<div role="definition"></div>')
  t.is(lib.RoleDeletion.render().toString(), '<div role="deletion"></div>')
  t.is(lib.RoleDialog.render().toString(), '<div role="dialog"></div>')
  t.is(lib.RoleDirectory.render().toString(), '<div role="directory"></div>')
  t.is(lib.RoleDocument.render().toString(), '<div role="document"></div>')
  t.is(lib.RoleEmphasis.render().toString(), '<div role="emphasis"></div>')
  t.is(lib.RoleFeed.render().toString(), '<div role="feed"></div>')
  t.is(lib.RoleFigure.render().toString(), '<div role="figure"></div>')
  t.is(lib.RoleForm.render().toString(), '<div role="form"></div>')
  t.is(lib.RoleGeneric.render().toString(), '<div role="generic"></div>')
  t.is(lib.RoleGrid.render().toString(), '<div role="grid"></div>')
  t.is(lib.RoleGridCell.render().toString(), '<div role="gridcell"></div>')
  t.is(lib.RoleGroup.render().toString(), '<div role="group"></div>')
  t.is(lib.RoleHeading.render().toString(), '<div role="heading"></div>')
  t.is(lib.RoleImg.render().toString(), '<div role="img"></div>')
  t.is(lib.RoleInsertion.render().toString(), '<div role="insertion"></div>')
  t.is(lib.RoleLink.render().toString(), '<div role="link"></div>')
  t.is(lib.RoleList.render().toString(), '<div role="list"></div>')
  t.is(lib.RoleListBox.render().toString(), '<div role="listbox"></div>')
  t.is(lib.RoleListItem.render().toString(), '<div role="listitem"></div>')
  t.is(lib.RoleLog.render().toString(), '<div role="log"></div>')
  t.is(lib.RoleMain.render().toString(), '<div role="main"></div>')
  t.is(lib.RoleMarquee.render().toString(), '<div role="marquee"></div>')
  t.is(lib.RoleMath.render().toString(), '<div role="math"></div>')
  t.is(lib.RoleMenu.render().toString(), '<div role="menu"></div>')
  t.is(lib.RoleMenuBar.render().toString(), '<div role="menubar"></div>')
  t.is(lib.RoleMenuItem.render().toString(), '<div role="menuitem"></div>')
  t.is(lib.RoleMenuItemCheckBox.render().toString(), '<div role="menuitemcheckbox"></div>')
  t.is(lib.RoleMenuItemRadio.render().toString(), '<div role="menuitemradio"></div>')
  t.is(lib.RoleMeter.render().toString(), '<div role="meter"></div>')
  t.is(lib.RoleNavigation.render().toString(), '<div role="navigation"></div>')
  t.is(lib.RoleNone.render().toString(), '<div role="none"></div>')
  t.is(lib.RoleNote.render().toString(), '<div role="note"></div>')
  t.is(lib.RoleOption.render().toString(), '<div role="option"></div>')
  t.is(lib.RoleParagraph.render().toString(), '<div role="paragraph"></div>')
  t.is(lib.RolePresentation.render().toString(), '<div role="presentation"></div>')
  t.is(lib.RoleProgressBar.render().toString(), '<div role="progressbar"></div>')
  t.is(lib.RoleRadio.render().toString(), '<div role="radio"></div>')
  t.is(lib.RoleRadioGroup.render().toString(), '<div role="radiogroup"></div>')
  t.is(lib.RoleRegion.render().toString(), '<div role="region"></div>')
  t.is(lib.RoleRow.render().toString(), '<div role="row"></div>')
  t.is(lib.RoleRowGroup.render().toString(), '<div role="rowgroup"></div>')
  t.is(lib.RoleRowHeader.render().toString(), '<div role="rowheader"></div>')
  t.is(lib.RoleScrollBar.render().toString(), '<div role="scrollbar"></div>')
  t.is(lib.RoleSearch.render().toString(), '<div role="search"></div>')
  t.is(lib.RoleSearchBox.render().toString(), '<div role="searchbox"></div>')
  t.is(lib.RoleSectionHead.render().toString(), '<div role="sectionhead"></div>')
  t.is(lib.RoleSeparator.render().toString(), '<div role="separator"></div>')
  t.is(lib.RoleSlider.render().toString(), '<div role="slider"></div>')
  t.is(lib.RoleSpinButton.render().toString(), '<div role="spinbutton"></div>')
  t.is(lib.RoleStatus.render().toString(), '<div role="status"></div>')
  t.is(lib.RoleStrong.render().toString(), '<div role="strong"></div>')
  t.is(lib.RoleSubscript.render().toString(), '<div role="subscript"></div>')
  t.is(lib.RoleSuperscript.render().toString(), '<div role="superscript"></div>')
  t.is(lib.RoleSwitch.render().toString(), '<div role="switch"></div>')
  t.is(lib.RoleTab.render().toString(), '<div role="tab"></div>')
  t.is(lib.RoleTabList.render().toString(), '<div role="tablist"></div>')
  t.is(lib.RoleTabPanel.render().toString(), '<div role="tabpanel"></div>')
  t.is(lib.RoleTable.render().toString(), '<div role="table"></div>')
  t.is(lib.RoleTerm.render().toString(), '<div role="term"></div>')
  t.is(lib.RoleTextBox.render().toString(), '<div role="textbox"></div>')
  t.is(lib.RoleTime.render().toString(), '<div role="time"></div>')
  t.is(lib.RoleTimer.render().toString(), '<div role="timer"></div>')
  t.is(lib.RoleToolBar.render().toString(), '<div role="toolbar"></div>')
  t.is(lib.RoleToolTip.render().toString(), '<div role="tooltip"></div>')
  t.is(lib.RoleTree.render().toString(), '<div role="tree"></div>')
  t.is(lib.RoleTreeGrid.render().toString(), '<div role="treegrid"></div>')
  t.is(lib.RoleTreeItem.render().toString(), '<div role="treeitem"></div>')
})
