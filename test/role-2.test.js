const test = require('ava')
const { ElemType } = require('..')

class Input extends ElemType
{
  static tagName = 'INPUT'
}

class Test extends ElemType
{
  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return new Input({ role : 'textbox' })
      case 1:
        return new Input({ role : 'searchbox' })
    }
  }
}

test('test #1', t => {
  const elem = Test.render()

  t.is(elem.toString(), '<div class="Test"><input role="textbox" class="Input"></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Test"><input role="searchbox" class="Input"></div>')
})
