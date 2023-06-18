import test from 'ava'
import * as lib from '../lib/AriaModule.js'

test('test #1', t => {
  t.is(lib.RoleAlert.render().live, 'assertive')
  t.is(lib.RoleAlert.render().atomic, true)

  t.is(lib.RoleComboBox.render().hasPopup, 'listbox')

  t.is(lib.RoleListBox.render().orientation, 'vertical')

  t.is(lib.RoleLog.render().live, 'polite')

  t.is(lib.RoleMeter.render().valueMin, 0)
  t.is(lib.RoleMeter.render().valueMax, 100)

  t.is(lib.RoleMenu.render().orientation, 'vertical')

  t.is(lib.RoleMenuBar.render().orientation, 'horizontal')

  t.is(lib.RoleOption.render().selected, false)

  t.is(lib.RoleProgressBar.render().valueMin, 0)
  t.is(lib.RoleProgressBar.render().valueMax, 100)

  t.is(lib.RoleScrollBar.render().orientation, 'vertical')
  t.is(lib.RoleScrollBar.render().valueMin, 0)
  t.is(lib.RoleScrollBar.render().valueMax, 100)

  t.is(lib.RoleSeparator.render().orientation, 'horizontal')
  t.is(lib.RoleSeparator.render().valueMin, 0)
  t.is(lib.RoleSeparator.render().valueMax, 100)

  t.is(lib.RoleSlider.render().orientation, 'horizontal')
  t.is(lib.RoleSlider.render().valueMin, 0)
  t.is(lib.RoleSlider.render().valueMax, 100)

  t.is(lib.RoleSpinButton.render().valueMin, -Infinity)
  t.is(lib.RoleSpinButton.render().valueMax, Infinity)
  t.is(lib.RoleSpinButton.render().valueNow, 0)

  t.is(lib.RoleStatus.render().live, 'polite')
  t.is(lib.RoleStatus.render().atomic, true)

  t.is(lib.RoleTab.render().selected, false)

  t.is(lib.RoleTabList.render().orientation, 'horizontal')

  t.is(lib.RoleToolBar.render().orientation, 'horizontal')

  t.is(lib.RoleTree.render().orientation, 'vertical')
})
