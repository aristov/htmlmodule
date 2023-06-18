import test from 'ava'
import { HtmlDiv } from '../index.js'

class App extends HtmlDiv
{
  static class = 'App'

  state = {
    step : 0,
  }

  render() {
    const step = this.state.step
    if(step === 0) {
      return new Foo({
        title : 'qwe',
        children : 'zxc',
      })
    }
    if(step === 1) {
      return [
        new Foo({
          hidden : true,
          children : 'asd',
        }),
        'qaz',
      ]
    }
    if(step === 2) {
      return new Bar({
        tabIndex : 0,
        children : 'poi',
      })
    }
    return null
  }
}

class Foo extends HtmlDiv
{
  static class = 'Foo'
}

class Bar extends HtmlDiv
{
  static class = 'Bar'
}

test('test #1', t => {
  const elem = App.render({ id : 'app' })

  t.is(elem.toString(), '<div class="App" id="app"><div class="Foo" title="qwe">zxc</div></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="App" id="app"><div class="Foo" hidden="">asd</div>qaz</div>')

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div class="App" id="app"><div class="Bar" tabindex="0">poi</div></div>')
})
