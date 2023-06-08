import window from 'xwindow'
import test from 'ava'
import sinon from 'sinon'
import { HtmlType } from '../index.js'

const { MutationObserver } = window

class Test extends HtmlType
{
  static class = 'Test'

  state = {
    html : 'foo<br>bar',
  }

  render() {
    this.innerHTML = this.state.html
  }
}

test('test #1', t => {
  const elem = HtmlType.render({ innerHTML : 'foo<br>bar' })

  t.is(elem.toString(), '<div>foo<br>bar</div>')
  t.is(elem.innerHTML, 'foo<br>bar')
})

test('test #2', t => {
  const elem = HtmlType.render({ innerHTML : ['foo', null, '<br>', false, 'bar'] })

  t.is(elem.toString(), '<div>foo<br>bar</div>')
  t.is(elem.innerHTML, 'foo<br>bar')
})

test('test #3', async t => {
  const elem = Test.render()
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, { childList : true })

  t.is(elem.toString(), '<div class="Test">foo<br>bar</div>')
  t.is(elem.innerHTML, 'foo<br>bar')
  t.is(spy.callCount, 0)

  elem.setState({ html : 'foo<br>bar' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="Test">foo<br>bar</div>')
  t.is(elem.innerHTML, 'foo<br>bar')
  t.is(spy.callCount, 0)

  elem.setState({ html : 'bar<br>foo' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="Test">bar<br>foo</div>')
  t.is(elem.innerHTML, 'bar<br>foo')
  t.is(spy.callCount, 1)
})
