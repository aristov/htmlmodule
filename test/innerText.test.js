import test from 'ava'
import sinon from 'sinon'
import window from '../lib/window.cjs'
import { HtmlType } from '../index.js'

const { MutationObserver } = window

Object.defineProperty(window.HTMLElement.prototype, 'innerText', {
  configurable : true,
  get() {
    return this.innerHTML.replace(/<br>/g, '\n')
  },
  set(innerText) {
    this.innerHTML = String(innerText).replace(/\n/g, '<br>')
  },
})

class Test extends HtmlType
{
  static class = 'Test'

  state = {
    text : 'foo\nbar',
  }

  render() {
    this.innerText = this.state.text
  }
}

test('test #1', t => {
  const elem = HtmlType.render({ innerText : 'foo\nbar' })

  t.is(elem.toString(), '<div>foo<br>bar</div>')
  t.is(elem.innerText, 'foo\nbar')
})

test('test #2', t => {
  const elem = HtmlType.render({
    innerText : ['foo', null, 'bar'],
  })

  t.is(elem.toString(), '<div>foo<br>bar</div>')
  t.is(elem.innerText, 'foo\nbar')
})

test('test #3', async t => {
  const elem = Test.render()
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, { childList : true })

  t.is(elem.toString(), '<div class="Test">foo<br>bar</div>')
  t.is(elem.innerText, 'foo\nbar')
  t.is(spy.callCount, 0)

  elem.setState({ text : 'foo\nbar' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="Test">foo<br>bar</div>')
  t.is(elem.innerText, 'foo\nbar')
  t.is(spy.callCount, 0)

  elem.setState({ text : 'bar\nfoo' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="Test">bar<br>foo</div>')
  t.is(elem.innerText, 'bar\nfoo')
  t.is(spy.callCount, 1)
})
