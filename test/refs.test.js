const test = require('ava')
const { HtmlA, HtmlB, HtmlDiv, HtmlSpan } = require('..')

let a, div, b, span, obj

class Foo extends HtmlDiv
{
  state = {
    step : 0,
  }

  render() {
    const step = this.state.step
    if(step === 0) {
      return [
        this._ref1 = a = new HtmlA('one'),
        this._ref2 = div = new HtmlDiv('two'),
        this._ref3 = b = new HtmlB('three'),
      ]
    }
    if(step === 1) {
      return [
        this._ref1 = new HtmlA('first'),
        this._ref2 = span = new HtmlSpan('second'),
        this._ref3 = new HtmlB('third'),
      ]
    }
    if(step === 2) {
      return [
        this._ref1 = b = new HtmlB('1'),
        new HtmlDiv('2'),
        this._ref3 = a = new HtmlA('3'),
      ]
    }
    return null
  }

  init() {
    this._obj = obj = {}
  }
}

test('test #1', t => {
  const foo = Foo.render()

  t.is(foo._obj, obj)
  t.is(foo._ref1, a)
  t.is(foo._ref2, div)
  t.is(foo._ref3, b)
  t.is(foo.toString(), '<div class="Foo"><a>one</a><div>two</div><b>three</b></div>')

  foo.setState({ step : 1 })

  t.is(foo._obj, obj)
  t.is(foo._ref1, a)
  t.is(foo._ref2, span)
  t.is(foo._ref3, b)
  t.is(foo.toString(), '<div class="Foo"><a>first</a><span>second</span><b>third</b></div>')

  foo.setState({ step : 2 })

  t.is(foo._obj, obj)
  t.is(foo._ref1, b)
  t.false('_ref2' in foo)
  t.is(foo._ref3, a)
  t.is(foo.toString(), '<div class="Foo"><b>1</b><div>2</div><a>3</a></div>')

  foo.setState({ step : -1 })

  t.is(foo._obj, obj)
  t.false('_ref1' in foo)
  t.false('_ref2' in foo)
  t.false('_ref3' in foo)
  t.is(foo.toString(), '<div class="Foo"></div>')
})
