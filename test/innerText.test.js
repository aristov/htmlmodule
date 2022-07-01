const window = require('xwindow')
const test = require('ava')
const { HtmlType } = require('..')

Object.defineProperty(window.HTMLElement.prototype, 'innerText', {
  configurable : true,
  get() {
    return this.innerHTML.replace(/<br>/g, '\n')
  },
  set(innerText) {
    this.innerHTML = innerText.replace(/\n/g, '<br>')
  }
})

class Test extends HtmlType
{
  render() {
    this.innerText = 'foo\nbar'
  }
}

test('test #1', t => {
  const elem = HtmlType.render({ innerText : 'foo\nbar' })

  t.is(elem.innerText, 'foo\nbar')
  t.is(elem.toString(), '<div>foo<br>bar</div>')
})

test('test #2', t => {
  const elem = Test.render()

  t.is(elem.innerText, 'foo\nbar')
  t.is(elem.toString(), '<div class="Test">foo<br>bar</div>')
})
