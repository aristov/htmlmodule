const window = require('xwindow')
const test = require('ava')
const sinon = require('sinon')
const { HtmlType } = require('..')
const { MutationObserver } = window

class Test extends HtmlType
{
  state = {
    html : 'foo<br>bar',
  }

  render() {
    this.innerHTML = this.state.html
  }
}

test('test #1', t => {
  const elem = HtmlType.render({ innerHTML : 'foo<br>bar' })

  t.is(elem.node.innerHTML, 'foo<br>bar')
  t.is(elem.toString(), '<div>foo<br>bar</div>')
})

test('test #2', async t => {
  const elem = Test.render()
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, { childList : true })

  t.is(spy.callCount, 0)
  t.is(elem.node.innerHTML, 'foo<br>bar')
  t.is(elem.toString(), '<div class="Test">foo<br>bar</div>')

  elem.setState({ html : 'foo<br>bar' })

  await new Promise(resolve => setImmediate(resolve))

  t.is(spy.callCount, 0)
  t.is(elem.node.innerHTML, 'foo<br>bar')

  elem.setState({ html : 'bar<br>foo' })

  await new Promise(resolve => setImmediate(resolve))

  t.is(spy.callCount, 1)
  t.is(elem.node.innerHTML, 'bar<br>foo')
})
