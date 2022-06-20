const test = require('ava')
const { HtmlA, HtmlDiv, HtmlSpan } = require('..')

let instance

test.afterEach(() => instance.destroy())

test('children', t => {
  instance = HtmlDiv.render([
    'foo', null, [new HtmlSpan('bar'), [], [['bat'], new HtmlA('baz')]],
  ])

  t.is(instance.node.childNodes.length, 4)
  t.is(instance.node.childElementCount, 2)
  t.is(instance.toString(), '<div>foo<span>bar</span>bat<a>baz</a></div>')
})

test('destroy', t => {
  const children = new HtmlSpan('foo')
  const instance = HtmlDiv.render({
    onclick : () => {},
    children,
  })
  instance.destroy()

  t.is(instance.node, null)
  t.is(instance.onclick, null)
  t.is(children.node, null)
})
