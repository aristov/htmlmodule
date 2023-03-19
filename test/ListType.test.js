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
    const state = this.state
    if(state.relevant !== null) {
      this.relevant = this.state.relevant
    }
    if(state.controls !== null) {
      this.controls = this.state.controls
    }
  }
}

test('token list', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')
  t.deepEqual(app.relevant, ['additions', 'text'])

  app.setState({ relevant : ['additions', 'removals'] })

  t.is(app.toString(), '<div class="App" aria-relevant="additions removals"></div>')
  t.deepEqual(app.relevant, ['additions', 'removals'])

  app.setState({ relevant : [] })

  t.is(app.toString(), '<div class="App"></div>')
  t.deepEqual(app.relevant, ['additions', 'text'])

  app.setState({ relevant : 'all' })

  t.is(app.toString(), '<div class="App" aria-relevant="all"></div>')
  t.deepEqual(app.relevant, ['all'])

  app.setState({ relevant : 'all' })

  t.is(app.toString(), '<div class="App" aria-relevant="all"></div>')
  t.deepEqual(app.relevant, ['all'])

  app.setState({ relevant : ['additions', 'text'] })

  t.is(app.toString(), '<div class="App"></div>')
  t.deepEqual(app.relevant, ['additions', 'text'])
})

test('idref list', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"></div>')
  t.deepEqual(app.controls, [])

  app.setState({ controls : ['id1', 'id2', 'id3'] })

  t.is(app.toString(), '<div class="App" aria-controls="id1 id2 id3"></div>')
  t.deepEqual(app.controls, ['id1', 'id2', 'id3'])

  app.setState({ controls : [] })

  t.is(app.toString(), '<div class="App"></div>')
  t.deepEqual(app.controls, [])

  app.setState({ controls : 'id4' })

  t.is(app.toString(), '<div class="App" aria-controls="id4"></div>')
  t.deepEqual(app.controls, ['id4'])

  app.setState({ controls : null })

  t.is(app.toString(), '<div class="App"></div>')
  t.deepEqual(app.controls, [])
})
