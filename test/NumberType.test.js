const test = require('ava')
const { ElemType } = require('..')

class App extends ElemType
{
  static class = 'App'

  state = {
    valueNow : null,
  }

  render() {
    if(this.state.valueNow !== null) {
      this.valueNow = this.state.valueNow
    }
  }
}

test('test #1', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.valueNow, 0)

  app.setState({ valueNow : 42 })

  t.is(app.toString(), '<div class="App" aria-valuenow="42"></div>')
  t.is(app.valueNow, 42)

  app.setState({ valueNow : null })

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.valueNow, 0)
})