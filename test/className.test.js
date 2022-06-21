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

test('test #1', t => {
  const elem = Foo.render('bar')

  t.is(elem.node.className, 'Foo')
  t.is(elem.toString(), '<div class="Foo">bar</div>')
})

test('test #2', t => {
  const elem = Bar.render('bat')

  t.is(elem.node.className, 'Bar Foo')
  t.is(elem.toString(), '<div class="Bar Foo">bat</div>')
})

test('test #3', t => {
  const elem = Bat.render('bar')

  t.is(elem.node.className, '')
  t.is(elem.toString(), '<div>bar</div>')
})

test('test #4', t => {
  const elem = Foo.render({ className : null, children : 'bar' })

  t.is(elem.node.className, '')
  t.is(elem.toString(), '<div>bar</div>')
})

test('test #5', t => {
  const elem = Baz.render('bar')

  t.is(elem.node.className, 'foo')
  t.is(elem.toString(), '<div class="foo">bar</div>')
})
