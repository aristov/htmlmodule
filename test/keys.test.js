const test = require('ava')
const { HtmlUl, HtmlLi } = require('..')

let li1, li2, li3, li4

class List extends HtmlUl
{
  state = { step : 0 }

  render() {
    if(this.state.step === 0) {
      return [
        li1 = new HtmlLi({ key : 'id1', text : 'one' }),
        li2 = new HtmlLi({ key : 'id2', text : 'two' }),
        li3 = new HtmlLi({ key : 'id3', text : 'three' }),
      ]
    }
    if(this.state.step === 1) {
      return [
        new HtmlLi({ key : 'id2', text : 'two' }),
        new HtmlLi({ key : 'id3', text : 'three' }),
        li4 = new HtmlLi({ key : 'id4', text : 'four' }),
      ]
    }
  }
}

test('test #1', t => {
  const instance = List.render()
  t.is(instance.toString(), '<ul class="List"><li>one</li><li>two</li><li>three</li></ul>')
  t.is(instance.props.children[0].node, li1.node)
  t.is(instance.props.children[1].node, li2.node)
  t.is(instance.props.children[2].node, li3.node)

  instance.setState({ step : 1 })
  t.is(instance.toString(), '<ul class="List"><li>two</li><li>three</li><li>four</li></ul>')
  t.is(li1.node, null)
  t.is(instance.props.children[0].node, li2.node)
  t.is(instance.props.children[1].node, li3.node)
  t.is(instance.props.children[2].node, li4.node)
})
