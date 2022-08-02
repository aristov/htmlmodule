const test = require('ava')
const window = require('xwindow')
const { ElemType, HtmlP } = require('..')

const document = window.document.implementation.createHTMLDocument('test')

let item2, item4, item6

class HiddenItem extends ElemType
{
  static class = 'HiddenItem'

  render() {
    if(this.props.mode === 'on') {
      return this.parent = null
    }
    return this.props.children
  }
}

class PortalItem extends ElemType
{
  static class = 'PortalItem'

  render() {
    if(this.props.mode === 'on') {
      this.parent = document.body
    }
    return this.props.children
  }
}

class WrappedItem extends ElemType
{
  static class = 'WrappedItem'

  render() {
    if(this.props.mode === 'on') {
      this.parent = new HtmlP(this)
    }
    return this.props.children
  }
}

class App extends ElemType
{
  static class = 'App'

  state = {
    step : 0,
    mode : 'on',
  }

  render() {
    const mode = this.state.mode
    switch(this.state.step) {
      case 0:
        return [
          new ElemType({ key : 'key1', children : 'one' }),
          item2 = new HiddenItem({
            key : 'key2',
            children : 'two',
            mode,
          }),
          new ElemType({ key : 'key3', children : 'three' }),
          item4 = new WrappedItem({
            key : 'key4',
            children : 'four',
            mode,
          }),
          new ElemType({ key : 'key5', children : 'five' }),
          item6 = new PortalItem({
            key : 'key6',
            children : 'six',
            mode,
          }),
          new ElemType({ key : 'key7', children : 'seven' }),
        ]
      case 1:
        return [
          new ElemType({ key : 'key7', children : 'seven' }),
          new PortalItem({ key : 'key6', children : 'six', mode }),
          new ElemType({ key : 'key5', children : 'five' }),
          new HiddenItem({ key : 'key2', children : 'two', mode }),
          new ElemType({ key : 'key3', children : 'three' }),
          new WrappedItem({ key : 'key4', children : 'four', mode }),
          new ElemType({ key : 'key1', children : 'one' }),
        ]
      case 2:
        return [
          new ElemType({ key : 'key5', children : 'five' }),
          new WrappedItem({ key : 'key4', children : 'four', mode }),
          new ElemType({ key : 'key1', children : 'one' }),
          new PortalItem({ key : 'key6', children : 'six', mode }),
          new ElemType({ key : 'key3', children : 'three' }),
          new HiddenItem({ key : 'key2', children : 'two', mode }),
          new ElemType({ key : 'key7', children : 'seven' }),
        ]
    }
  }
}

test('test #1', t => {
  const elem = App.render(null, document.body)

  t.is(document.body.outerHTML,
    '<body>' +
    '<div class="App">' +
    '<div>one</div>' +
    '<!--HiddenItem-->' +
    '<div>three</div>' +
    '<p><div class="WrappedItem">four</div></p>' +
    '<div>five</div>' +
    '<!--PortalItem-->' +
    '<div>seven</div>' +
    '</div>' +
    '<div class="PortalItem">six</div>' +
    '</body>')

  elem.setState({ step : 1 })

  t.is(document.body.outerHTML,
    '<body>' +
    '<div class="App">' +
    '<div>seven</div>' +
    '<!--PortalItem-->' +
    '<div>five</div>' +
    '<!--HiddenItem-->' +
    '<div>three</div>' +
    '<p><div class="WrappedItem">four</div></p>' +
    '<div>one</div>' +
    '</div>' +
    '<div class="PortalItem">six</div>' +
    '</body>')
  t.is(elem.children[1], item6)
  t.is(elem.children[3], item2)
  t.is(elem.children[5], item4)

  elem.setState({ step : 2, mode : 'off' })

  t.is(document.body.outerHTML,
    '<body>' +
    '<div class="App">' +
    '<div>five</div>' +
    '<div class="WrappedItem">four</div>' +
    '<div>one</div>' +
    '<div class="PortalItem">six</div>' +
    '<div>three</div>' +
    '<div class="HiddenItem">two</div>' +
    '<div>seven</div>' +
    '</div>' +
    '</body>')
  t.is(elem.children[1], item4)
  t.is(elem.children[3], item6)
  t.is(elem.children[5], item2)

  elem.setState({ step : 1, mode : 'on' })

  t.is(document.body.outerHTML,
    '<body>' +
    '<div class="App">' +
    '<div>seven</div>' +
    '<!--PortalItem-->' +
    '<div>five</div>' +
    '<!--HiddenItem-->' +
    '<div>three</div>' +
    '<p><div class="WrappedItem">four</div></p>' +
    '<div>one</div>' +
    '</div>' +
    '<div class="PortalItem">six</div>' +
    '</body>')
  t.is(elem.children[1], item6)
  t.is(elem.children[3], item2)
  t.is(elem.children[5], item4)
})
