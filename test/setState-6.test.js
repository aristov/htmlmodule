import window from 'xwindow'
import test from 'ava'
import sinon from 'sinon'
import { ElemType } from '../index.js'

const { MutationObserver } = window

class App extends ElemType
{
  static class = 'App'

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

  t.is(elem.toString(), '<div class="App" id="foo"></div>')
  t.is(spy.callCount, 0)
  t.is(elem.id, 'foo')

  elem.setState({ id : 'foo' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="App" id="foo"></div>')
  t.is(spy.callCount, 0)
  t.is(elem.id, 'foo')

  elem.setState({ id : 'bar' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="App" id="bar"></div>')
  t.is(spy.callCount, 1)
  t.is(elem.id, 'bar')
})
