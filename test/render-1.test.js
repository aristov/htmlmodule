import test from 'ava'
import sinon from 'sinon'
import window from '../lib/window.cjs'
import { ElemType } from '../index.js'

const { document } = window

test('parentNode', t => {
  const childMount = sinon.spy()
  const parentMount = sinon.spy()

  class Child extends ElemType
  {
    static class = 'Child'

    mount() {
      childMount.apply(this, arguments)
    }
  }

  class Parent extends ElemType
  {
    static class = 'Parent'

    mount() {
      parentMount.apply(this, arguments)
    }
  }

  const parentNode = document.createElement('body')
  const child = new Child
  const parent = Parent.render(child, parentNode)

  t.is(childMount.callCount, 1)
  t.is(childMount.getCall(0).thisValue, child)

  t.is(parentMount.callCount, 1)
  t.is(parentMount.getCall(0).thisValue, parent)

  t.is(parent.node.parentNode, parentNode)
  t.is(parent.toString(), '<div class="Parent"><div class="Child"></div></div>')
})

test('node', t => {
  const childMount = sinon.spy()
  const parentMount = sinon.spy()

  class Child extends ElemType
  {
    static class = 'Child'

    mount() {
      childMount.apply(this, arguments)
    }
  }

  class Parent extends ElemType
  {
    static class = 'Parent'

    mount() {
      parentMount.apply(this, arguments)
    }
  }

  const node = document.createElement('div')
  const child = new Child
  const parent = Parent.render({ node, children : child })

  t.is(childMount.callCount, 1)
  t.is(childMount.getCall(0).thisValue, child)

  t.is(parentMount.callCount, 1)
  t.is(parentMount.getCall(0).thisValue, parent)

  t.is(parent.node, node)
  t.is(parent.toString(), '<div class="Parent"><div class="Child"></div></div>')
})
