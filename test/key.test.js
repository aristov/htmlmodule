const test = require('ava')
const { HtmlUl, HtmlLi } = require('..')

let li1, li2, li3, li4

class List extends HtmlUl
{
  state = { step : 0 }

  render() {
    if(this.state.step === 0) {
      return [
        li1 = new HtmlLi({ key : 'id1', children : 'one' }),
        li2 = new HtmlLi({ key : 'id2', children : 'two' }),
        li3 = new HtmlLi({ key : 'id3', children : 'three' }),
      ]
    }
    if(this.state.step === 1) {
      return [
        new HtmlLi({ key : 'id2', children : 'two' }),
        new HtmlLi({ key : 'id3', children : 'three' }),
        li4 = new HtmlLi({ key : 'id4', children : 'four' }),
      ]
    }
  }
}

test('test #1', t => {
  const elem = List.render()

  t.is(elem.toString(), '<ul class="List"><li>one</li><li>two</li><li>three</li></ul>')
  t.is(elem.node.children[0], li1.node)
  t.is(elem.node.children[1], li2.node)
  t.is(elem.node.children[2], li3.node)

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<ul class="List"><li>two</li><li>three</li><li>four</li></ul>')
  t.is(li1.node, null)
  t.is(elem.node.children[0], li2.node)
  t.is(elem.node.children[1], li3.node)
  t.is(elem.node.children[2], li4.node)
})
