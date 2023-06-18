import test from 'ava'
import { ElemType } from '../index.js'

class App extends ElemType
{
  static class = 'App'

  state = {
    hidden : null,
    checked : null,
    current : null,
  }

  render() {
    const state = this.state
    if(state.hidden !== null) {
      this.hidden = state.hidden
    }
    if(state.checked !== null) {
      this.checked = state.checked
    }
    if(state.current !== null) {
      this.current = state.current
    }
  }
}

test('applicable', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.hidden, undefined)

  app.setState({ hidden : true })

  t.is(app.toString(), '<div class="App" aria-hidden="true"></div>')
  t.is(app.hidden, true)

  app.setState({ hidden : false })

  t.is(app.toString(), '<div class="App" aria-hidden="false"></div>')
  t.is(app.hidden, false)

  app.setState({ hidden : undefined })

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.hidden, undefined)
})

test('tristate', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.checked, undefined)

  app.setState({ checked : true })

  t.is(app.toString(), '<div class="App" aria-checked="true"></div>')
  t.is(app.checked, true)

  app.setState({ checked : false })

  t.is(app.toString(), '<div class="App" aria-checked="false"></div>')
  t.is(app.checked, false)

  app.setState({ checked : 'mixed' })

  t.is(app.toString(), '<div class="App" aria-checked="mixed"></div>')
  t.is(app.checked, 'mixed')

  app.setState({ checked : undefined })

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.checked, undefined)
})

test('token', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.current, false)

  app.setState({ current : 'page' })

  t.is(app.toString(), '<div class="App" aria-current="page"></div>')
  t.is(app.current, 'page')

  app.setState({ current : false })

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app.current, false)

  app.setState({ current : true })

  t.is(app.toString(), '<div class="App" aria-current="true"></div>')
  t.is(app.current, true)

  app.setState({ current : true })

  t.is(app.toString(), '<div class="App" aria-current="true"></div>')
  t.is(app.current, true)
})
