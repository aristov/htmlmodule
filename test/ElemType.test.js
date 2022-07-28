const test = require('ava')
const { HTMLDivElement } = require('xwindow')
const { ElemType, HtmlA, HtmlB, HtmlI, HtmlP } = require('..')

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
    'foo',
    null,
    [
      new HtmlA('bar'),
      [],
      true,
      [
        [new HtmlB('bat'), 'baz'],
        false,
        new HtmlI(42),
      ],
      NaN,
      new HtmlP(0),
    ],
    undefined,
  ])

  t.is(elem.node.childNodes.length, 8)
  t.is(elem.node.childElementCount, 4)
  t.is(elem.toString(), '<div>foo<a>bar</a>true<b>bat</b>baz<i>42</i>NaN<p>0</p></div>')
})
