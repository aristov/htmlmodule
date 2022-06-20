const test = require('ava')
const { HTMLUnknownElement } = require('xwindow')
const { ElemType, HtmlA, HtmlDiv, HtmlSpan } = require('..')

let instance

test.afterEach(() => instance.destroy())

test('className', t => {
  class Foo extends ElemType
  {
  }

  const elem = Foo.render('bar')

  t.is(elem.tagName, 'UNDEFINED')
  t.is(elem.node.className, 'Foo')
  t.is(elem.node.textContent, 'bar')
  t.is(elem.node.constructor, HTMLUnknownElement)
  t.is(elem.toString(), '<undefined class="Foo">bar</undefined>')
})

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
  instance = HtmlDiv.render({
    attributes : {
      'aria-hidden' : 'true',
      'aria-label' : null,
    },
    style : undefined,
  })

  t.is(instance.getAttr('aria-hidden'), 'true')
  t.false(instance.node.hasAttribute('aria-label'))
  t.false(instance.node.hasAttribute('style'))
  t.is(instance.toString(), '<div aria-hidden="true"></div>')

  instance.setAttr('aria-hidden', 'false')

  t.is(instance.getAttr('aria-hidden'), 'false')

  instance.setAttr('aria-hidden', null)

  t.is(instance.getAttr('aria-hidden'), null)
})

test('classList', t => {
  instance = HtmlDiv.render({ classList : ['foo', null, 'bar'] })

  t.is(instance.classList[0], 'foo')
  t.is(instance.classList[1], 'bar')

  instance.classList = { foo : false, bat : true }

  t.is(instance.classList[0], 'bar')
  t.is(instance.classList[1], 'bat')

  instance.classList = 'foo baz'

  t.is(instance.classList[0], 'foo')
  t.is(instance.classList[1], 'baz')
})
