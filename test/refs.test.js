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

  componentDidMount() {
    this._obj = obj = {}
  }
}

test('test #1', t => {
  const elem = Foo.render()

  t.is(elem._obj, obj)
  t.is(elem._ref1, a)
  t.is(elem._ref2, div)
  t.is(elem._ref3, b)
  t.is(elem.toString(), '<div class="Foo"><a>one</a><div>two</div><b>three</b></div>')

  elem.setState({ step : 1 })

  t.is(elem._obj, obj)
  t.is(elem._ref1, a)
  t.is(elem._ref2, span)
  t.is(elem._ref3, b)
  t.is(elem.toString(), '<div class="Foo"><a>first</a><span>second</span><b>third</b></div>')

  elem.setState({ step : 2 })

  t.is(elem._obj, obj)
  t.is(elem._ref1, b)
  t.false('_ref2' in elem)
  t.is(elem._ref3, a)
  t.is(elem.toString(), '<div class="Foo"><b>1</b><div>2</div><a>3</a></div>')

  elem.setState({ step : -1 })

  t.is(elem._obj, obj)
  t.false('_ref1' in elem)
  t.false('_ref2' in elem)
  t.false('_ref3' in elem)
  t.is(elem.toString(), '<div class="Foo"></div>')
})
