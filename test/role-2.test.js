const test = require('ava')
const sinon = require('sinon')
const { MutationObserver } = require('xwindow')
const { ElemType } = require('..')

class Input extends ElemType
{
  static tagName = 'input'

  static class = 'Input'
}

class App extends ElemType
{
  static role = 'form'

  static class = 'App'

  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return new Input({ role : 'textbox' })
      case 1:
        return new Input({ role : 'searchbox' })
      case 2:
        return new Input({ role : 'searchbox' })
    }
  }
}

test('test #1', async t => {
  const elem = App.render()
  const spy = sinon.spy()
  const observer = new MutationObserver(spy)
  observer.observe(elem.node, { attributes : true, subtree : true })

  t.is(elem.toString(), '<div class="App" role="form"><input class="Input" role="textbox"></div>')

  elem.setState({ step : 1 })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="App" role="form"><input class="Input" role="searchbox"></div>')
  t.is(spy.callCount, 1)

  elem.setState({ step : 2 })

  await new Promise(setImmediate)

  t.is(elem.toString(), '<div class="App" role="form"><input class="Input" role="searchbox"></div>')
  t.is(spy.callCount, 1)
})
