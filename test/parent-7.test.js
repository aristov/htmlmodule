const test = require('ava')
const window = require('xwindow')
const { ElemType } = require('..')

const document = window.document.implementation.createHTMLDocument('test')

class Popup extends ElemType
{
  static class = 'Popup'

  render() {
    if(this.props.hidden) {
      return this.parent = null
    }
    if(this.props.modal) {
      this.parent = document.body
    }
    return this.props.children
  }
}

class Dialog extends ElemType
{
  static class = 'Dialog'

  render() {
    this.parent = new Popup({
      modal : this.props.modal,
      hidden : this.props.hidden,
      children : this,
    })
    return this.props.children
  }
}

class App extends ElemType
{
  static class = 'App'

  state = {
    step : 0,
    hidden : false,
    text : 'foo',
    modal : true,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return new Dialog({
          modal : this.state.modal,
          hidden : this.state.hidden,
          children : this.state.text,
        })
      case 1:
        return new ElemType('bat')
    }
  }
}

test('test #1', t => {
  const elem = App.render(null, document.body)

  t.is(document.body.outerHTML, '<body><div class="App"><!--Popup--></div><div class="Popup"><div class="Dialog">foo</div></div></body>')

  elem.setState({ hidden : true })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Popup--></div></body>')

  elem.setState({ text : 'bar' })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Popup--></div></body>')

  elem.setState({ hidden : false })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Popup--></div><div class="Popup"><div class="Dialog">bar</div></div></body>')

  elem.setState({ modal : false })

  t.is(document.body.outerHTML, '<body><div class="App"><div class="Popup"><div class="Dialog">bar</div></div></div></body>')

  elem.setState({ modal : true })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Popup--></div><div class="Popup"><div class="Dialog">bar</div></div></body>')

  elem.setState({ step : 1 })

  t.is(document.body.outerHTML, '<body><div class="App"><div>bat</div></div></body>')

  elem.setState({ step : 0 })

  t.is(document.body.outerHTML, '<body><div class="App"><!--Popup--></div><div class="Popup"><div class="Dialog">bar</div></div></body>')
})
