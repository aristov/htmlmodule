import test from 'ava'
import { HtmlInput } from '../index.js'

let value = 'foo'

class Input extends HtmlInput
{
  static class = 'Input'

  render() {
    this.defaultValue = value
  }
}

test('test #1', t => {
  const input = Input.render()

  t.is(input.toString(), '<input class="Input" value="foo">')

  value = 'bar'

  input.setState({})

  t.is(input.toString(), '<input class="Input" value="bar">')
})
