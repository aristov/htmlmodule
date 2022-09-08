const test = require('ava')
const { HtmlAudio, ElemType, PropType } = require('..')

test('test #1', t => {
  class App extends HtmlAudio
  {
    state = {
      volume : undefined
    }

    render() {
      if(this.state.volume !== undefined) {
        this.volume = this.state.volume
      }
    }
  }

  const app = App.render()

  t.is(app.node.volume, 1)

  app.setState({ volume : .5 })

  t.is(app.node.volume, .5)

  app.setState({ volume : undefined })

  t.is(app.node.volume, 1)
})

test('test #2', t => {
  class App extends ElemType
  {
    static props = {
      volume : PropType
    }

    state = {
      volume : undefined
    }

    render() {
      if(this.state.volume !== undefined) {
        this.volume = this.state.volume
      }
    }
  }

  const app = App.render({ tagName : 'video' })

  t.is(app.node.volume, 1)

  app.setState({ volume : .5 })

  t.is(app.node.volume, .5)

  app.setState({ volume : undefined })

  t.is(app.node.volume, 1)
})
