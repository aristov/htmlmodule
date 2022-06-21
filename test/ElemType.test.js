const test = require('ava')
const { HTMLUnknownElement } = require('xwindow')
const { ElemType, HtmlA, HtmlDiv, HtmlSpan } = require('..')

let elem

test.afterEach(() => elem.destroy())

test('test #1', t => {
  elem = ElemType.render()

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

  elem = Foo.render('bar')

  t.is(elem.tagName, 'UNDEFINED')
  t.is(elem.node.className, 'Foo')
  t.is(elem.node.textContent, 'bar')
  t.is(elem.node.constructor, HTMLUnknownElement)
  t.is(elem.toString(), '<undefined class="Foo">bar</undefined>')
})

test('children', t => {
  elem = HtmlDiv.render([
    'foo', null, [new HtmlSpan('bar'), [], [['bat'], new HtmlA('baz')]],
  ])

  t.is(elem.node.childNodes.length, 4)
  t.is(elem.node.childElementCount, 2)
  t.is(elem.toString(), '<div>foo<span>bar</span>bat<a>baz</a></div>')
})

test('destroy', t => {
  const children = new HtmlSpan('foo')
  const instance = HtmlDiv.render({
    onclick : () => {
    },
    children,
  })
  instance.destroy()

  t.is(instance.node, null)
  t.is(instance.onclick, null)
  t.is(children.node, null)
})

test('attributes', t => {
  elem = HtmlDiv.render({
    attributes : {
      'aria-hidden' : 'true',
      'aria-label' : null,
    },
    style : undefined,
  })

  t.is(elem.getAttr('aria-hidden'), 'true')
  t.false(elem.node.hasAttribute('aria-label'))
  t.false(elem.node.hasAttribute('style'))
  t.is(elem.toString(), '<div aria-hidden="true"></div>')

  elem.setAttr('aria-hidden', 'false')

  t.is(elem.getAttr('aria-hidden'), 'false')

  elem.setAttr('aria-hidden', null)

  t.is(elem.getAttr('aria-hidden'), null)
})

test('classList', t => {
  elem = HtmlDiv.render({ classList : ['foo', null, 'bar'] })

  t.is(elem.classList[0], 'foo')
  t.is(elem.classList[1], 'bar')

  elem.classList = { foo : false, bat : true }

  t.is(elem.classList[0], 'bar')
  t.is(elem.classList[1], 'bat')

  elem.classList = 'foo baz'

  t.is(elem.classList[0], 'foo')
  t.is(elem.classList[1], 'baz')
})
