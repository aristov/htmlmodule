const test = require('ava')
const sinon = require('sinon')
const { document } = require('xwindow')
const { ElemType } = require('..')

test.beforeEach(t => {
  const childInit = sinon.spy()
  const parentInit = sinon.spy()
  class Child extends ElemType
  {
    init() {
      childInit.apply(this, arguments)
    }
  }
  class Parent extends ElemType
  {
    init() {
      parentInit.apply(this, arguments)
    }
  }
  t.context = { Child, Parent, childInit, parentInit }
})

test('parentNode', t => {
  const { Child, Parent, childInit, parentInit } = t.context
  const parentNode = document.createElement('body')
  const child = new Child
  const parent = Parent.render(child, parentNode)

  t.is(childInit.callCount, 1)
  t.is(childInit.getCall(0).thisValue, child)

  t.is(parentInit.callCount, 1)
  t.is(parentInit.getCall(0).thisValue, parent)

  t.is(parent.node.parentNode, parentNode)
  t.is(parent.toString(), '<div class="Parent"><div class="Child"></div></div>')
})

test('node', t => {
  const { Child, Parent, childInit, parentInit } = t.context
  const node = document.createElement('div')
  const child = new Child
  const parent = Parent.render({ node, children : child })

  t.is(childInit.callCount, 1)
  t.is(childInit.getCall(0).thisValue, child)

  t.is(parentInit.callCount, 1)
  t.is(parentInit.getCall(0).thisValue, parent)

  t.is(parent.node, node)
  t.is(parent.toString(), '<div class="Parent"><div class="Child"></div></div>')
})
