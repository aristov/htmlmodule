import test from 'ava'
import { ElemType } from '../index.js'

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
  const child1 = new Child({ id : 'id1' })
  const child2 = new Child({ id : 'id2' })
  const child3 = new Child({ id : 'id3' })
  const child4 = new Child({ id : 'id4', hidden : true })
  const child5 = new Child({ id : 'id5' })
  const elem = ElemType.render([
    child1,
    new ElemType([
      child2,
      child3,
      child4,
    ]),
    child5,
  ])

  t.is(elem.toString(),
    '<div>' +
    '<div class="Child" id="id1"></div>' +
    '<div>' +
    '<div class="Child" id="id2"></div>' +
    '<div class="Child" id="id3"></div>' +
    '<div class="Child" id="id4" aria-hidden="true"></div>' +
    '</div>' +
    '<div class="Child" id="id5"></div>' +
    '</div>')
  t.is(elem.find(Child, item => item.id === 'id1'), child1)
  t.is(elem.find(Child, item => item.id === 'id2'), child2)
  t.is(elem.find(Child, item => item.id === 'id3'), child3)
  t.is(elem.find(Child, item => item.id === 'id4'), child4)
  t.is(elem.find(Child, item => item.id === 'id5'), child5)
  t.is(elem.find(Child, ['id', 'id1']), child1)
  t.is(elem.find(Child, ['id', 'id2']), child2)
  t.is(elem.find(Child, ['id', 'id3']), child3)
  t.is(elem.find(Child, ['id', 'id4']), child4)
  t.is(elem.find(Child, ['id', 'id5']), child5)
  t.is(elem.find(Child, 'hidden'), child4)
})
