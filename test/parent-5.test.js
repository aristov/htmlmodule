const test = require('ava')
const { ElemType } = require('..')

class Child extends ElemType
{
  static class = 'Child'

  render() {
    this.parent = new Wrapper({
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
  }

  render() {
    return new Child({
      pid : this.state.pid,
      children : this.state.text,
    })
  }
}

test('test #1', t => {
  const elem = App.render()

  t.is(elem.toString(), '<div class="App"><div class="Wrapper" id="id1"><div class="Child">foo</div></div></div>')

  elem.setState({ text : 'bar', pid : 'id2' })

  t.is(elem.toString(), '<div class="App"><div class="Wrapper" id="id2"><div class="Child">bar</div></div></div>')
})
