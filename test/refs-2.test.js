const test = require('ava')
const { ElemType } = require('..')

let parentA, parentB, parentC, parentD

class Child extends ElemType
{
  static class = 'Child'
}

class ParentA extends ElemType
{
  static class = 'ParentA'

  render() {
    return this._child = new Child('test')
  }
}

class ParentB extends ElemType
{
  static class = 'ParentB'

  render() {
    return this._child = new Child('test')
  }
}

class ParentC extends ElemType
{
  static class = 'ParentC'

  render() {
    return this._test = new Child('test')
  }
}

class ParentD extends ElemType
{
  static class = 'ParentD'

  render() {
    return new ElemType(this._test = new Child('test'))
  }
}

class App extends ElemType
{
  static class = 'App'

  state = {
    step : 0,
  }

  render() {
    const step = this.state.step
    switch(step) {
      case 0:
        return parentA = new ParentA
      case 1:
        return parentB = new ParentB
      case 2:
        return parentC = new ParentC
      case 3:
        return parentD = new ParentD
    }
  }
}

test('test #1', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"><div class="ParentA"><div class="Child">test</div></div></div>')
  t.is(app.children[0], parentA)
  t.is(parentA._child, parentA.children[0])

  app.setState({ step : 1 })

  t.is(app.toString(), '<div class="App"><div class="ParentB"><div class="Child">test</div></div></div>')
  t.is(app.children[0], parentB)
  t.is(parentB._child, parentB.children[0])

  app.setState({ step : 2 })

  t.is(app.toString(), '<div class="App"><div class="ParentC"><div class="Child">test</div></div></div>')
  t.is(app.children[0], parentC)
  t.is(parentC._test, parentC.children[0])

  app.setState({ step : 3 })

  t.is(app.toString(), '<div class="App"><div class="ParentD"><div><div class="Child">test</div></div></div></div>')
  t.is(app.children[0], parentD)
  t.is(parentD._test, parentD.children[0].children[0])
})
