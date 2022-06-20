const test = require('ava')
const sinon = require('sinon')
const { HtmlDiv, HtmlA, HtmlB, HtmlBr, HtmlSpan, window } = require('..')
const { DocumentFragment } = window

const bazDidMount = sinon.spy()
const bazDidUpdate = sinon.spy()
const bazWillUnmount = sinon.spy()
const fooDidMount = sinon.spy()
const fooDidUpdate = sinon.spy()
const fooWillUnmount = sinon.spy()

class Baz extends HtmlSpan
{
  state = { asd : 'zxc' }

  componentDidMount() {
    bazDidMount()
  }

  componentDidUpdate(prevProps, prevState) {
    bazDidUpdate(prevProps, prevState)
  }

  componentWillUnmount() {
    bazWillUnmount()
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

  componentDidMount() {
    fooDidMount()
  }

  componentDidUpdate(prevProps, prevState) {
    fooDidUpdate(prevProps, prevState)
  }

  componentWillUnmount() {
    fooWillUnmount()
  }
}

test('test #1', t => {
  const instance = Foo.render({ qaz : 'wsx' }, new DocumentFragment)

  t.true(fooDidMount.calledOnce)
  t.true(fooDidUpdate.notCalled)
  t.true(fooWillUnmount.notCalled)
  t.true(bazDidMount.notCalled)
  t.true(bazDidUpdate.notCalled)
  t.true(bazWillUnmount.notCalled)
  t.is(instance.toString(), '<div class="Foo">foo</div>')

  instance.setState({ step : 1 })

  t.true(fooDidMount.calledOnce)
  t.true(fooDidUpdate.calledOnce)
  t.is(fooDidUpdate.args[0][0], instance.props)
  t.deepEqual(fooDidUpdate.args[0][1], { step : 0 })
  t.true(fooWillUnmount.notCalled)
  t.true(bazDidMount.notCalled)
  t.true(bazDidUpdate.notCalled)
  t.true(bazWillUnmount.notCalled)
  t.is(instance.toString(), '<div class="Foo"><a>bar</a><div><span>baz</span></div><br><b>bat</b></div>')

  instance.setState({ step : 2 })

  t.true(fooDidMount.calledOnce)
  t.true(fooDidUpdate.calledTwice)
  t.deepEqual(fooDidUpdate.args[1][1], { step : 1 })
  t.true(fooWillUnmount.notCalled)
  t.true(bazDidMount.calledOnce)
  t.true(bazDidUpdate.notCalled)
  t.true(bazWillUnmount.notCalled)
  t.is(instance.toString(), '<div class="Foo"><b>bat</b><div><span class="Baz">baz</span></div><br><a>bar</a></div>')

  instance.setState({ step : 3 })

  t.true(fooDidMount.calledOnce)
  t.true(fooDidUpdate.calledThrice)
  t.deepEqual(fooDidUpdate.args[2][1], { step : 2 })
  t.true(fooWillUnmount.notCalled)
  t.true(bazDidMount.calledOnce)
  t.true(bazDidUpdate.calledOnce)
  t.true(bazWillUnmount.notCalled)
  t.deepEqual(bazDidUpdate.args[0][0], { children : 'baz' })
  t.deepEqual(bazDidUpdate.args[0][1], { asd : 'zxc' })
  t.is(instance.toString(), '<div class="Foo"><b>bat</b><div><span class="Baz">qwe</span></div></div>')

  instance.setState({ step : 0 })

  t.true(fooDidMount.calledOnce)
  t.is(fooDidUpdate.callCount, 4)
  t.deepEqual(fooDidUpdate.args[3][1], { step : 3 })
  t.true(fooWillUnmount.notCalled)
  t.true(bazDidMount.calledOnce)
  t.true(bazDidUpdate.calledOnce)
  t.true(bazWillUnmount.calledOnce)
  t.is(instance.toString(), '<div class="Foo">foo</div>')

  instance.destroy()

  t.true(fooWillUnmount.calledOnce)
  t.true(bazWillUnmount.calledOnce)
})
