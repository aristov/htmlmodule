import test from 'ava'
import window from '../lib/window.cjs'
import { ElemType } from '../index.js'

const document = window.document.implementation.createHTMLDocument('test')

class App extends ElemType
{
  static class = 'App'

  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        break
      case 1:
        this.parent = document.body
        break
      case 2:
        return this.parent = null
    }
    return this.props.children
  }
}

test('test #1', t => {
  const app = new App('test')
  ElemType.render(app, document.body)

  t.is(document.body.outerHTML, '<body><div><div class="App">test</div></div></body>')

  app.setState({ step : 1 })

  t.is(document.body.outerHTML, '<body><div><!--App--></div><div class="App">test</div></body>')

  app.setState({ step : 0 })

  t.is(document.body.outerHTML, '<body><div><div class="App">test</div></div></body>')

  app.setState({ step : 2 })

  t.is(document.body.outerHTML, '<body><div><!--App--></div></body>')
})
