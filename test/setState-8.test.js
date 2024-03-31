import test from 'ava'
import { ElemType } from '../index.js'

class App extends ElemType
{
  static class = 'App'

  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return new ChildA([
          new ElemType({
            key : 'A',
            children : 'A',
          }),
        ])
      case 1:
        return new ChildB([
          new ElemType({
            key : 'B',
            children : 'B',
          }),
        ])
    }
  }
}

class ChildA extends ElemType
{
  static class = 'ChildA'

  state = {
    text : 'foo',
  }

  assign() {
    this.classList = this.state.text
  }
}

class ChildB extends ElemType
{
  static class = 'ChildB'
}

test('test #1', t => {
  const app = App.render()
  const childA = app.find(ChildA)
  const handler = () => {
    childA.setState({ text : 'bar' })
  }

  t.is(app.toString(), '<div class="App"><div class="ChildA foo"><div>A</div></div></div>')

  app.setState({ step : 1 })

  t.is(app.toString(), '<div class="App"><div class="ChildB"><div>B</div></div></div>')

  t.notThrows(handler)
})
