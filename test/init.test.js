const test = require('ava')
const sinon = require('sinon')
const { ElemType } = require('..')

const childMount = sinon.spy()

class Child extends ElemType
{
  mount() {
    childMount.apply(this, arguments)
  }
}

class Parent extends ElemType
{
  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return []
      case 1:
        return new Child
    }
  }
}

test('test #1', t => {
  const parent = Parent.render()

  t.is(childMount.callCount, 0)
  t.is(parent.toString(), '<div class="Parent"></div>')

  parent.setState({ step : 1 })

  t.is(childMount.callCount, 1)
  t.is(parent.toString(), '<div class="Parent"><div class="Child"></div></div>')
})
