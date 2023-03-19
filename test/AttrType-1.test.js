const test = require('ava')
const sinon = require('sinon')
const { MutationObserver } = require('xwindow')
const { AttrType, ElemType } = require('..')

class AriaHidden extends AttrType
{
  static nodeName = 'aria-hidden'
}

class App extends ElemType
{
  static class = 'App'

  state = {
    hidden : null,
    expanded : 'true',
  }

  render() {
    this.hidden = this.state.hidden
    this.expanded = this.state.expanded
    return super.render()
  }

  static props = {
    expanded : AttrType.define('expanded'),
    hidden : AriaHidden,
  }
}

test('test #1', async t => {
  const elem = App.render()
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, {
    attributes : true,
    attributeFilter : ['aria-hidden'],
  })

  t.is(elem.toString(), '<div class="App" expanded="true"></div>')
  t.is(elem.expanded, 'true')
  t.is(elem.hidden, '')
  t.is(spy.callCount, 0)

  elem.setState({
    hidden : 'false',
    expanded : null,
  })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="App" aria-hidden="false"></div>')
  t.is(elem.hidden, 'false')
  t.is(spy.callCount, 1)

  elem.setState({ hidden : 'false' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="App" aria-hidden="false"></div>')
  t.is(elem.hidden, 'false')
  t.is(spy.callCount, 1)

  elem.setState({ hidden : null })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="App"></div>')
  t.is(elem.hidden, '')
  t.is(spy.callCount, 2)

  elem.setState({ hidden : 'true' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="App" aria-hidden="true"></div>')
  t.is(elem.hidden, 'true')
  t.is(spy.callCount, 3)

  elem.setState({ hidden : 'true' })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="App" aria-hidden="true"></div>')
  t.is(elem.hidden, 'true')
  t.is(spy.callCount, 3)
})
