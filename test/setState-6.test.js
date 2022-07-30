const window = require('xwindow')
const test = require('ava')
const sinon = require('sinon')
const { ElemType } = require('..')
const { MutationObserver } = window

class App extends ElemType
{
  state = {
    id : 'foo',
  }

  render() {
    this.id = this.state.id
  }
}

test('test #1', async t => {
  const elem = App.render()
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, { attributes : true })

  t.is(spy.callCount, 0)
  t.is(elem.node.id, 'foo')
  t.is(elem.toString(), '<div class="App" id="foo"></div>')

  elem.setState({ id : 'foo' })

  await new Promise(setImmediate)

  t.is(spy.callCount, 0)
  t.is(elem.node.id, 'foo')
  t.is(elem.toString(), '<div class="App" id="foo"></div>')

  elem.setState({ id : 'bar' })

  await new Promise(setImmediate)

  t.is(spy.callCount, 1)
  t.is(elem.node.id, 'bar')
  t.is(elem.toString(), '<div class="App" id="bar"></div>')
})
