const test = require('ava')
const { HtmlType } = require('..')

class Test extends HtmlType
{
  render() {
    this.innerHTML = 'foo<br>bar'
  }
}

test('test #1', t => {
  const elem = HtmlType.render({ innerHTML : 'foo<br>bar' })

  t.is(elem.innerHTML, 'foo<br>bar')
  t.is(elem.toString(), '<div>foo<br>bar</div>')
})

test('test #2', t => {
  const elem = Test.render()

  t.is(elem.innerHTML, 'foo<br>bar')
  t.is(elem.toString(), '<div class="Test">foo<br>bar</div>')
})
