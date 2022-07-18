const test = require('ava')
const sinon = require('sinon')
const window = require('xwindow')
const { HtmlType } = require('..')
const { MutationObserver } = window

class App extends HtmlType
{
  state = {
    token : 'foo',
    hidden : true,
    label : 'bar',
    bat : 'baz',
    display : 'flex',
  }

  render() {
    this.classList = [this.state.token]
    this.hidden = this.state.hidden
    this.attributes = { 'aria-label' : this.state.label }
    this.dataset = { bat : this.state.bat }
    this.style = { display : this.state.display }
  }
}

test('test #1', async t => {
  const elem = App.render()
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, {
    attributes : true,
  })

  t.is(spy.callCount, 0)
  t.is(elem.className, 'App foo')
  t.is(elem.hidden, true)
  t.is(elem.node.getAttribute('aria-label'), 'bar')
  t.is(elem.style.display, 'flex')
  t.is(elem.toString(), '<div class="App foo" hidden="" aria-label="bar" data-bat="baz" style="display: flex;"></div>')

  elem.setState({
    token : 'foo',
    hidden : true,
    label : 'bar',
    bat : 'baz',
    display : 'flex',
  })

  await new Promise(resolve => setImmediate(resolve))

  t.is(spy.callCount, 0)
  t.is(elem.className, 'App foo')
  t.is(elem.hidden, true)
  t.is(elem.node.getAttribute('aria-label'), 'bar')
  t.is(elem.style.display, 'flex')
  t.is(elem.toString(), '<div class="App foo" hidden="" aria-label="bar" data-bat="baz" style="display: flex;"></div>')

  elem.setState({
    token : 'bar',
    hidden : false,
    label : 'bat',
    bat : 'foo',
    display : 'grid',
  })

  await new Promise(resolve => setImmediate(resolve))

  t.is(spy.callCount, 1)
  t.is(elem.className, 'App bar')
  t.is(elem.hidden, false)
  t.is(elem.node.getAttribute('aria-label'), 'bat')
  t.is(elem.style.display, 'grid')
  t.is(elem.toString(), '<div class="App bar" aria-label="bat" data-bat="foo" style="display: grid;"></div>')
})
