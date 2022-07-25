const test = require('ava')
const { ElemType, HtmlH1, HtmlH2, HtmlH3, HtmlDiv } = require('..')

class Child extends ElemType
{
  static class = 'Child'

  state = {
    hidden : true,
  }

  render() {
    if(this.state.hidden) {
      this.parent = null
      return
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
          new Child('two'),
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
  const elem = Parent.render()

  t.is(elem.toString(), '<div class="Parent"><h1>one</h1></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Parent"><h1>one</h1><!--Child--><h3>three</h3></div>')

  elem.children[1].setState({ hidden : false })

  t.is(elem.toString(), '<div class="Parent"><h1>one</h1><div class="Child">two</div><h3>three</h3></div>')

  elem.children[1].setState({ hidden : true })

  t.is(elem.toString(), '<div class="Parent"><h1>one</h1><!--Child--><h3>three</h3></div>')

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div class="Parent"><h1>one</h1><div>two</div><h3>three</h3></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Parent"><h1>one</h1><!--Child--><h3>three</h3></div>')

  elem.setState({ step : 3 })

  t.is(elem.toString(), '<div class="Parent"><h1>one</h1><h2>two</h2><h3>three</h3></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Parent"><h1>one</h1><!--Child--><h3>three</h3></div>')

  elem.setState({ step : 0 })

  t.is(elem.toString(), '<div class="Parent"><h1>one</h1></div>')
})
