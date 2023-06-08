import test from 'ava'
import sinon from 'sinon'
import window from 'xwindow'
import { HtmlDiv, HtmlA, HtmlB, HtmlBr, HtmlSpan } from '../index.js'

const { DocumentFragment } = window

const parentInit = sinon.spy()
const parentMount = sinon.spy()
const parentUpdate = sinon.spy()
const parentDestroy = sinon.spy()
const childInit = sinon.spy()
const childMount = sinon.spy()
const childUpdate = sinon.spy()
const childDestroy = sinon.spy()

class Child extends HtmlSpan
{
  static class = 'Child'

  state = { asd : 'zxc' }

  init() {
    childInit.call(this)
  }

  mount() {
    childMount.call(this)
  }

  update(prevProps, prevState) {
    childUpdate.call(this, prevProps, prevState)
  }

  destroy() {
    childDestroy.call(this)
  }
}

class Parent extends HtmlDiv
{
  static class = 'Parent'

  state = { step : 0 }

  render() {
    if(this.state.step === 1) {
      return [
        new HtmlA('bar'),
        new HtmlDiv(new HtmlSpan('baz')),
        new HtmlBr,
        new HtmlB('bat'),
      ]
    }
    if(this.state.step === 2) {
      return [
        new HtmlB('bat'),
        new HtmlDiv(new Child('baz')),
        new HtmlBr,
        new HtmlA('bar'),
      ]
    }
    if(this.state.step === 3) {
      return [
        new HtmlB('bat'),
        new HtmlDiv(new Child('qwe')),
      ]
    }
    return 'foo'
  }

  init() {
    parentInit.call(this)
  }

  mount() {
    parentMount.call(this)
  }

  update(prevProps, prevState) {
    parentUpdate.call(this, prevProps, prevState)
  }

  destroy() {
    parentDestroy.call(this)
  }
}

test('test #1', t => {
  const foo = Parent.render({ qaz : 'wsx' }, new DocumentFragment)

  t.is(parentInit.callCount, 1)
  t.is(parentMount.callCount, 1)
  t.is(parentUpdate.callCount, 0)
  t.is(parentDestroy.callCount, 0)

  t.is(childInit.callCount, 0)
  t.is(childMount.callCount, 0)
  t.is(childUpdate.callCount, 0)
  t.is(childDestroy.callCount, 0)

  t.is(foo.toString(), '<div class="Parent">foo</div>')

  foo.setState({ step : 1 })

  t.is(parentInit.callCount, 1)
  t.is(parentMount.callCount, 1)
  t.is(parentUpdate.callCount, 1)
  t.is(parentUpdate.args[0][0], foo.props)
  t.deepEqual(parentUpdate.args[0][1], { step : 0 })
  t.is(parentDestroy.callCount, 0)

  t.is(childInit.callCount, 0)
  t.is(childMount.callCount, 0)
  t.is(childUpdate.callCount, 0)
  t.is(childDestroy.callCount, 0)

  t.is(foo.toString(), '<div class="Parent"><a>bar</a><div><span>baz</span></div><br><b>bat</b></div>')

  foo.setState({ step : 2 })

  t.is(parentInit.callCount, 1)
  t.is(parentMount.callCount, 1)
  t.is(parentUpdate.callCount, 2)
  t.deepEqual(parentUpdate.args[1][1], { step : 1 })
  t.is(parentDestroy.callCount, 0)

  t.is(childInit.callCount, 1)
  t.is(childMount.callCount, 1)
  t.is(childUpdate.callCount, 0)
  t.is(childDestroy.callCount, 0)

  t.is(foo.toString(), '<div class="Parent"><b>bat</b><div><span class="Child">baz</span></div><br><a>bar</a></div>')

  foo.setState({ step : 3 })

  t.is(parentInit.callCount, 1)
  t.is(parentMount.callCount, 1)
  t.is(parentUpdate.callCount, 3)
  t.deepEqual(parentUpdate.args[2][1], { step : 2 })
  t.is(parentDestroy.callCount, 0)

  t.is(childInit.callCount, 1)
  t.is(childMount.callCount, 1)
  t.is(childUpdate.callCount, 1)
  t.is(childDestroy.callCount, 0)
  t.deepEqual(childUpdate.args[0][0], { children : 'baz' })
  t.deepEqual(childUpdate.args[0][1], { asd : 'zxc' })
  t.is(foo.toString(), '<div class="Parent"><b>bat</b><div><span class="Child">qwe</span></div></div>')

  foo.setState({ step : 0 })

  t.is(parentInit.callCount, 1)
  t.is(parentMount.callCount, 1)
  t.is(parentUpdate.callCount, 4)
  t.deepEqual(parentUpdate.args[3][1], { step : 3 })
  t.is(parentDestroy.callCount, 0)

  t.is(childInit.callCount, 1)
  t.is(childMount.callCount, 1)
  t.is(childUpdate.callCount, 1)
  t.is(childDestroy.callCount, 1)
  t.is(foo.toString(), '<div class="Parent">foo</div>')

  foo.setState({ step : -1 })

  t.is(parentInit.callCount, 1)
  t.is(parentDestroy.callCount, 0)
  t.is(childInit.callCount, 1)
  t.is(childDestroy.callCount, 1)
})
