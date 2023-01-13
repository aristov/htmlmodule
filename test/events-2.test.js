const test = require('ava')
const sinon = require('sinon')
const { ElemType, HtmlSpan } = require('..')

const onclick1 = sinon.spy()
const onclick2 = sinon.spy()
const onclick3 = sinon.spy()
const onchange1 = sinon.spy()
const onchange2 = sinon.spy()
const onchange3 = sinon.spy()

class Child extends ElemType
{
  static class = 'Child'

  render() {
    switch(this.props.step) {
      case 0:
        this.on('click', onclick1)
        break
      case 1:
        this.off('click', onclick1)
        break
    }
    return new HtmlSpan(this.props.children)
  }

  init() {
    this.on('change', onchange1)
  }
}

class Parent extends ElemType
{
  static class = 'Parent'

  state = {
    text : 'foo',
    step : 0,
  }

  render() {
    const { step, text } = this.state
    switch(step) {
      case 0:
        this.on('click', onclick3)
        return new Child({
          step,
          children : text,
          onclick : onclick2,
          onchange : onchange2,
        })
      case 1:
        this.off('click', onclick3)
        return new Child({
          step,
          children : text,
        })
    }
  }

  init() {
    this.on('change', onchange3)
  }
}

test('test #1', t => {
  const parent = Parent.render()
  let child = parent.children[0]
  let node = child.node

  t.is(parent.toString(), '<div class="Parent"><div class="Child"><span>foo</span></div></div>')

  child.emit('click')

  t.is(onclick1.callCount, 1)
  t.is(onclick1.getCall(0).thisValue, child)
  t.is(onclick1.args[0][0].target, child)
  t.is(onclick1.args[0][1], child)
  t.true(onclick1.calledImmediatelyBefore(onclick2))
  t.true(onclick1.calledBefore(onclick3))

  t.is(onclick2.callCount, 1)
  t.is(onclick2.getCall(0).thisValue, child)
  t.is(onclick2.args[0][0].target, child)
  t.is(onclick2.args[0][1], child)
  t.true(onclick2.calledImmediatelyAfter(onclick1))
  t.true(onclick2.calledImmediatelyBefore(onclick3))

  t.is(onclick3.callCount, 1)
  t.is(onclick3.getCall(0).thisValue, parent)
  t.is(onclick3.args[0][0].target, child)
  t.is(onclick3.args[0][1], child)
  t.true(onclick3.calledImmediatelyAfter(onclick2))
  t.true(onclick3.calledAfter(onclick1))

  child.emit('change')

  t.is(onchange1.callCount, 1)
  t.is(onchange2.callCount, 1)
  t.is(onchange3.callCount, 1)

  t.true(onchange1.calledImmediatelyBefore(onchange2))
  t.true(onchange1.calledBefore(onchange3))
  t.true(onchange2.calledImmediatelyAfter(onchange1))
  t.true(onchange2.calledImmediatelyBefore(onchange3))
  t.true(onchange3.calledImmediatelyAfter(onchange2))
  t.true(onchange3.calledAfter(onchange1))

  parent.setState({ text : 'bar' })

  t.is(parent.toString(), '<div class="Parent"><div class="Child"><span>bar</span></div></div>')
  t.is(child.node, node)

  child = parent.children[0]
  child.emit('click')

  t.is(onclick1.callCount, 2)
  t.is(onclick1.getCall(1).thisValue, child)
  t.is(onclick1.args[1][0].target, child)
  t.is(onclick1.args[1][1], child)

  t.is(onclick2.callCount, 2)
  t.is(onclick2.getCall(1).thisValue, child)
  t.is(onclick2.args[1][0].target, child)
  t.is(onclick2.args[1][1], child)

  t.is(onclick3.callCount, 2)
  t.is(onclick3.getCall(1).thisValue, parent)
  t.is(onclick3.args[1][0].target, child)
  t.is(onclick3.args[1][1], child)

  child.emit('change')

  t.is(onchange1.callCount, 2)
  t.is(onchange2.callCount, 2)
  t.is(onchange3.callCount, 2)

  parent.setState({ step : 1 })

  child.emit('click')

  t.is(parent.toString(), '<div class="Parent"><div class="Child"><span>bar</span></div></div>')
  t.is(onclick1.callCount, 2)
  t.is(onclick2.callCount, 2)
  t.is(onclick3.callCount, 2)

  child.emit('change')

  t.is(onchange1.callCount, 3)
  t.is(onchange2.callCount, 2)
  t.is(onchange3.callCount, 3)
})
