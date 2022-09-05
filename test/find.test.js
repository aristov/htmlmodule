const test = require('ava')
const { ElemType } = require('..')

class Child extends ElemType
{
  static class = 'Child'
}

test('test #1', t => {
  class App extends ElemType
  {
    static class = 'App'

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
                child = new Child('three'),
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

  t.is(elem.toString(), '<div class="App"><div>one</div><div class="Child">two</div><div>three</div></div>')
  t.is(elem.find(Child), child)

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="App"><div>one</div><div><div>two</div><div><div class="Child">three</div></div></div></div>')
  t.is(elem.find(Child), child)

  elem.setState({ step : -1 })

  t.is(elem.toString(), '<div class="App"><div>one</div></div>')
  t.is(elem.find(Child), null)
})

test('filter', t => {
  const child3 = new Child({ id : 'id3' })
  const elem = ElemType.render([
    new Child({ id : 'id1' }),
    new ElemType([
      new Child({ id : 'id2' }),
      child3,
      new Child({ id : 'id4' }),
    ]),
    new Child({ id : 'id5' }),
  ])
  const result = elem.find(Child, item => item.id === 'id3')

  t.is(elem.toString(),
    '<div>' +
    '<div class="Child" id="id1"></div>' +
    '<div>' +
    '<div class="Child" id="id2"></div>' +
    '<div class="Child" id="id3"></div>' +
    '<div class="Child" id="id4"></div>' +
    '</div>' +
    '<div class="Child" id="id5"></div>' +
    '</div>')
  t.is(result, child3)
})
