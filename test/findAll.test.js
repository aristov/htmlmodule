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
            child1 = new Child('two'),
            new ElemType('three'),
          ]
        case 1:
          return [
            child1 = new Child('one'),
            new ElemType([
              child2 = new Child('two'),
              new ElemType([
                child3 = new Child('three'),
              ]),
            ]),
          ]
        default:
          return new ElemType('one')
      }
    }
  }

  let child1, child2, child3
  let result
  const elem = App.render()
  result = elem.findAll(Child)

  t.is(elem.toString(), '<div class="App"><div>one</div><div class="Child">two</div><div>three</div></div>')
  t.is(result.length, 1)
  t.is(result[0], child1)

  elem.setState({ step : 1 })
  result = elem.findAll(Child)

  t.is(elem.toString(), '<div class="App"><div class="Child">one</div><div><div class="Child">two</div><div><div class="Child">three</div></div></div></div>')
  t.is(result.length, 3)
  t.is(result[0], child1)
  t.is(result[1], child2)
  t.is(result[2], child3)

  elem.setState({ step : -1 })
  result = elem.findAll(Child)

  t.is(elem.toString(), '<div class="App"><div>one</div></div>')
  t.is(result.length, 0)
})

test('filter', t => {
  const children = [
    new Child({ className : 'foo' }),
    new Child({ className : 'foo' }),
    new Child({ className : 'foo' }),
    new Child({ className : 'foo' }),
  ]
  const elem = ElemType.render([
    children[0],
    new Child({ className : 'bar' }),
    new ElemType([
      children[1],
      new Child({ className : 'bat' }),
      children[2],
    ]),
    new Child({ className : 'baz' }),
    children[3],
  ])
  const result = elem.findAll(Child, item => item.className === 'foo')

  t.is(elem.toString(), '<div>' +
    '<div class="foo"></div>' +
    '<div class="bar"></div>' +
    '<div>' +
    '<div class="foo"></div>' +
    '<div class="bat"></div>' +
    '<div class="foo"></div>' +
    '</div>' +
    '<div class="baz"></div>' +
    '<div class="foo"></div>' +
    '</div>')
  t.is(result[0], children[0])
  t.is(result[1], children[1])
  t.is(result[2], children[2])
  t.is(result[3], children[3])
})
