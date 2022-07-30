const test = require('ava')
const sinon = require('sinon')
const window = require('xwindow')
const { HtmlType } = require('..')
const { MutationObserver } = window

const document = window.document.implementation.createHTMLDocument('test')

document.head.innerHTML = '<base href="http://example.com">'

class App extends HtmlType
{
  static tagName = 'A'
  static class = 'App'

  state = {
    token : 'foo',
    hidden : true,
    label : 'bar',
    bat : 'baz',
    display : 'flex',
    href : '/home',
  }

  render() {
    this.classList = [this.state.token]
    this.hidden = this.state.hidden
    this.attributes = { 'aria-label' : this.state.label }
    this.dataset = { bat : this.state.bat }
    this.style = { display : this.state.display }
    this.href = this.state.href
  }
}

App.defineProps({
  href : 'href',
})

test('test #1', async t => {
  const elem = App.render(null, document.body)
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, {
    attributes : true,
  })

  t.is(elem.toString(), '<a class="App foo" hidden="" aria-label="bar" data-bat="baz" style="display: flex;" href="/home"></a>')
  t.is(elem.node.className, 'App foo')
  t.is(elem.node.hidden, true)
  t.is(elem.node.getAttribute('aria-label'), 'bar')
  t.is(elem.node.style.display, 'flex')
  t.is(elem.node.href, 'http://example.com/home')
  t.is(spy.callCount, 0)

  elem.setState({
    token : 'foo',
    hidden : true,
    label : 'bar',
    bat : 'baz',
    display : 'flex',
    href : '/home',
  })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<a class="App foo" hidden="" aria-label="bar" data-bat="baz" style="display: flex;" href="/home"></a>')
  t.is(elem.node.className, 'App foo')
  t.is(elem.node.hidden, true)
  t.is(elem.node.getAttribute('aria-label'), 'bar')
  t.is(elem.node.style.display, 'flex')
  t.is(elem.node.href, 'http://example.com/home')
  t.is(spy.callCount, 0)

  elem.setState({
    token : 'bar',
    hidden : false,
    label : 'bat',
    bat : 'foo',
    display : 'grid',
    href : '/about',
  })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<a class="App bar" aria-label="bat" data-bat="foo" style="display: grid;" href="/about"></a>')
  t.is(elem.node.className, 'App bar')
  t.is(elem.node.hidden, false)
  t.is(elem.node.getAttribute('aria-label'), 'bat')
  t.is(elem.node.style.display, 'grid')
  t.is(elem.node.href, 'http://example.com/about')
  t.is(spy.callCount, 1)
})
