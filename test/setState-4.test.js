const test = require('ava')
const { ElemType } = require('..')

let text = 'foo'

class Example extends ElemType
{
  render() {
    return text
  }
}

test('test #1', t => {
  const elem = Example.render()

  t.is(elem.toString(), '<div class="Example">foo</div>')

  text = 'bar'
  elem.setState()

  t.is(elem.toString(), '<div class="Example">bar</div>')
})
