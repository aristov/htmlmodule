const test = require('ava')
const { ElemType, HtmlA, HtmlB } = require('..')

let child1, child2

class Test extends ElemType
{
  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return [
          child1 = new HtmlA('one'),
          child2 = new HtmlB('two'),
        ]
      case 1:
        return [
          child1 = new HtmlB('two'),
          new HtmlB('one'),
        ]
      case 2:
        return [
          new HtmlB('one'),
          child2 = new HtmlA('two'),
        ]
    }
  }
}

test('test #1', t => {
  const elem = Test.render()

  t.is(elem.children[0], child1)
  t.is(elem.children[1], child2)
  t.is(elem.node.children[0], child1.node)
  t.is(elem.node.children[1], child2.node)
  t.is(elem.toString(), '<div class="Test"><a>one</a><b>two</b></div>')

  elem.setState({ step : 1 })

  t.is(elem.children[0], child1)
  t.is(elem.children[1], child2)
  t.is(elem.node.children[0], child1.node)
  t.is(elem.node.children[1], child2.node)
  t.is(elem.toString(), '<div class="Test"><b>two</b><b>one</b></div>')

  elem.setState({ step : 2 })

  t.is(elem.children[0], child1)
  t.is(elem.children[1], child2)
  t.is(elem.node.children[0], child1.node)
  t.is(elem.node.children[1], child2.node)
  t.is(elem.toString(), '<div class="Test"><b>one</b><a>two</a></div>')
})
