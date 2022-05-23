const test = require('ava')
const { document } = require('xwindow')
const { DomElem, HtmlDiv } = require('..')

class Foo extends HtmlDiv
{
}

class Bar extends Foo
{
}

class Bat extends HtmlDiv
{
  className = null
}

class Baz extends HtmlDiv
{
  className = 'foo'
}

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

test('className #1', t => {
  instance = Foo.render('bar', document.createElement('body'))
  t.is(instance.node.className, 'Foo')
  t.is(instance.toString(), '<div class="Foo">bar</div>')
})

test('className #2', t => {
  instance = Bar.render('bat', document.createElement('body'))
  t.is(instance.node.className, 'Bar Foo')
  t.is(instance.toString(), '<div class="Bar Foo">bat</div>')
})

test('className #3', t => {
  instance = Bat.render('bar', document.createElement('body'))
  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('className #4', t => {
  instance = Foo.render({ className : null, text : 'bar' }, document.createElement('body'))
  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('className #5', t => {
  instance = Baz.render('bar', document.createElement('body'))
  t.is(instance.node.className, 'foo')
  t.is(instance.toString(), '<div class="foo">bar</div>')
})
