const test = require('ava')
const { ElemType } = require('../index')

class Input extends ElemType
{
  static tagName = 'input'
}

class Test extends ElemType
{
  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        this.classList = ['foo', null, 'bar']
        return new Input({ classList : ['one', null, 'two'] })
      case 1:
        this.classList = { foo : false, bat : true }
        return new Input({ classList : { one : false, three : true } })
      case 2:
        this.classList = 'foo baz'
        return new Input({ classList : 'one four' })
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

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div class="foo baz"><input class="one four"></div>')

  elem.setState({ step : 3 })

  t.is(elem.toString(), '<div class="Test"><input class="Input"></div>')
})
