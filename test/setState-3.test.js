const test = require('ava')
const { HtmlDiv, HtmlInput, HtmlLabel } = require('..')

class Foo extends HtmlDiv
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
        this.refs.input = new Bar({
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
        this.refs.input = new Bar({
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
        this.refs.input = new Bar({
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
        this.refs.input = new Bat({
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

  t.is(elem.toString(), '<div class="Foo" data-step="0"><label for="id1">rty</label><input class="Bar" id="id1"></div>')
  t.is(elem.refs.input.value, 'qwe')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Foo" data-step="1"><label>fgh</label><input class="Bar" id="id1" value="asd"></div>')
  t.is(elem.refs.input.value, '')

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div class="Foo" data-step="2"><label for="id2">vbn</label><input class="Bar" id="id2"></div>')
  t.is(elem.refs.input.value, 'zxc')

  elem.setState({ step : 3 })

  t.is(elem.toString(), '<div class="Foo" data-step="3"><label>qaz</label><input class="Bat" id="id2"></div>')
  // t.is(elem.refs.input.constructor, Bat)
  // t.is(elem.refs.input.value, 'wsx')
})
