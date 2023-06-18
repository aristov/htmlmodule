import test from 'ava'
import window from '../lib/window.cjs'
import { ElemType, HtmlSpan } from '../index.js'

let document, elem

class Popup extends ElemType
{
  static class = 'Popup'

  render() {
    if(this.props.isHidden) {
      return this.parent = null
    }
    if(this.props.isModal) {
      this.parent = document.body
    }
    return this.props.children
  }
}

class Dialog extends Popup
{
  static class = 'Dialog'
}

class App extends ElemType
{
  static class = 'App'

  state = {
    step : 0,
    isHidden : undefined,
    text : 'foo',
    isModal : true,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return new Dialog({
          isModal : this.state.isModal,
          isHidden : this.state.isHidden ?? this.props.isHidden,
          children : this.state.text,
        })
      case 1:
        return new ElemType('bat')
      case 2:
        return new HtmlSpan('baz')
      case 3:
        return null
    }
  }
}

test('test #1', t => {
  document = window.document.implementation.createHTMLDocument('test')
  elem = App.render({ isHidden : false }, document.body)

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div><div class="Dialog Popup">foo</div></body>')

  elem.setState({ isHidden : true })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div></body>')

  elem.setState({ text : 'bar' })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div></body>')

  elem.setState({ isHidden : false })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div><div class="Dialog Popup">bar</div></body>')

  elem.setState({ isModal : false })

  t.is(document.body.outerHTML, '<body><div class="App"><div class="Dialog Popup">bar</div></div></body>')

  elem.setState({ isModal : true })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div><div class="Dialog Popup">bar</div></body>')

  elem.setState({ step : 1 })

  t.is(document.body.outerHTML, '<body><div class="App"><div>bat</div></div></body>')

  elem.setState({ step : 0 })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div><div class="Dialog Popup">bar</div></body>')

  elem.setState({ step : 2 })

  t.is(document.body.outerHTML, '<body><div class="App"><span>baz</span></div></body>')

  elem.setState({ step : 0 })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div><div class="Dialog Popup">bar</div></body>')

  elem.setState({ step : 3 })

  t.is(document.body.outerHTML, '<body><div class="App"></div></body>')

  elem.setState({ step : 0 })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div><div class="Dialog Popup">bar</div></body>')

  elem.setState({ text : 'qwe' })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div><div class="Dialog Popup">qwe</div></body>')
})

test('test #2', t => {
  document = window.document.implementation.createHTMLDocument('test')
  elem = App.render({ isHidden : true }, document.body)

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div></body>')

  elem.setState({ isHidden : true })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div></body>')

  elem.setState({ isHidden : false })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div><div class="Dialog Popup">foo</div></body>')

  elem.setState({ isHidden : false })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Dialog--></div><div class="Dialog Popup">foo</div></body>')
})
