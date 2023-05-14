const test = require('ava')
const sinon = require('sinon')
const { ElemType } = require('..')

let spy

class App extends ElemType
{
  static class = 'App'

  state = {
    hidden : true,
  }

  assign() {
    if(this.state.hidden) {
      this.parent = null
    }
  }

  render() {
    spy()
    return this.props.children
  }
}

test('test #1', t => {
  spy = sinon.spy()
  const app = new App('Hello world!')
  const elem = ElemType.render(app)

  t.is(elem.toString(), '<div><!--App--></div>')
  t.is(spy.callCount, 0)
  t.deepEqual(app.children, [])

  app.setState({ hidden : false })

  t.is(elem.toString(), '<div><div class="App">Hello world!</div></div>')
  t.is(spy.callCount, 1)

  app.setState({ hidden : true })

  t.is(elem.toString(), '<div><!--App--></div>')
  t.is(spy.callCount, 1)
})
