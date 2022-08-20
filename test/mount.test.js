const test = require('ava')
const sinon = require('sinon')
const { ElemType } = require('..')

test('test #1', t => {
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

  const parent = Parent.render()

  t.is(parent.toString(), '<div class="Parent"></div>')
  t.is(childMount.callCount, 0)

  parent.setState({ step : 1 })

  t.is(parent.toString(), '<div class="Parent"><div class="Child"></div></div>')
  t.is(childMount.callCount, 1)
})

test('test #2', t => {
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
          return undefined
        case 1:
          return new Child
      }
    }
  }

  const parent = Parent.render()

  t.is(parent.toString(), '<div class="Parent"></div>')
  t.is(childMount.callCount, 0)

  parent.setState({ step : 1 })

  t.is(parent.toString(), '<div class="Parent"><div class="Child"></div></div>')
  t.is(childMount.callCount, 1)
})
