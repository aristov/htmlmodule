const test = require('ava')
const { ElemType, HtmlA, HtmlB, HtmlDiv, HtmlSpan } = require('..')

let a, div, b, span, obj, elem

class App extends ElemType
{
  static class = 'App'

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
    this._elem = elem = new ElemType
  }

  mount() {
    this._obj = obj = {}
  }
}

test('test #1', t => {
  const app = App.render()

  t.is(app.toString(), '<div class="App"><a>one</a><div>two</div><b>three</b></div>')
  t.is(app._elem, elem)
  t.is(app._obj, obj)
  t.is(app._ref1, a)
  t.is(app._ref2, div)
  t.is(app._ref3, b)

  app.setState({ step : 1 })

  t.is(app.toString(), '<div class="App"><a>first</a><span>second</span><b>third</b></div>')
  t.is(app._elem, elem)
  t.is(app._obj, obj)
  t.is(app._ref1, a)
  t.is(app._ref2, span)
  t.is(app._ref3, b)

  app.setState({ step : 2 })

  t.is(app.toString(), '<div class="App"><b>1</b><div>2</div><a>3</a></div>')
  t.is(app._elem, elem)
  t.is(app._obj, obj)
  t.is(app._ref1, b)
  t.is(app._ref2, span)
  t.is(app._ref3, a)

  app.setState({ step : -1 })

  t.is(app.toString(), '<div class="App"></div>')
  t.is(app._elem, elem)
  t.is(app._obj, obj)
  t.is(app._ref1, b)
  t.is(app._ref2, span)
  t.is(app._ref3, a)
})
