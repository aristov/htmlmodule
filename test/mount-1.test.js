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

class Parent extends ElemType
{
  static class = 'Parent'

  state = {
    step : 0,
  }

  render() {
    const props = this.props
    switch(this.state.step) {
      case 0:
        return props.childrenA
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

test('test #1', t => {
  mountA = sinon.spy()
  mountB = sinon.spy()
  const parent = Parent.render({
    childrenA : [],
  })

  t.is(parent.toString(), '<div class="Parent"></div>')
  t.is(mountA.callCount, 0)
  t.is(mountB.callCount, 0)

  parent.setState({ step : 1 })

  t.is(parent.toString(), '<div class="Parent"><div class="ChildA"></div></div>')
  t.is(mountA.callCount, 1)
  t.is(mountB.callCount, 0)

  parent.setState({ step : 2 })

  t.is(parent.toString(), '<div class="Parent"><div class="ChildA"></div><div class="ChildB"></div></div>')
  t.is(mountA.callCount, 1)
  t.is(mountB.callCount, 1)
})

test('test #2', t => {
  mountA = sinon.spy()
  mountB = sinon.spy()
  const parent = Parent.render({
    childrenA : undefined,
    keyA : 'A',
    keyB : 'B',
  })

  t.is(parent.toString(), '<div class="Parent"></div>')
  t.is(mountA.callCount, 0)
  t.is(mountB.callCount, 0)

  parent.setState({ step : 1 })

  t.is(parent.toString(), '<div class="Parent"><div class="ChildA"></div></div>')
  t.is(mountA.callCount, 1)
  t.is(mountB.callCount, 0)

  parent.setState({ step : 2 })

  t.is(parent.toString(), '<div class="Parent"><div class="ChildA"></div><div class="ChildB"></div></div>')
  t.is(mountA.callCount, 1)
  t.is(mountB.callCount, 1)
})
