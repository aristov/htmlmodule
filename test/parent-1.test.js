import test from 'ava'
import window from '../lib/window.cjs'
import { ElemType } from '../index.js'

const { document } =  window

class Child extends ElemType
{
  static class = 'Child'

  state = {
    hidden : true,
  }

  render() {
    if(this.state.hidden) {
      return this.parent = null
    }
    return this.props.children
  }
}

class Parent extends ElemType
{
  static class = 'Parent'

  state = {
    text : 'foo',
  }

  render() {
    return new Child(this.state.text)
  }
}

test('test #1', t => {
  const elem = Parent.render()

  t.is(elem.toString(), '<div class="Parent"><!--Child--></div>')

  elem.children[0].setState({ hidden : false })

  t.is(elem.toString(), '<div class="Parent"><div class="Child">foo</div></div>')

  elem.children[0].setState({ hidden : true })

  t.is(elem.toString(), '<div class="Parent"><!--Child--></div>')

  elem.setState({ text : 'bar' })

  t.is(elem.toString(), '<div class="Parent"><!--Child--></div>')

  elem.children[0].setState({ hidden : false })

  t.is(elem.toString(), '<div class="Parent"><div class="Child">bar</div></div>')
})

test('test #2', t => {
  const root = document.createElement('body')
  const elem = Child.render('foo', root)

  t.is(root.outerHTML, '<body><!--Child--></body>')

  elem.setState({ hidden : false })

  t.is(root.outerHTML, '<body><div class="Child">foo</div></body>')
})

test('test #3', t => {
  const root = document.createElement('body')
  const node = document.createElement('div')
  root.append(node)
  const elem = Child.render({
    node,
    children : 'foo',
  })

  t.is(root.outerHTML, '<body><!--Child--></body>')

  elem.setState({ hidden : false })

  t.is(root.outerHTML, '<body><div class="Child">foo</div></body>')
})
