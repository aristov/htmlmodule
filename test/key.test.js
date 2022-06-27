const test = require('ava')
const { HtmlUl, HtmlLi } = require('..')

let li0, li1, li2, li3, li4

class Item extends HtmlLi
{
}

class List extends HtmlUl
{
  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return [
          li1 = new HtmlLi({ key : 'id1', children : 'one' }),
          li2 = new HtmlLi({ key : 'id2', children : 'two' }),
          li3 = new HtmlLi({ key : 'id3', children : 'three' }),
        ]
      case 1:
        return [
          new HtmlLi({ key : 'id2', children : 'two' }),
          new HtmlLi({ key : 'id3', children : 'three' }),
          li4 = new HtmlLi({ key : 'id4', children : 'four' }),
        ]
      case 2:
        return [
          li0 = new HtmlLi({ key : 'id0', children : 'zero' }),
          new HtmlLi({ key : 'id4', children : 'four' }),
          new HtmlLi({ key : 'id3', children : 'three' }),
          li2 = new Item({ key : 'id2', children : 'two' }),
        ]
    }
  }
}

test('test #1', t => {
  const elem = List.render()
  const node1 = li1.node

  t.is(elem.children[0], li1)
  t.is(elem.children[1], li2)
  t.is(elem.children[2], li3)
  t.is(elem.node.children[0], li1.node)
  t.is(elem.node.children[1], li2.node)
  t.is(elem.node.children[2], li3.node)
  t.is(elem.toString(), '<ul class="List"><li>one</li><li>two</li><li>three</li></ul>')

  elem.setState({ step : 1 })

  t.not(li1.node, node1)
  t.is(elem.children[0], li2)
  t.is(elem.children[1], li3)
  t.is(elem.children[2], li4)
  t.is(elem.node.children[0], li2.node)
  t.is(elem.node.children[1], li3.node)
  t.is(elem.node.children[2], li4.node)
  t.is(elem.toString(), '<ul class="List"><li>two</li><li>three</li><li>four</li></ul>')

  elem.setState({ step : 2 })

  t.is(elem.children[0], li0)
  t.is(elem.children[1], li4)
  t.is(elem.children[2], li3)
  t.is(elem.children[3], li2)
  t.is(elem.node.children[0], li0.node)
  t.is(elem.node.children[1], li4.node)
  t.is(elem.node.children[2], li3.node)
  t.is(elem.node.children[3], li2.node)
  t.is(elem.toString(), '<ul class="List"><li>zero</li><li>four</li><li>three</li><li class="Item">two</li></ul>')
})
