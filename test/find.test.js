const test = require('ava')
const { ElemType } = require('..')

class Child extends ElemType
{
}

test('test #1', t => {
  class App extends ElemType
  {
    state = {
      step : 0,
    }

    render() {
      switch(this.state.step) {
        case 0:
          return [
            new ElemType('one'),
            child = new Child('two'),
            new ElemType('three'),
          ]
        case 1:
          return [
            new ElemType('one'),
            new ElemType([
              new ElemType('two'),
              new ElemType([
                child = new Child('three')
              ]),
            ]),
          ]
        default:
          return new ElemType('one')
      }
    }
  }
  let child
  const elem = App.render()

  t.is(elem.find(Child), child)
  t.is(elem.toString(), '<div class="App"><div>one</div><div class="Child">two</div><div>three</div></div>')

  elem.setState({ step : 1 })

  t.is(elem.find(Child), child)
  t.is(elem.toString(), '<div class="App"><div>one</div><div><div>two</div><div><div class="Child">three</div></div></div></div>')

  elem.setState({ step : -1 })

  t.is(elem.find(Child), null)
  t.is(elem.toString(), '<div class="App"><div>one</div></div>')
})

test('test #2', t => {
  class App extends ElemType
  {
    constructor(props) {
      super(props)
      this.children = null
    }
  }
  const elem = App.render(new Child('foobar'))
  const children = elem.find(Child)

  t.is(children, null)
  t.is(elem.toString(), '<div class="App"></div>')
})
