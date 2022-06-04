const test = require('ava')
const { DomElem, HtmlDiv } = require('..')

class Foo extends DomElem
{
  static prefix = 'Test'
}

class Bar extends DomElem
{
  static localName = 'meta'
}

let instance

test.afterEach(() => instance.destroy())

test('createNode: incorrect prefix', t => {
  t.throws(() => Foo.render())
})

test('localName #1', t => {
  instance = Bar.render()

  t.is(instance.node.localName, 'meta')
  t.is(instance.toString(), '<meta>')
})

test('localName #2', t => {
  instance = DomElem.render({ localName : 'link' })

  t.is(instance.node.localName, 'link')
  t.is(instance.toString(), '<link>')
})

test('attrs', t => {
  instance = HtmlDiv.render({
    attrs : {
      'aria-hidden' : 'true',
      'aria-label' : null,
    },
    style : undefined,
  })

  t.is(instance.attrs['aria-hidden'], 'true')
  t.is(instance.attrs['aria-label'], undefined)
  t.is(instance.getAttr('aria-hidden'), 'true')
  t.false(instance.node.hasAttribute('aria-label'))
  t.false(instance.node.hasAttribute('style'))
  t.is(instance.toString(), '<div aria-hidden="true"></div>')

  instance.setAttr('aria-hidden', 'false')

  t.is(instance.getAttr('aria-hidden'), 'false')

  instance.setAttr('aria-hidden', null)

  t.is(instance.getAttr('aria-hidden'), null)
})

test('class', t => {
  instance = HtmlDiv.render({ class : ['foo', null, 'bar'] })

  t.deepEqual(instance.class, ['foo', 'bar'])

  instance.class = { foo : false, bat : true }

  t.deepEqual(instance.class, ['bar', 'bat'])

  instance.class = 'foo baz'

  t.deepEqual(instance.class, ['foo', 'baz'])
})
