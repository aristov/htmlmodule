const test = require('ava')
const { HtmlDiv } = require('..')

class Foo extends HtmlDiv
{
  state = {
    step : 0,
  }

  render() {
    const step = this.state.step
    this.dataset = { step }
    if(step === 0) {
      return new Bar({
        title : 'qwe',
        children : 'zxc',
      })
    }
    if(step === 1) {
      return new Bar({
        hidden : true,
        children : 'asd'
      })
    }
    if(step === 2) {
      return new Bat({
        tabIndex : 0,
        children : 'poi'
      })
    }
    return null
  }
}

class Bar extends HtmlDiv
{
}

class Bat extends HtmlDiv
{
}

test('test #1', t => {
  const elem = Foo.render()

  t.is(elem.toString(), '<div class="Foo" data-step="0"><div class="Bar" title="qwe">zxc</div></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Foo" data-step="1"><div class="Bar" hidden="">asd</div></div>')

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div class="Foo" data-step="2"><div class="Bat" tabindex="0">poi</div></div>')
})
