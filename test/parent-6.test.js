const test = require('ava')
const sinon = require('sinon')
const { ElemType, HtmlA, HtmlB, HtmlP, HtmlQ } = require('..')

const mount = sinon.spy()

class Link extends HtmlA
{
  static class = 'Link'
}

class App extends ElemType
{
  static tagName = 'SPAN'

  static class = 'App'

  state = {
    step : 0
  }

  render() {
    const step = this.state.step
    if(step === 1) {
      this.parent = new HtmlA(this)
    }
    if(step === 2) {
      this.parent = new HtmlB(this)
    }
    if(step === 3) {
      this.parent = new HtmlP(new HtmlQ(this))
    }
    if(step === 4) {
      this.parent = new Link(this)
    }
    return this.props.children
  }

  mount() {
    mount.call(this)
  }
}

test('test #1', t => {
  const app = new App('test')
  const elem = ElemType.render(app)

  t.is(elem.toString(), '<div><span class="App">test</span></div>')
  t.is(mount.callCount, 1)

  app.setState({ step : 1 })

  t.is(elem.toString(), '<div><a><span class="App">test</span></a></div>')
  t.is(mount.callCount, 1)

  app.setState({ step : 2 })

  t.is(elem.toString(), '<div><b><span class="App">test</span></b></div>')
  t.is(mount.callCount, 1)

  app.setState({ step : 3 })

  t.is(elem.toString(), '<div><p><q><span class="App">test</span></q></p></div>')
  t.is(mount.callCount, 1)

  app.setState({ step : 4 })

  t.is(elem.toString(), '<div><a class="Link"><span class="App">test</span></a></div>')
  t.is(mount.callCount, 1)

  app.setState({ step : 1 })

  t.is(elem.toString(), '<div><a><span class="App">test</span></a></div>')
  t.is(mount.callCount, 1)

  app.setState({ step : 0 })

  t.is(elem.toString(), '<div><span class="App">test</span></div>')
  t.is(mount.callCount, 1)
})
