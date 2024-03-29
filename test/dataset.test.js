import test from 'ava'
import { ElemType } from '../index.js'

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
  }

  render() {
    switch(this.state.step) {
      case 0:
        this.dataset = {
          foo : 'bar',
          bat : null,
        }
        return new Input({
          dataset : {
            one : 'two',
            three : null,
          },
        })
      case 1:
        this.dataset = {
          foo : 'baz',
          bat : 'qwe',
        }
        return new Input({
          dataset : {
            one : 'four',
            three : 'five',
          },
        })
      case 2:
        this.dataset = {
          bat : 'qaz',
        }
        return new Input({
          dataset : {
            three : 'six',
          },
        })
      case 3:
        this.dataset = null
        return new Input
    }
  }
}

test('test #1', t => {
  const elem = Test.render()

  t.is(elem.toString(), '<div class="Test" data-foo="bar"><input class="Input" data-one="two"></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Test" data-foo="baz" data-bat="qwe"><input class="Input" data-one="four" data-three="five"></div>')

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div class="Test" data-bat="qaz"><input class="Input" data-three="six"></div>')

  elem.setState({ step : 3 })

  t.is(elem.toString(), '<div class="Test"><input class="Input"></div>')
})
