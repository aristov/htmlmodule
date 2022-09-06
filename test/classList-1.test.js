const test = require('ava')
const { ElemType } = require('../index')

class Input extends ElemType
{
  static tagName = 'input'

  static class = 'Input'
}

class Test extends ElemType
{
  static class = 'Test'

  state = {
    step : 0,
    mode : 'on',
  }

  render() {
    const mode = this.state.mode
    switch(this.state.step) {
      case 0:
        this.classList = ['foo', null, 'bar']
        return new Input({
          classList : ['one', null, 'two'],
        })
      case 1:
        this.classList = [
          mode === 'off' && 'foo',
          mode === 'on' && 'bat',
        ]
        return new Input({
          classList : [
            mode === 'off' && 'one',
            mode === 'on' && 'three',
          ],
        })
      case 2:
        this.classList = 'foo baz'
        return new Input({
          classList : 'one four',
        })
      case 3:
        this.classList = null
        return new Input
    }
  }
}

test('test #1', t => {
  const elem = Test.render()

  t.is(elem.toString(), '<div class="Test foo bar"><input class="Input one two"></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Test bat"><input class="Input three"></div>')

  elem.setState({ mode : 'off' })

  t.is(elem.toString(), '<div class="Test foo"><input class="Input one"></div>')

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div class="Test foo baz"><input class="Input one four"></div>')

  elem.setState({ step : 3 })

  t.is(elem.toString(), '<div class="Test"><input class="Input"></div>')
})
