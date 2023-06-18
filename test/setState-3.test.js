import test from 'ava'
import { ElemType, HtmlInput, HtmlLabel } from '../index.js'

class App extends ElemType
{
  static class = 'App'

  state = {
    step : 0,
  }

  render() {
    const step = this.state.step
    this.dataset = { step }
    if(step === 0) {
      return [
        new HtmlLabel({
          htmlFor : 'id1',
          children : 'rty'
        }),
        this._input = new Foo({
          id : 'id1',
          value : 'qwe',
        }),
      ]
    }
    if(step === 1) {
      return [
        new HtmlLabel({
          children : 'fgh'
        }),
        this._input = new Foo({
          id : 'id1',
          defaultValue : 'asd',
        }),
      ]
    }
    if(step === 2) {
      return [
        new HtmlLabel({
          htmlFor : 'id2',
          children : 'vbn'
        }),
        this._input = new Foo({
          id : 'id2',
          value : 'zxc',
        }),
      ]
    }
    if(step === 3) {
      return [
        new HtmlLabel({
          children : 'qaz'
        }),
        this._input = new Bar({
          id : 'id2',
          value : 'wsx',
        }),
      ]
    }
    return null
  }
}

class Foo extends HtmlInput
{
  static class = 'Foo'
}

class Bar extends HtmlInput
{
  static class = 'Bar'
}

test('test #1', t => {
  const elem = App.render()

  t.is(elem.toString(), '<div class="App" data-step="0"><label for="id1">rty</label><input class="Foo" id="id1"></div>')
  t.is(elem._input.constructor, Foo)
  t.is(elem._input.node.value, 'qwe')
  t.is(elem._input.node.defaultValue, '')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="App" data-step="1"><label>fgh</label><input class="Foo" id="id1" value="asd"></div>')
  t.is(elem._input.constructor, Foo)
  t.is(elem._input.node.value, '')
  t.is(elem._input.node.defaultValue, 'asd')

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div class="App" data-step="2"><label for="id2">vbn</label><input class="Foo" id="id2"></div>')
  t.is(elem._input.constructor, Foo)
  t.is(elem._input.node.value, 'zxc')
  t.is(elem._input.node.defaultValue, '')

  elem.setState({ step : 3 })

  t.is(elem.toString(), '<div class="App" data-step="3"><label>qaz</label><input class="Bar" id="id2"></div>')
  t.is(elem._input.constructor, Bar)
  t.is(elem._input.node.value, 'wsx')
  t.is(elem._input.node.defaultValue, '')
})
