import test from 'ava'
import sinon from 'sinon'
import { ElemType } from '../index.js'

let mountA, mountB

class ChildA extends ElemType
{
  static class = 'ChildA'

  mount() {
    mountA.apply(this, arguments)
  }
}

class ChildB extends ElemType
{
  static class = 'ChildB'

  mount() {
    mountB.apply(this, arguments)
  }
}

class ParentA extends ElemType
{
  static class = 'ParentA'
}

class ParentB extends ElemType
{
  static class = 'ParentB'

  render() {
    const props = this.props
    switch(props.step) {
      case 1:
        return new ChildA({ key : props.keyA })
      case 2:
        return [
          new ChildA({ key : props.keyA }),
          new ChildB({ key : props.keyB }),
        ]
    }
  }
}

class App extends ElemType
{
  static class = 'App'

  state = {
    step : 0,
  }

  render() {
    const props = this.props
    const step = this.state.step
    switch(step) {
      case 0:
        return new ParentA
      case 1:
      case 2:
        return new ParentB({
          keyA : props.keyA,
          keyB : props.keyB,
          step,
        })
    }
  }
}

test('test #1', t => {
  mountA = sinon.spy()
  mountB = sinon.spy()
  const app = App.render()

  t.is(app.toString(), '<div class="App"><div class="ParentA"></div></div>')
  t.is(mountA.callCount, 0)
  t.is(mountB.callCount, 0)

  app.setState({ step : 1 })

  t.is(app.toString(), '<div class="App"><div class="ParentB"><div class="ChildA"></div></div></div>')
  t.is(mountA.callCount, 1)
  t.is(mountB.callCount, 0)

  app.setState({ step : 2 })

  t.is(app.toString(), '<div class="App"><div class="ParentB"><div class="ChildA"></div><div class="ChildB"></div></div></div>')
  t.is(mountA.callCount, 1)
  t.is(mountB.callCount, 1)
})

test('test #2', t => {
  mountA = sinon.spy()
  mountB = sinon.spy()
  const app = App.render({
    keyA : 'A',
    keyB : 'B',
  })

  t.is(app.toString(), '<div class="App"><div class="ParentA"></div></div>')
  t.is(mountA.callCount, 0)
  t.is(mountB.callCount, 0)

  app.setState({ step : 1 })

  t.is(app.toString(), '<div class="App"><div class="ParentB"><div class="ChildA"></div></div></div>')
  t.is(mountA.callCount, 1)
  t.is(mountB.callCount, 0)

  app.setState({ step : 2 })

  t.is(app.toString(), '<div class="App"><div class="ParentB"><div class="ChildA"></div><div class="ChildB"></div></div></div>')
  t.is(mountA.callCount, 1)
  t.is(mountB.callCount, 1)
})
