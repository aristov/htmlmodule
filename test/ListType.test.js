const test = require('ava')
const { ElemType } = require('..')

class App extends ElemType
{
  static class = 'App'

  state = {
    relevant : null,
    controls : null,
  }

  render() {
    this.relevant = this.state.relevant
    this.controls = this.state.controls
  }
}

test('token list', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')

  app.setState({ relevant : ['additions', 'removals'] })

  t.is(app.toString(), '<div class="App" aria-relevant="additions removals"></div>')

  app.setState({ relevant : [] })

  t.is(app.toString(), '<div class="App"></div>')

  app.setState({ relevant : 'all' })

  t.is(app.toString(), '<div class="App" aria-relevant="all"></div>')

  app.setState({ relevant : 'all' })

  t.is(app.toString(), '<div class="App" aria-relevant="all"></div>')

  app.setState({ relevant : ['additions', 'text'] })

  t.is(app.toString(), '<div class="App"></div>')
})

test('idref list', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')

  app.setState({ controls : ['id1', 'id2', 'id3'] })

  t.is(app.toString(), '<div class="App" aria-controls="id1 id2 id3"></div>')

  app.setState({ controls : [] })

  t.is(app.toString(), '<div class="App"></div>')

  app.setState({ controls : 'id4' })

  t.is(app.toString(), '<div class="App" aria-controls="id4"></div>')

  app.setState({ controls : null })

  t.is(app.toString(), '<div class="App"></div>')
})
