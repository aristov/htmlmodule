const test = require('ava')
const sinon = require('sinon')
const { HtmlDiv, HtmlA, HtmlB, HtmlBr, HtmlSpan, window } = require('..')
const { DocumentFragment } = window

const fooInit = sinon.spy()
const fooUpdate = sinon.spy()
const fooDestroy = sinon.spy()
const bazInit = sinon.spy()
const bazUpdate = sinon.spy()
const bazDestroy = sinon.spy()

class Baz extends HtmlSpan
{
  state = { asd : 'zxc' }

  init() {
    bazInit.call(this)
  }

  update(prevProps, prevState) {
    bazUpdate.call(this, prevProps, prevState)
  }

  destroy() {
    bazDestroy.call(this)
  }
}

class Foo extends HtmlDiv
{
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
        new HtmlDiv(new Baz('baz')),
        new HtmlBr,
        new HtmlA('bar'),
      ]
    }
    if(this.state.step === 3) {
      return [
        new HtmlB('bat'),
        new HtmlDiv(new Baz('qwe')),
      ]
    }
    return 'foo'
  }

  init() {
    fooInit.call(this)
  }

  update(prevProps, prevState) {
    fooUpdate.call(this, prevProps, prevState)
  }

  destroy() {
    fooDestroy.call(this)
  }
}

test('test #1', t => {
  const foo = Foo.render({ qaz : 'wsx' }, new DocumentFragment)

  t.is(fooInit.callCount, 1)
  t.is(fooUpdate.callCount, 0)
  t.is(fooDestroy.callCount, 0)
  t.is(bazInit.callCount, 0)
  t.is(bazUpdate.callCount, 0)
  t.is(bazDestroy.callCount, 0)
  t.is(foo.toString(), '<div class="Foo">foo</div>')

  foo.setState({ step : 1 })

  t.is(fooInit.callCount, 1)
  t.is(fooUpdate.callCount, 1)
  t.is(fooUpdate.args[0][0], foo.props)
  t.deepEqual(fooUpdate.args[0][1], { step : 0 })
  t.is(fooDestroy.callCount, 0)
  t.is(bazInit.callCount, 0)
  t.is(bazUpdate.callCount, 0)
  t.is(bazDestroy.callCount, 0)
  t.is(foo.toString(), '<div class="Foo"><a>bar</a><div><span>baz</span></div><br><b>bat</b></div>')

  foo.setState({ step : 2 })

  t.is(fooInit.callCount, 1)
  t.is(fooUpdate.callCount, 2)
  t.deepEqual(fooUpdate.args[1][1], { step : 1 })
  t.is(fooDestroy.callCount, 0)
  t.is(bazInit.callCount, 1)
  t.is(bazUpdate.callCount, 0)
  t.is(bazDestroy.callCount, 0)
  t.is(foo.toString(), '<div class="Foo"><b>bat</b><div><span class="Baz">baz</span></div><br><a>bar</a></div>')

  foo.setState({ step : 3 })

  t.is(fooInit.callCount, 1)
  t.is(fooUpdate.callCount, 3)
  t.deepEqual(fooUpdate.args[2][1], { step : 2 })
  t.is(fooDestroy.callCount, 0)
  t.is(bazInit.callCount, 1)
  t.is(bazUpdate.callCount, 1)
  t.is(bazDestroy.callCount, 0)
  t.deepEqual(bazUpdate.args[0][0], { children : 'baz' })
  t.deepEqual(bazUpdate.args[0][1], { asd : 'zxc' })
  t.is(foo.toString(), '<div class="Foo"><b>bat</b><div><span class="Baz">qwe</span></div></div>')

  foo.setState({ step : 0 })

  t.is(fooInit.callCount, 1)
  t.is(fooUpdate.callCount, 4)
  t.deepEqual(fooUpdate.args[3][1], { step : 3 })
  t.is(fooDestroy.callCount, 0)
  t.is(bazInit.callCount, 1)
  t.is(bazUpdate.callCount, 1)
  t.is(bazDestroy.callCount, 1)
  t.is(foo.toString(), '<div class="Foo">foo</div>')

  foo.setState({ step : -1 })

  t.is(fooDestroy.callCount, 0)
  t.is(bazDestroy.callCount, 1)
})
