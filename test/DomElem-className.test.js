const test = require('ava')
const { HtmlDiv } = require('..')

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

let instance

test.afterEach(() => instance.destroy())

test('test #1', t => {
  instance = Foo.render('bar')

  t.is(instance.node.className, 'Foo')
  t.is(instance.toString(), '<div class="Foo">bar</div>')
})

test('test #2', t => {
  instance = Bar.render('bat')

  t.is(instance.node.className, 'Bar Foo')
  t.is(instance.toString(), '<div class="Bar Foo">bat</div>')
})

test('test #3', t => {
  instance = Bat.render('bar')

  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('test #4', t => {
  instance = Foo.render({ className : null, text : 'bar' })

  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('test #5', t => {
  instance = Baz.render('bar')

  t.is(instance.node.className, 'foo')
  t.is(instance.toString(), '<div class="foo">bar</div>')
})
