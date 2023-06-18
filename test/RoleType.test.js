import test from 'ava'
import { RoleArticle, RoleButton, RoleRegion, RoleType } from '../index.js'

class Button extends RoleType
{
  static role = 'button'

  static class = 'Button'
}

class TextInputBox extends RoleType
{
  static role = null

  static class = 'TextInputBox'
}

class ToggleButton extends RoleButton
{
  static tagName = 'span'

  static class = 'ToggleButton'

  render() {
    if(!this.props.pressed) {
      this.pressed = 'false'
    }
    return this.props.pressed ? 'Off' : 'On'
  }
}

class Article extends RoleArticle
{
  static class = 'Article'

  state = { expanded : false }

  render() {
    return [
      this._button = new ToggleButton({
        pressed : this.state.expanded,
        onclick : this.onClick,
      }),
      new RoleRegion({
        expanded : this.state.expanded,
      }),
    ]
  }

  onClick = () => this.setState({
    expanded : !this.state.expanded,
  })

  toggle() {
    this._button.click()
  }
}

test('RoleButton: role', t => {
  const elem = RoleButton.render('OK')

  t.is(elem.node.getAttribute('role'), 'button')
  t.is(elem.toString(), '<div role="button">OK</div>')
})

test('Button: role', t => {
  const elem = Button.render('OK')

  t.is(elem.node.getAttribute('role'), 'button')
  t.is(elem.toString(), '<div class="Button" role="button">OK</div>')
})

test('TextInputBox: role', t => {
  const elem = TextInputBox.render()

  t.is(elem.node.getAttribute('role'), null)
  t.is(elem.toString(), '<div class="TextInputBox"></div>')
})

test('RoleType: role', t => {
  const elem = RoleType.render({ role : 'link' })

  t.is(elem.node.getAttribute('role'), 'link')
  t.is(elem.toString(), '<div role="link"></div>')
})

test('ToggleButton: className', t => {
  const elem = ToggleButton.render()

  t.is(elem.className, 'ToggleButton')
  t.is(elem.toString(), '<span class="ToggleButton" role="button" aria-pressed="false">On</span>')
})

test('Article: setState', t => {
  const elem = Article.render()

  t.is(elem.toString(), '<div class="Article" role="article"><span class="ToggleButton" role="button" aria-pressed="false">On</span><div role="region" aria-expanded="false"></div></div>')

  elem.toggle()

  t.is(elem.toString(), '<div class="Article" role="article"><span class="ToggleButton" role="button" aria-pressed="true">Off</span><div role="region" aria-expanded="true"></div></div>')
})
