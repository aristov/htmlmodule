const test = require('ava')
const { DomElem, HtmlDiv } = require('..')

class Example extends DomElem
{
  static prefix = 'Test'
}

let instance

test.afterEach(() => instance.destroy())

test('createNode: incorrect prefix', t => {
  t.throws(() => Example.render())
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
