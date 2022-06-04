const test = require('ava')
const sinon = require('sinon')
const { document } = require('xwindow')
const { HtmlDiv } = require('..')

test.beforeEach(t => {
  const fooDidMount = sinon.spy()
  const barDidMount = sinon.spy()
  class Foo extends HtmlDiv
  {
    componentDidMount() {
      fooDidMount.apply(this, arguments)
    }
  }
  class Bar extends HtmlDiv
  {
    componentDidMount() {
      barDidMount.apply(this, arguments)
    }
  }
  t.context = { Foo, Bar, fooDidMount, barDidMount }
})

test('parentNode', t => {
  const { Foo, Bar, fooDidMount, barDidMount } = t.context
  const parentNode = document.createElement('body')
  const foo = new Foo
  const bar = Bar.render(foo, parentNode)

  t.true(fooDidMount.calledOnce)
  t.is(fooDidMount.getCall(0).thisValue, foo)

  t.true(barDidMount.calledOnce)
  t.is(barDidMount.getCall(0).thisValue, bar)

  t.is(bar.node.parentNode, parentNode)
  t.is(bar.toString(), '<div class="Bar"><div class="Foo"></div></div>')
})

test('node', t => {
  const { Foo, Bar, fooDidMount, barDidMount } = t.context
  const node = document.createElement('div')
  const foo = new Foo
  const bar = Bar.render({ node, children : foo })

  t.true(fooDidMount.calledOnce)
  t.is(fooDidMount.getCall(0).thisValue, foo)

  t.true(barDidMount.calledOnce)
  t.is(barDidMount.getCall(0).thisValue, bar)

  t.is(bar.node, node)
  t.is(bar.toString(), '<div class="Bar"><div class="Foo"></div></div>')
})
