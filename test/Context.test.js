const test = require('ava')
const { ElemType, Context } = require('..')

const ChildContext = new Context(null)

class Parent extends ElemType
{
  render() {
    return ChildContext.Provider({
      value : ['foo', this.props.value],
      children : this.props.children,
    })
  }
}

class Child extends ElemType
{
  render() {
    return ChildContext.Consumer(value => value.join(' '))
  }
}

test('test #1', t => {
  const parent = Parent.render({
    value : 'bar',
    children : new Child,
  })

  t.is(parent.toString(), '<div class="Parent"><div class="Child">foo bar</div></div>')
})
