import test from 'ava'
import { ElemType } from '../index.js'

class Test extends ElemType
{
  static class = 'Test'

  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return new ElemType('foo')
      case 1:
        return new ElemType
    }
  }
}

test('test #1', t => {
  const elem = Test.render()

  t.is(elem.toString(), '<div class="Test"><div>foo</div></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Test"><div></div></div>')
})
