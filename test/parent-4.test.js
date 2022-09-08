const window = require('xwindow')
const test = require('ava')
const { ElemType, HtmlH1, HtmlH2, HtmlH3, HtmlDiv } = require('..')

let document

class Popup extends ElemType
{
  static class = 'Popup'

  state = {
    isHidden : false,
  }

  render() {
    if(this.state.isHidden) {
      return this.parent = null
    }
    if(this.props.isModal) {
      this.parent = document.body
    }
    return this.props.children
  }
}

class Parent extends ElemType
{
  static class = 'Parent'

  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return [
          new HtmlH1('one'),
        ]
      case 1:
        return [
          new HtmlH1('one'),
          new Popup({
            isModal : true,
            children : 'two',
          }),
          new HtmlH3('three'),
        ]
      case 2:
        return [
          new HtmlH1('one'),
          new HtmlDiv('two'),
          new HtmlH3('three'),
        ]
      case 3:
        return [
          new HtmlH1('one'),
          new HtmlH2('two'),
          new HtmlH3('three'),
        ]
    }
  }
}

test('test #2', t => {
  document = window.document.implementation.createHTMLDocument('test')
  const elem = Parent.render(null, document.body)

  t.is(document.body.outerHTML, '<body><div class="Parent"><h1>one</h1></div></body>')

  elem.setState({ step : 1 })

  t.is(document.body.outerHTML, '<body><div class="Parent"><h1>one</h1><!--Popup--><h3>three</h3></div><div class="Popup">two</div></body>')

  elem.children[1].setState({ isHidden : true })

  t.is(document.body.outerHTML, '<body><div class="Parent"><h1>one</h1><!--Popup--><h3>three</h3></div></body>')

  elem.children[1].setState({ isHidden : false })

  t.is(document.body.outerHTML, '<body><div class="Parent"><h1>one</h1><!--Popup--><h3>three</h3></div><div class="Popup">two</div></body>')

  elem.setState({ step : 2 })

  t.is(document.body.outerHTML, '<body><div class="Parent"><h1>one</h1><div>two</div><h3>three</h3></div></body>')

  elem.setState({ step : 1 })

  t.is(document.body.outerHTML, '<body><div class="Parent"><h1>one</h1><!--Popup--><h3>three</h3></div><div class="Popup">two</div></body>')

  elem.setState({ step : 3 })

  t.is(document.body.outerHTML, '<body><div class="Parent"><h1>one</h1><h2>two</h2><h3>three</h3></div></body>')

  elem.setState({ step : 1 })

  t.is(document.body.outerHTML, '<body><div class="Parent"><h1>one</h1><!--Popup--><h3>three</h3></div><div class="Popup">two</div></body>')

  elem.setState({ step : 0 })

  t.is(document.body.outerHTML, '<body><div class="Parent"><h1>one</h1></div></body>')
})
