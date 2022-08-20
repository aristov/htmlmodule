const window = require('xwindow')
const test = require('ava')
const sinon = require('sinon')
const { HtmlType } = require('..')
const { MutationObserver } = window

Object.defineProperty(window.HTMLElement.prototype, 'innerText', {
  configurable : true,
  get() {
    return this.innerHTML.replace(/<br>/g, '\n')
  },
  set(innerText) {
    this.innerHTML = innerText.replace(/\n/g, '<br>')
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
  t.is(elem.node.innerText, 'foo\nbar')
})

test('test #2', async t => {
  const elem = Test.render()
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, { childList : true })

  t.is(elem.toString(), '<div class="Test">foo<br>bar</div>')
  t.is(elem.node.innerText, 'foo\nbar')
  t.is(spy.callCount, 0)

  elem.setState({ text : 'foo\nbar' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="Test">foo<br>bar</div>')
  t.is(elem.node.innerText, 'foo\nbar')
  t.is(spy.callCount, 0)

  elem.setState({ text : 'bar\nfoo' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="Test">bar<br>foo</div>')
  t.is(elem.node.innerText, 'bar\nfoo')
  t.is(spy.callCount, 1)
})
