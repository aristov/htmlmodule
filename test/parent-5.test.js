const test = require('ava')
const { ElemType } = require('..')

class ChildA extends ElemType
{
  static class = 'ChildA'

  render() {
    this.parent = new Wrapper({
      id : this.props.pid,
      children : this,
    })
    return this.props.children
  }
}

class ChildB extends ElemType
{
  static class = 'ChildB'

  render() {
    this.parent = new ElemType({
      id : this.props.pid,
      children : this,
    })
    return this.props.children
  }
}

class Wrapper extends ElemType
{
  static class = 'Wrapper'
}

class App extends ElemType
{
  static class = 'App'

  state = {
    text : 'foo',
    pid : 'id1',
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return new ChildA({
          pid : this.state.pid,
          children : this.state.text,
        })
      case 1:
        return new ChildB({
          pid : this.state.pid,
          children : this.state.text,
        })
    }
  }
}

test('test #1', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"><div class="Wrapper" id="id1"><div class="ChildA">foo</div></div></div>')

  app.setState({ text : 'bar', pid : 'id2' })

  t.is(app.toString(), '<div class="App"><div class="Wrapper" id="id2"><div class="ChildA">bar</div></div></div>')

  app.setState({ step : 1 })

  t.is(app.toString(), '<div class="App"><div id="id2"><div class="ChildB">bar</div></div></div>')
})
