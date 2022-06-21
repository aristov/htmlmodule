const test = require('ava')
const { AttrType, ElemType } = require('..')

class AriaHidden extends AttrType
{
  static nodeName = 'aria-hidden'

  static propName = 'hidden'
}

class Block extends ElemType
{
  state = {
    hidden : undefined,
  }

  render() {
    this.hidden = this.state.hidden === undefined ?
      this.props.hidden :
      this.state.hidden
    return super.render()
  }
}

Block.defineAttrs([AriaHidden])

test('test #1', t => {
  const elem = ElemType.render('test')
  elem.setAttr(AriaHidden, 'true')

  t.is(elem.getAttr(AriaHidden), 'true')
  t.is(elem.toString(), '<div aria-hidden="true">test</div>')
})

test('test #2', t => {
  const elem = Block.render({
    hidden : false,
    children : 'test',
  })

  t.is(elem.hidden, 'false')
  t.is(elem.toString(), '<div class="Block" aria-hidden="false">test</div>')

  elem.setState({ hidden : null })

  t.is(elem.hidden, null)
  t.is(elem.getAttr(AriaHidden), null)
  t.is(elem.toString(), '<div class="Block">test</div>')

  elem.setState({ hidden : true })

  t.is(elem.hidden, 'true')
  t.is(elem.getAttr(AriaHidden), 'true')
  t.is(elem.toString(), '<div class="Block" aria-hidden="true">test</div>')
})
