const test = require('ava')
const sinon = require('sinon')
const { document } = require('xwindow')
const { ElemType } = require('..')

test.beforeEach(t => {
  const fooInit = sinon.spy()
  const barInit = sinon.spy()
  class Foo extends ElemType
  {
    init() {
      fooInit.apply(this, arguments)
    }
  }
  class Bar extends ElemType
  {
    init() {
      barInit.apply(this, arguments)
    }
  }
  t.context = { Foo, Bar, fooInit, barInit }
})

test('parentNode', t => {
  const { Foo, Bar, fooInit, barInit } = t.context
  const parentNode = document.createElement('body')
  const foo = new Foo
  const bar = Bar.render(foo, parentNode)

  t.is(fooInit.callCount, 1)
  t.is(fooInit.getCall(0).thisValue, foo)

  t.is(barInit.callCount, 1)
  t.is(barInit.getCall(0).thisValue, bar)

  t.is(bar.node.parentNode, parentNode)
  t.is(bar.toString(), '<div class="Bar"><div class="Foo"></div></div>')
})

test('node', t => {
  const { Foo, Bar, fooInit, barInit } = t.context
  const node = document.createElement('div')
  const foo = new Foo
  const bar = Bar.render({ node, children : foo })

  t.is(fooInit.callCount, 1)
  t.is(fooInit.getCall(0).thisValue, foo)

  t.is(barInit.callCount, 1)
  t.is(barInit.getCall(0).thisValue, bar)

  t.is(bar.node, node)
  t.is(bar.toString(), '<div class="Bar"><div class="Foo"></div></div>')
})
