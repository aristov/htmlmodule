const test = require('ava')
const { HTMLDivElement } = require('xwindow')
const { ElemType, HtmlA, HtmlSpan } = require('..')

test('test #1', t => {
  const elem = ElemType.render()

  t.deepEqual(Object.keys(elem), [])
  t.deepEqual(Object.assign({}, elem), {})
  for(const key in elem) {
    t.fail()
  }
})

test('className', t => {
  class Foo extends ElemType
  {
  }

  const elem = Foo.render('bar')

  t.is(elem.tagName, 'DIV')
  t.is(elem.node.className, 'Foo')
  t.is(elem.node.textContent, 'bar')
  t.is(elem.node.constructor, HTMLDivElement)
  t.is(elem.toString(), '<div class="Foo">bar</div>')
})

test('children', t => {
  const elem = ElemType.render([
    'foo', null, [new HtmlSpan('bar'), [], [['bat'], new HtmlA('baz')]],
  ])

  t.is(elem.node.childNodes.length, 4)
  t.is(elem.node.childElementCount, 2)
  t.is(elem.toString(), '<div>foo<span>bar</span>bat<a>baz</a></div>')
})

test('getAttr + setAttr', t => {
  const elem = ElemType.render()

  t.is(elem.toString(), '<div></div>')

  elem.setAttr('aria-busy', 'true')

  t.is(elem.getAttr('aria-busy'), 'true')
  t.is(elem.toString(), '<div aria-busy="true"></div>')

  elem.setAttr('aria-busy', null)

  t.is(elem.getAttr('aria-busy'), null)
  t.is(elem.toString(), '<div></div>')
})
