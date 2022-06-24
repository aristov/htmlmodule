const test = require('ava')
const { ElemType, HtmlInput, HtmlLabel } = require('..')

class Foo extends ElemType
{
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
        this._input = new Bar({
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
        this._input = new Bar({
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
        this._input = new Bar({
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
        this._input = new Bat({
          id : 'id2',
          value : 'wsx',
        }),
      ]
    }
    return null
  }
}

class Bar extends HtmlInput
{
}

class Bat extends HtmlInput
{
}

test('test #1', t => {
  const elem = Foo.render()

  t.is(elem._input.constructor, Bar)
  t.is(elem._input.value, 'qwe')
  t.is(elem._input.defaultValue, '')
  t.is(elem.toString(), '<div class="Foo" data-step="0"><label for="id1">rty</label><input class="Bar" id="id1"></div>')

  elem.setState({ step : 1 })

  t.is(elem._input.constructor, Bar)
  t.is(elem._input.value, '')
  t.is(elem._input.defaultValue, 'asd')
  t.is(elem.toString(), '<div class="Foo" data-step="1"><label>fgh</label><input class="Bar" id="id1" value="asd"></div>')

  elem.setState({ step : 2 })

  t.is(elem._input.constructor, Bar)
  t.is(elem._input.value, 'zxc')
  t.is(elem._input.defaultValue, '')
  t.is(elem.toString(), '<div class="Foo" data-step="2"><label for="id2">vbn</label><input class="Bar" id="id2"></div>')

  elem.setState({ step : 3 })

  t.is(elem._input.constructor, Bat)
  t.is(elem._input.value, 'wsx')
  t.is(elem._input.defaultValue, '')
  t.is(elem.toString(), '<div class="Foo" data-step="3"><label>qaz</label><input class="Bat" id="id2"></div>')
})
