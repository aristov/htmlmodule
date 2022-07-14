const test = require('ava')
const sinon = require('sinon')
const window = require('xwindow')
const { ElemType } = require('..')
const { MutationObserver } = window

class App extends ElemType
{
  state = {
    token : 'foo',
  }

  render() {
    this.classList = [this.state.token]
  }
}

test('test #1', async t => {
  const elem = App.render()
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, {
    attributes : true,
  })

  t.is(elem.toString(), '<div class="App foo"></div>')

  await new Promise(resolve => setImmediate(resolve))

  t.is(elem.className, 'App foo')
  t.is(spy.callCount, 0)

  elem.setState({ token : 'foo' })

  await new Promise(resolve => setImmediate(resolve))

  t.is(elem.className, 'App foo')
  t.is(spy.callCount, 0)

  elem.setState({ token : 'bar' })

  await new Promise(resolve => setImmediate(resolve))

  t.is(elem.className, 'App bar')
  t.is(spy.callCount, 1)
})
