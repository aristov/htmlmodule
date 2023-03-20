const test = require('ava')
const { ElemType } = require('..')

class App extends ElemType
{
  static class = 'App'

  state = {
    disabled : false,
  }

  render() {
    this.disabled = this.state.disabled
  }
}

test('test #1', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.disabled, false)

  app.setState({ disabled : true })

  t.is(app.toString(), '<div class="App" aria-disabled="true"></div>')
  t.is(app.disabled, true)

  app.setState({ disabled : false })

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.disabled, false)
})
