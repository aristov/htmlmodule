const test = require('ava')
const { ElemType, BooleanType } = require('..')

class App extends ElemType
{
  static class = 'App'

  static props = {
    disabled : BooleanType.define('aria-disabled'),
  }

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

  app.setState({ disabled : true })

  t.is(app.toString(), '<div class="App" aria-disabled="true"></div>')

  app.setState({ disabled : false })

  t.is(app.toString(), '<div class="App"></div>')
})
