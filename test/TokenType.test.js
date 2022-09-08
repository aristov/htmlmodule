const test = require('ava')
const { ElemType } = require('..')

class App extends ElemType
{
  static class = 'App'

  state = {
    hidden : null,
    checked : null,
    current : null,
  }

  render() {
    this.hidden = this.state.hidden
    this.checked = this.state.checked
    this.current = this.state.current
  }
}

test('applicable', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')

  app.setState({ hidden : true })

  t.is(app.toString(), '<div class="App" aria-hidden="true"></div>')

  app.setState({ hidden : false })

  t.is(app.toString(), '<div class="App" aria-hidden="false"></div>')

  app.setState({ hidden : undefined })

  t.is(app.toString(), '<div class="App"></div>')
})

test('tristate', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')

  app.setState({ checked : true })

  t.is(app.toString(), '<div class="App" aria-checked="true"></div>')

  app.setState({ checked : false })

  t.is(app.toString(), '<div class="App" aria-checked="false"></div>')

  app.setState({ checked : 'mixed' })

  t.is(app.toString(), '<div class="App" aria-checked="mixed"></div>')

  app.setState({ checked : undefined })

  t.is(app.toString(), '<div class="App"></div>')
})

test('token', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')

  app.setState({ current : 'page' })

  t.is(app.toString(), '<div class="App" aria-current="page"></div>')

  app.setState({ current : false })

  t.is(app.toString(), '<div class="App"></div>')

  app.setState({ current : true })

  t.is(app.toString(), '<div class="App" aria-current="true"></div>')
})
