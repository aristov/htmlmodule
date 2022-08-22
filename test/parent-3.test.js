const window = require('xwindow')
const test = require('ava')
const { ElemType, HtmlButton } = require('..')

let document

class Popup extends ElemType
{
  static class = 'Popup'

  state = {
    hidden : false,
  }

  render() {
    if(this.state.hidden) {
      return this.parent = null
    }
    if(this.props.modal) {
      this.parent = document.body
    }
    return this.props.children
  }
}

class App extends ElemType
{
  static class = 'App'

  state = {
    modal : undefined,
    text : 'foo',
  }

  render() {
    return [
      new HtmlButton('toggle'),
      new Popup({
        modal : this.state.modal ?? this.props.modal,
        children : this.state.text,
      }),
    ]
  }
}

test('test #1', t => {
  document = window.document.implementation.createHTMLDocument('test')

  const elem = App.render({ modal : true }, document.body)
  const popup = elem.children[1]

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><!--Popup--></div><div class="Popup">foo</div></body>')

  elem.setState({ text : 'bar' })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><!--Popup--></div><div class="Popup">bar</div></body>')

  elem.setState({ modal : false })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><div class="Popup">bar</div></div></body>')

  elem.setState({ modal : true })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><!--Popup--></div><div class="Popup">bar</div></body>')

  popup.setState({ hidden : true })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><!--Popup--></div></body>')

  elem.setState({ text : 'bat' })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><!--Popup--></div></body>')

  popup.setState({ hidden : false })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><!--Popup--></div><div class="Popup">bat</div></body>')

  popup.setState({ hidden : true })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><!--Popup--></div></body>')

  elem.setState({ modal : false, text : 'baz' })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><!--Popup--></div></body>')

  popup.setState({ hidden : false })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><div class="Popup">baz</div></div></body>')
})

test('test #2', t => {
  document = window.document.implementation.createHTMLDocument('test')

  const elem = App.render({ modal : false }, document.body)

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><div class="Popup">foo</div></div></body>')

  elem.setState({ modal : true })

  t.is(document.body.outerHTML, '<body><div class="App"><button>toggle</button><!--Popup--></div><div class="Popup">foo</div></body>')
})
