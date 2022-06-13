const test = require('ava')
const sinon = require('sinon')
const { HtmlDiv, HtmlSpan } = require('..')

const onclick1 = sinon.spy()
const onclick2 = sinon.spy()
const onclick3 = sinon.spy()

class Child extends HtmlDiv
{
  render() {
    this.on('click', onclick1)
    return new HtmlSpan(this.props.children)
  }
}

class Parent extends HtmlDiv
{
  state = { text : 'foo' }

  render() {
    this.on('click', onclick2)
    return this.refs.child = new Child({
      children : this.state.text,
      onclick : onclick3,
    })
  }
}

test('setState', t => {
  const parent = Parent.render()
  const child = parent.refs.child
  const node = child.node

  t.is(parent.toString(), '<div class="Parent"><div class="Child"><span>foo</span></div></div>')

  child.click()

  t.true(onclick1.calledOnce)
  t.is(onclick1.getCall(0).thisValue, child)
  t.is(onclick1.args[0][0].target, child.node)
  t.is(onclick1.args[0][1], child)

  t.true(onclick2.calledOnce)
  t.is(onclick2.getCall(0).thisValue, parent)
  t.is(onclick2.args[0][0].target, child.node)
  t.is(onclick2.args[0][1], child)

  t.true(onclick3.calledOnce)
  t.is(onclick3.getCall(0).thisValue, child)
  t.is(onclick3.args[0][0].target, child.node)
  t.is(onclick3.args[0][1], child)

  parent.setState({ text : 'bar' })

  t.is(parent.toString(), '<div class="Parent"><div class="Child"><span>bar</span></div></div>')
  t.is(parent.refs.child.node, node)
  t.is(parent.refs.child, child)

  parent.refs.child.click()

  t.true(onclick1.calledTwice)
  t.is(onclick1.getCall(1).thisValue, parent.refs.child)
  t.is(onclick1.args[1][0].target, parent.refs.child.node)
  t.is(onclick1.args[1][1], parent.refs.child)

  t.true(onclick2.calledTwice)
  t.is(onclick2.getCall(1).thisValue, parent)
  t.is(onclick2.args[1][0].target, parent.refs.child.node)
  t.is(onclick2.args[1][1], parent.refs.child)

  t.true(onclick3.calledTwice)
  t.is(onclick3.getCall(1).thisValue, parent.refs.child)
  t.is(onclick3.args[1][0].target, parent.refs.child.node)
  t.is(onclick3.args[1][1], parent.refs.child)

  parent.destroy()
})
