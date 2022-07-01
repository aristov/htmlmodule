const test = require('ava')
const { ElemType } = require('..')

let child1, child2, child3

class Parent extends ElemType
{
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
              child3 = new Child('three')
            ]),
          ]),
        ]
      default:
        return new ElemType('one')
    }
  }
}

class Child extends ElemType
{
}

test('test #1', t => {
  let result
  const elem = Parent.render()
  result = elem.findAll(Child)

  t.is(result.length, 1)
  t.is(result[0], child1)
  t.is(elem.toString(), '<div class="Parent"><div>one</div><div class="Child">two</div><div>three</div></div>')

  elem.setState({ step : 1 })
  result = elem.findAll(Child)

  t.is(result.length, 3)
  t.is(result[0], child1)
  t.is(result[1], child2)
  t.is(result[2], child3)
  t.is(elem.toString(), '<div class="Parent"><div class="Child">one</div><div><div class="Child">two</div><div><div class="Child">three</div></div></div></div>')

  elem.setState({ step : -1 })
  result = elem.findAll(Child)

  t.is(result.length, 0)
  t.is(elem.toString(), '<div class="Parent"><div>one</div></div>')
})
